'reach 0.1';

const token = Object({ name_: Bytes(4),
                       supply: UInt,
                       unit: Bytes(3),
                       JSH: Token, });

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Alice = Participant('Alice', {
    whitelistParams: Object({maxEntries: UInt, duration: UInt}),
    token: Fun([], token),
    ready: Fun([],Null),
    seeJoin: Fun([UInt,Address],Null),
    informTimeout: Fun([],Null),
    reward: Fun([], Null),
    paying: Fun([],Bool),
    showOutcome: Fun([],Null),
  });
  const Bob = API('Bob', { 
    join: Fun([],Null),
    receiveToken: Fun([],Null),
  });
  init();

  // Alice deploys the contract
  Alice.only(() => {
    const {name_,supply,unit,JSH} = declassify(interact.token());
    const {maxEntries, duration} = declassify(interact.whitelistParams);
  });

  Alice.publish(name_,supply,unit,JSH,maxEntries,duration);
  commit();
  Alice.publish();

  Alice.only(() => {
    interact.ready();
  });
  
  const timeOut = relativeTime(duration);
  const entrants = new Set();

  // Bobs join the whitelist
  const 
  [ isOpen,
    entries,
    index, ] =
    parallelReduce([ true, 0 , 1])
    .invariant(entries <= maxEntries)
    .while(isOpen && entries < maxEntries)
    .api_(Bob.join, () => {
      check(!entrants.member(this), "Participant is already in the whitelist");
      return [ (k) => {
        k(null);
        const who = this;
        entrants.insert(who);
        Alice.interact.seeJoin(index,who);

        return [ true, entries + 1 , index + 1];
      }];
    })
    .timeout(timeOut,() => {
      Alice.publish();
      Alice.interact.informTimeout();
      return [false, entries, index];
    });



  // The Bobs are paid tokens
  var unpaidBobs = entries; 
  invariant(entries <= maxEntries);
  while(unpaidBobs > 0){

    const payout = 20
    commit();
    Alice.pay([[payout,JSH]]);
    Alice.interact.reward();

    const [ bobA] = 
        parallelReduce([Alice])
        .invariant(entries <= maxEntries)
        .while(bobA == Alice && unpaidBobs > 0)
        .api_(Bob.receiveToken, () => {
          check(entrants.member(this), "Participant is not in the whitelist")
          return [(k) => {
            k(null)
            entrants.remove(this);
            return [this];
          } ];
        })
        .timeout(false)

    commit();
    Alice.publish();
    transfer([[balance(JSH),JSH]]).to(bobA);

    unpaidBobs = unpaidBobs - 1;
    continue;
  }

  transfer(balance(JSH),JSH).to(Alice);
  transfer(balance()).to(Alice);
  Alice.interact.showOutcome();
  commit();
});



