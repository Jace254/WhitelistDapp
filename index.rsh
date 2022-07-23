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
    seeJoin: Fun([Address,Address],Null),
    informTimeout: Fun([],Null),
    reward: Fun([], Bool),
    paying: Fun([], Bool),
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
  Alice.interact.ready(); 
  
  const timeOut = relativeTime(duration);
  const entrants = new Set();
  // Bobs join the whitelist
  const 
  [ isOpen,
    entries ] =
    parallelReduce([ true, 0 ])
    .invariant(entries <= maxEntries)
    .while(isOpen && entries < maxEntries)
    .api_(Bob.join, () => {
      check(!entrants.member(this))
      return [ (k) => {
        k(null);
        const who = this;
        entrants.insert(who);
        Alice.interact.seeJoin(who,who);
        return [ true, entries + 1 ];
      }];
    })
    .timeout(timeOut,() => {
      Alice.publish();
      Alice.interact.informTimeout();
      return [false, entries];
    });

  const payout = ((10/100) * supply)/entries;

  var isPaying = true; 
  invariant(entries <= maxEntries);
  while(isPaying){

    commit();
    Alice.pay([[payout,JSH]]);
    

    const 
    [ paying,
      done_,
      bobA ] = 
        parallelReduce([ true, false, Alice])
        .invariant(entries <= maxEntries)
        .while(! done_)
        .case(Alice, 
          () => ({when : declassify(interact.paying())}),
          (_) => {
            commit();
            Alice.only(() => {
              const done = declassify(interact.reward());
            })
            Alice.publish(done);
            const bob = parallelReduce(bobA)
                        .invariant(isPaying == true)
                        .while(bob == bobA)
                        .api_(Bob.receiveToken, () => {
                          check(entrants.member(this))
                          return [ (k) => {
                            k(null)
                            entrants.remove(this);
                            return this;
                          } ];
                        })
            return [ done, done, bob];
        })
        .timeout(2000, () => {
          Alice.publish();
          return[paying,done_,bobA];
        })

    commit();
    Alice.publish();

    transfer(balance(JSH),JSH).to(bobA);
    Alice.interact.showOutcome();

    isPaying = paying;
    continue;
  }
  transfer(balance(JSH),JSH).to(Alice);
  transfer(balance()).to(Alice);
  commit();

});



