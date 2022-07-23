'reach 0.1';

const token = Object({ name_: Bytes(4),
                       supply: UInt,
                       unit: Bytes(3),
                       JSH: Token, });

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Alice = Participant('Alice', {
    ...hasConsoleLogger,
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
  // Bobs attach to the contract
  Alice.interact.ready(); 
  
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
      check(!entrants.member(this))
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



  // The entrants are paid tokens
  var unpaidEntrants = entries; 
  invariant(entries <= maxEntries);
  while(unpaidEntrants > 0){

    commit();
    Alice.pay([[20,JSH]]);
    Alice.interact.reward();
    

    const [ bobA] = 
        parallelReduce([Alice])
        .invariant(entries <= maxEntries)
        .while(bobA == Alice && unpaidEntrants > 0)
        // .case(Alice, 
        //   ( ) => ({when: declassify(interact.paying())}),
        //   (_) => [20, [payout,JSH] ],
        //   (_) => { return [true, bobA]; }
        // )
        .api_(Bob.receiveToken, () => {
          check(entrants.member(this))
          return [ [0,[0,JSH]],(k) => {
            k(null)
            entrants.remove(this);
            transfer([[balance(JSH),JSH]]).to(this);
            return [this];
          } ];
        })
        .timeout(false)

    commit();
    Alice.publish();
    unpaidEntrants = unpaidEntrants - 1;
    continue;
  }

  transfer(balance(JSH),JSH).to(Alice);
  transfer(balance()).to(Alice);
  Alice.interact.showOutcome();
  commit();
});



