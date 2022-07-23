// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5],
      5: [ctc0, ctc1, ctc2, ctc5, ctc2],
      7: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc5, ctc2],
      8: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc5, ctc2, ctc2],
      9: [ctc0, ctc1, ctc2, ctc0, ctc5, ctc2],
      11: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc5, ctc2],
      12: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    duration: ctc2,
    maxEntries: ctc2
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Object({
    JSH: ctc4,
    name_: ctc5,
    supply: ctc2,
    unit: ctc6
    });
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc2, ctc2, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v485 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v486 = [v485];
  const v490 = stdlib.protect(ctc3, interact.whitelistParams, 'for Alice\'s interact field whitelistParams');
  const v491 = v490.duration;
  const v492 = v490.maxEntries;
  
  const v495 = stdlib.protect(ctc7, await interact.token(), {
    at: './index.rsh:28:62:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'token',
    who: 'Alice'
    });
  const v496 = v495.JSH;
  const v497 = v495.name_;
  const v498 = v495.supply;
  const v499 = v495.unit;
  
  const txn1 = await (ctc.sendrecv({
    args: [v497, v498, v499, v496, v492, v491],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc2, ctc6, ctc4, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v507, v508, v509, v510, v511, v512], secs: v514, time: v513, didSend: v45, from: v506 } = txn1;
      
      const v515 = v486[stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '0')];
      const v517 = v515[stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '1')];
      const v518 = v515[stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '2')];
      const v519 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v517, v518];
      const v520 = stdlib.Array_set(v486, stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '0'), v519);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v510
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc6, ctc4, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v507, v508, v509, v510, v511, v512], secs: v514, time: v513, didSend: v45, from: v506 } = txn1;
  const v515 = v486[stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '0')];
  const v517 = v515[stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '1')];
  const v518 = v515[stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '2')];
  const v519 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v517, v518];
  const v520 = stdlib.Array_set(v486, stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, '0'), v519);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v506, v510, v511, v512, v513, v520],
    evt_cnt: 0,
    funcNum: 1,
    lct: v513,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v524, time: v523, didSend: v50, from: v522 } = txn2;
      
      ;
      
      const v533 = stdlib.add(v513, v512);
      const v535 = stdlib.checkedBigNumberify('./index.rsh:43:28:decimal', stdlib.UInt_max, '0');
      const v536 = true;
      const v537 = v523;
      const v543 = v520;
      const v544 = stdlib.checkedBigNumberify('./index.rsh:24:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v546 = stdlib.lt(v535, v511);
        const v547 = v536 ? v546 : false;
        
        return v547;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v587 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:62:28:application', stdlib.UInt_max, '0'), v535);
        const v588 = true;
        const v589 = v537;
        const v595 = v543;
        const v596 = v544;
        
        if (await (async () => {
          
          return v588;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v714 = v595[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
          const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v506,
            tok: v510
            });
          sim_r.txns.push({
            kind: 'from',
            to: v506,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v510
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc4, ctc2, ctc2, ctc2, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v524, time: v523, didSend: v50, from: v522 } = txn2;
  ;
  const v525 = stdlib.addressEq(v506, v522);
  stdlib.assert(v525, {
    at: './index.rsh:34:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:35:23:application',
    fs: ['at ./index.rsh:35:23:application call to [unknown function] (defined at: ./index.rsh:35:23:function exp)', 'at ./index.rsh:35:23:application call to "liftedInteract" (defined at: ./index.rsh:35:23:application)'],
    msg: 'ready',
    who: 'Alice'
    });
  
  const v533 = stdlib.add(v513, v512);
  let v535 = stdlib.checkedBigNumberify('./index.rsh:43:28:decimal', stdlib.UInt_max, '0');
  let v536 = true;
  let v537 = v523;
  let v543 = v520;
  let v544 = stdlib.checkedBigNumberify('./index.rsh:24:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v546 = stdlib.lt(v535, v511);
    const v547 = v536 ? v546 : false;
    
    return v547;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 12,
      out_tys: [ctc8],
      timeoutAt: ['time', v533],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v506, v510, v511, v533, v535, v543, v544],
        evt_cnt: 0,
        funcNum: 13,
        lct: v537,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:57:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v582, time: v581, didSend: v196, from: v580 } = txn4;
          
          ;
          
          const cv535 = v535;
          const cv536 = false;
          const cv537 = v581;
          const cv543 = v543;
          const cv544 = v544;
          
          await (async () => {
            const v535 = cv535;
            const v536 = cv536;
            const v537 = cv537;
            const v543 = cv543;
            const v544 = cv544;
            
            if (await (async () => {
              const v546 = stdlib.lt(v535, v511);
              const v547 = v536 ? v546 : false;
              
              return v547;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v587 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:62:28:application', stdlib.UInt_max, '0'), v535);
              const v588 = true;
              const v589 = v537;
              const v595 = v543;
              const v596 = v544;
              
              if (await (async () => {
                
                return v588;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v714 = v595[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
                const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v506,
                  tok: v510
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v506,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v510
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc9, ctc4, ctc2, ctc2, ctc2, ctc12, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v582, time: v581, didSend: v196, from: v580 } = txn4;
      ;
      const v583 = stdlib.addressEq(v506, v580);
      stdlib.assert(v583, {
        at: './index.rsh:57:13:dot',
        fs: ['at ./index.rsh:56:25:application call to [unknown function] (defined at: ./index.rsh:56:25:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc0, await interact.informTimeout(), {
        at: './index.rsh:58:35:application',
        fs: ['at ./index.rsh:58:35:application call to [unknown function] (defined at: ./index.rsh:58:35:function exp)', 'at ./index.rsh:58:35:application call to "liftedInteract" (defined at: ./index.rsh:58:35:application)', 'at ./index.rsh:56:25:application call to [unknown function] (defined at: ./index.rsh:56:25:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      const cv535 = v535;
      const cv536 = false;
      const cv537 = v581;
      const cv543 = v543;
      const cv544 = v544;
      
      v535 = cv535;
      v536 = cv536;
      v537 = cv537;
      v543 = cv543;
      v544 = cv544;
      
      continue;
      }
    else {
      const {data: [v560], secs: v562, time: v561, didSend: v150, from: v559 } = txn3;
      undefined /* setApiDetails */;
      ;
      const v564 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v559), null);
      let v565;
      switch (v564[0]) {
        case 'None': {
          const v566 = v564[1];
          v565 = false;
          
          break;
          }
        case 'Some': {
          const v567 = v564[1];
          v565 = true;
          
          break;
          }
        }
      const v568 = v565 ? false : true;
      stdlib.assert(v568, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:47:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:48:20:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v570 = null;
      await txn3.getOutput('Bob_join', 'v570', ctc0, v570);
      await stdlib.mapSet(map0, v559, null);
      stdlib.protect(ctc0, await interact.seeJoin(v559, v559), {
        at: './index.rsh:52:31:application',
        fs: ['at ./index.rsh:52:31:application call to [unknown function] (defined at: ./index.rsh:52:31:function exp)', 'at ./index.rsh:52:31:application call to "liftedInteract" (defined at: ./index.rsh:52:31:application)', 'at ./index.rsh:48:20:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)'],
        msg: 'seeJoin',
        who: 'Alice'
        });
      
      const v578 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '1'));
      const cv535 = v578;
      const cv536 = true;
      const cv537 = v561;
      const cv543 = v543;
      const cv544 = v544;
      
      v535 = cv535;
      v536 = cv536;
      v537 = cv537;
      v543 = cv543;
      v544 = cv544;
      
      continue;}
    
    }
  const v587 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:62:28:application', stdlib.UInt_max, '0'), v535);
  let v588 = true;
  let v589 = v537;
  let v595 = v543;
  let v596 = v544;
  
  while (await (async () => {
    
    return v588;})()) {
    const txn3 = await (ctc.sendrecv({
      args: [v506, v510, v587, v595, v596],
      evt_cnt: 0,
      funcNum: 4,
      lct: v589,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '0'), [[v587, v510]]],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [], secs: v600, time: v599, didSend: v213, from: v598 } = txn3;
        
        ;
        const v601 = v595[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '0')];
        const v602 = v601[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '0')];
        const v603 = stdlib.add(v602, v587);
        const v606 = v601[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '1')];
        const v607 = v601[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '2')];
        const v608 = [v603, v606, v607];
        const v609 = stdlib.Array_set(v595, stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '0'), v608);
        sim_r.txns.push({
          amt: v587,
          kind: 'to',
          tok: v510
          });
        const v611 = v506;
        const v612 = false;
        const v613 = true;
        const v614 = v599;
        const v620 = v609;
        const v621 = v596;
        
        if (await (async () => {
          const v623 = v612 ? false : true;
          
          return v623;})()) {
          const v629 = stdlib.add(v614, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc9, ctc4, ctc2, ctc12, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v600, time: v599, didSend: v213, from: v598 } = txn3;
    ;
    const v601 = v595[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '0')];
    const v602 = v601[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '0')];
    const v603 = stdlib.add(v602, v587);
    const v606 = v601[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '1')];
    const v607 = v601[stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '2')];
    const v608 = [v603, v606, v607];
    const v609 = stdlib.Array_set(v595, stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, '0'), v608);
    ;
    const v610 = stdlib.addressEq(v506, v598);
    stdlib.assert(v610, {
      at: './index.rsh:69:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    let v611 = v506;
    let v612 = false;
    let v613 = true;
    let v614 = v599;
    let v620 = v609;
    let v621 = v596;
    
    while (await (async () => {
      const v623 = v612 ? false : true;
      
      return v623;})()) {
      const v626 = stdlib.sub(stdlib.UInt_max, v614);
      const v627 = stdlib.sub(v626, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
      const v628 = stdlib.ge(v627, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v628, {
        at: 'reach standard library:578:15:application',
        fs: ['at reach standard library:586:29:application call to [unknown function] (defined at: reach standard library:575:55:function exp)', 'at ./index.rsh:100:17:application call to "relativeTime" (defined at: reach standard library:581:71:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v629 = stdlib.add(v614, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
      const v633 = stdlib.protect(ctc10, await interact.paying(), {
        at: './index.rsh:80:52:application',
        fs: ['at ./index.rsh:80:14:application call to [unknown function] (defined at: ./index.rsh:80:14:function exp)', 'at ./index.rsh:80:14:application call to [unknown function] (defined at: ./index.rsh:80:14:function exp)'],
        msg: 'paying',
        who: 'Alice'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v506, v510, v587, v611, v612, v613, v620, v621, v629, null],
        evt_cnt: 1,
        funcNum: 7,
        lct: v614,
        onlyIf: v633,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:79:14:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [v636], secs: v638, time: v637, didSend: v245, from: v635 } = txn4;
          
          ;
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v629],
        tys: [ctc9, ctc4, ctc2, ctc9, ctc10, ctc10, ctc12, ctc2, ctc2, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v506, v510, v587, v611, v612, v613, v620, v621, v629],
          evt_cnt: 0,
          funcNum: 8,
          lct: v614,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:101:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v691, time: v690, didSend: v383, from: v689 } = txn5;
            
            ;
            const cv611 = v611;
            const cv612 = v612;
            const cv613 = v613;
            const cv614 = v690;
            const cv620 = v620;
            const cv621 = v621;
            
            await (async () => {
              const v611 = cv611;
              const v612 = cv612;
              const v613 = cv613;
              const v614 = cv614;
              const v620 = cv620;
              const v621 = cv621;
              
              if (await (async () => {
                const v623 = v612 ? false : true;
                
                return v623;})()) {
                const v626 = stdlib.sub(stdlib.UInt_max, v614);
                const v627 = stdlib.sub(v626, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
                const v628 = stdlib.ge(v627, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
                ;
                const v629 = stdlib.add(v614, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc9, ctc4, ctc2, ctc9, ctc10, ctc10, ctc12, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v691, time: v690, didSend: v383, from: v689 } = txn5;
        ;
        const v692 = stdlib.addressEq(v506, v689);
        stdlib.assert(v692, {
          at: './index.rsh:101:17:dot',
          fs: ['at ./index.rsh:100:27:application call to [unknown function] (defined at: ./index.rsh:100:27:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        const cv611 = v611;
        const cv612 = v612;
        const cv613 = v613;
        const cv614 = v690;
        const cv620 = v620;
        const cv621 = v621;
        
        v611 = cv611;
        v612 = cv612;
        v613 = cv613;
        v614 = cv614;
        v620 = cv620;
        v621 = cv621;
        
        continue;
        }
      else {
        const {data: [v636], secs: v638, time: v637, didSend: v245, from: v635 } = txn4;
        ;
        const v640 = stdlib.addressEq(v506, v635);
        stdlib.assert(v640, {
          at: './index.rsh:76:23:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v643 = stdlib.protect(ctc10, await interact.reward(), {
          at: './index.rsh:84:54:application',
          fs: ['at ./index.rsh:83:23:application call to [unknown function] (defined at: ./index.rsh:83:27:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
          msg: 'reward',
          who: 'Alice'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v506, v510, v587, v611, v620, v621, v643],
          evt_cnt: 1,
          funcNum: 9,
          lct: v637,
          onlyIf: true,
          out_tys: [ctc10],
          pay: [stdlib.checkedBigNumberify('./index.rsh:86:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [v645], secs: v647, time: v646, didSend: v256, from: v644 } = txn5;
            
            ;
            const v649 = v611;
            const v650 = v646;
            const v656 = v620;
            const v657 = v621;
            
            if (await (async () => {
              const v659 = stdlib.addressEq(v649, v611);
              
              return v659;})()) {
              sim_r.isHalt = false;
              }
            else {
              const cv611 = v649;
              const cv612 = v645;
              const cv613 = v645;
              const cv614 = v650;
              const cv620 = v656;
              const cv621 = v657;
              
              await (async () => {
                const v611 = cv611;
                const v612 = cv612;
                const v613 = cv613;
                const v614 = cv614;
                const v620 = cv620;
                const v621 = cv621;
                
                if (await (async () => {
                  const v623 = v612 ? false : true;
                  
                  return v623;})()) {
                  const v626 = stdlib.sub(stdlib.UInt_max, v614);
                  const v627 = stdlib.sub(v626, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
                  const v628 = stdlib.ge(v627, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
                  ;
                  const v629 = stdlib.add(v614, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.isHalt = false;
                  }})();}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc9, ctc4, ctc2, ctc9, ctc12, ctc2, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [v645], secs: v647, time: v646, didSend: v256, from: v644 } = txn5;
        ;
        const v648 = stdlib.addressEq(v506, v644);
        stdlib.assert(v648, {
          at: './index.rsh:86:19:dot',
          fs: ['at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v649 = v611;
        let v650 = v646;
        let v656 = v620;
        let v657 = v621;
        
        while (await (async () => {
          const v659 = stdlib.addressEq(v649, v611);
          
          return v659;})()) {
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 11,
            out_tys: [ctc8],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v671], secs: v673, time: v672, didSend: v333, from: v670 } = txn6;
          undefined /* setApiDetails */;
          ;
          const v675 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v670), null);
          let v676;
          switch (v675[0]) {
            case 'None': {
              const v677 = v675[1];
              v676 = false;
              
              break;
              }
            case 'Some': {
              const v678 = v675[1];
              v676 = true;
              
              break;
              }
            }
          stdlib.assert(v676, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:91:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:40:application call to [unknown function] (defined at: ./index.rsh:92:40:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v680 = null;
          await txn6.getOutput('Bob_receiveToken', 'v680', ctc0, v680);
          await stdlib.mapSet(map0, v670, undefined /* Nothing */);
          const cv649 = v670;
          const cv650 = v672;
          const cv656 = v656;
          const cv657 = v657;
          
          v649 = cv649;
          v650 = cv650;
          v656 = cv656;
          v657 = cv657;
          
          continue;
          
          }
        const cv611 = v649;
        const cv612 = v645;
        const cv613 = v645;
        const cv614 = v650;
        const cv620 = v656;
        const cv621 = v657;
        
        v611 = cv611;
        v612 = cv612;
        v613 = cv613;
        v614 = cv614;
        v620 = cv620;
        v621 = cv621;
        
        continue;
        
        }
      
      }
    const txn4 = await (ctc.sendrecv({
      args: [v506, v510, v587, v611, v613, v620, v621],
      evt_cnt: 0,
      funcNum: 6,
      lct: v614,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:106:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [], secs: v697, time: v696, didSend: v389, from: v695 } = txn4;
        
        ;
        const v699 = v620[stdlib.checkedBigNumberify('./index.rsh:108:21:application', stdlib.UInt_max, '0')];
        const v700 = v699[stdlib.checkedBigNumberify('./index.rsh:108:21:application', stdlib.UInt_max, '0')];
        const v706 = stdlib.sub(v700, v700);
        const v709 = v699[stdlib.checkedBigNumberify('./index.rsh:108:34:application', stdlib.UInt_max, '1')];
        const v710 = v699[stdlib.checkedBigNumberify('./index.rsh:108:34:application', stdlib.UInt_max, '2')];
        const v711 = [v706, v709, v710];
        const v712 = stdlib.Array_set(v620, stdlib.checkedBigNumberify('./index.rsh:108:34:application', stdlib.UInt_max, '0'), v711);
        sim_r.txns.push({
          kind: 'from',
          to: v611,
          tok: v510
          });
        
        const cv588 = v613;
        const cv589 = v696;
        const cv595 = v712;
        const cv596 = v621;
        
        await (async () => {
          const v588 = cv588;
          const v589 = cv589;
          const v595 = cv595;
          const v596 = cv596;
          
          if (await (async () => {
            
            return v588;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v714 = v595[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
            const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v506,
              tok: v510
              });
            sim_r.txns.push({
              kind: 'from',
              to: v506,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v510
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc9, ctc4, ctc2, ctc9, ctc10, ctc12, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v697, time: v696, didSend: v389, from: v695 } = txn4;
    ;
    const v698 = stdlib.addressEq(v506, v695);
    stdlib.assert(v698, {
      at: './index.rsh:106:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v699 = v620[stdlib.checkedBigNumberify('./index.rsh:108:21:application', stdlib.UInt_max, '0')];
    const v700 = v699[stdlib.checkedBigNumberify('./index.rsh:108:21:application', stdlib.UInt_max, '0')];
    const v706 = stdlib.sub(v700, v700);
    const v709 = v699[stdlib.checkedBigNumberify('./index.rsh:108:34:application', stdlib.UInt_max, '1')];
    const v710 = v699[stdlib.checkedBigNumberify('./index.rsh:108:34:application', stdlib.UInt_max, '2')];
    const v711 = [v706, v709, v710];
    const v712 = stdlib.Array_set(v620, stdlib.checkedBigNumberify('./index.rsh:108:34:application', stdlib.UInt_max, '0'), v711);
    ;
    stdlib.protect(ctc0, await interact.showOutcome(), {
      at: './index.rsh:109:31:application',
      fs: ['at ./index.rsh:109:31:application call to [unknown function] (defined at: ./index.rsh:109:31:function exp)', 'at ./index.rsh:109:31:application call to "liftedInteract" (defined at: ./index.rsh:109:31:application)'],
      msg: 'showOutcome',
      who: 'Alice'
      });
    
    const cv588 = v613;
    const cv589 = v696;
    const cv595 = v712;
    const cv596 = v621;
    
    v588 = cv588;
    v589 = cv589;
    v595 = cv595;
    v596 = cv596;
    
    continue;
    
    
    
    }
  const v714 = v595[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
  const v715 = v714[stdlib.checkedBigNumberify('./index.rsh:114:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _Bob_join12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_join12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_join12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v506, v510, v511, v533, v535, v543, v544] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc2, ctc3, ctc4, ctc4, ctc4, ctc7, ctc4]);
  const v548 = ctc.selfAddress();
  const v550 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:46:24:application call to [unknown function] (defined at: ./index.rsh:46:24:function exp)', 'at ./index.rsh:46:24:application call to [unknown function] (defined at: ./index.rsh:46:24:function exp)'],
    msg: 'in',
    who: 'Bob_join'
    });
  const v551 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v548), null);
  let v552;
  switch (v551[0]) {
    case 'None': {
      const v553 = v551[1];
      v552 = false;
      
      break;
      }
    case 'Some': {
      const v554 = v551[1];
      v552 = true;
      
      break;
      }
    }
  const v555 = v552 ? false : true;
  stdlib.assert(v555, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:46:24:application call to [unknown function] (defined at: ./index.rsh:46:24:function exp)', 'at ./index.rsh:46:24:application call to [unknown function] (defined at: ./index.rsh:46:24:function exp)'],
    msg: null,
    who: 'Bob_join'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v506, v510, v511, v533, v535, v543, v544, v550],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v560], secs: v562, time: v561, didSend: v150, from: v559 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_join"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v559), null);
      const v570 = null;
      const v571 = await txn1.getOutput('Bob_join', 'v570', ctc0, v570);
      
      await stdlib.simMapSet(sim_r, 0, v559, null);
      const v578 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '1'));
      const v1031 = v578;
      const v1034 = v543;
      const v1035 = v544;
      const v1036 = stdlib.lt(v578, v511);
      if (v1036) {
        sim_r.isHalt = false;
        }
      else {
        const v1038 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:62:28:application', stdlib.UInt_max, '0'), v578);
        const v1115 = v543;
        const v1116 = v544;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc4, ctc4, ctc7, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v560], secs: v562, time: v561, didSend: v150, from: v559 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v564 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v559), null);
  let v565;
  switch (v564[0]) {
    case 'None': {
      const v566 = v564[1];
      v565 = false;
      
      break;
      }
    case 'Some': {
      const v567 = v564[1];
      v565 = true;
      
      break;
      }
    }
  const v568 = v565 ? false : true;
  stdlib.assert(v568, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:47:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:48:20:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)'],
    msg: null,
    who: 'Bob_join'
    });
  const v570 = null;
  const v571 = await txn1.getOutput('Bob_join', 'v570', ctc0, v570);
  if (v150) {
    stdlib.protect(ctc0, await interact.out(v560, v571), {
      at: './index.rsh:46:11:application',
      fs: ['at ./index.rsh:46:11:application call to [unknown function] (defined at: ./index.rsh:46:11:function exp)', 'at ./index.rsh:49:10:application call to "k" (defined at: ./index.rsh:48:20:function exp)', 'at ./index.rsh:48:20:application call to [unknown function] (defined at: ./index.rsh:48:20:function exp)'],
      msg: 'out',
      who: 'Bob_join'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v559, null);
  const v578 = stdlib.add(v535, stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '1'));
  const v1031 = v578;
  const v1034 = v543;
  const v1035 = v544;
  const v1036 = stdlib.lt(v578, v511);
  if (v1036) {
    return;
    }
  else {
    const v1038 = stdlib.div(stdlib.checkedBigNumberify('./index.rsh:62:28:application', stdlib.UInt_max, '0'), v578);
    const v1115 = v543;
    const v1116 = v544;
    return;
    }
  
  
  };
export async function _Bob_receiveToken11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_receiveToken11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_receiveToken11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v506, v510, v587, v611, v645, v656, v657] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc2, ctc3, ctc4, ctc2, ctc5, ctc7, ctc4]);
  const v660 = ctc.selfAddress();
  const v662 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:90:52:application call to [unknown function] (defined at: ./index.rsh:90:52:function exp)', 'at ./index.rsh:90:52:application call to [unknown function] (defined at: ./index.rsh:90:52:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
    msg: 'in',
    who: 'Bob_receiveToken'
    });
  const v663 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v660), null);
  let v664;
  switch (v663[0]) {
    case 'None': {
      const v665 = v663[1];
      v664 = false;
      
      break;
      }
    case 'Some': {
      const v666 = v663[1];
      v664 = true;
      
      break;
      }
    }
  stdlib.assert(v664, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:91:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:90:52:application call to [unknown function] (defined at: ./index.rsh:90:52:function exp)', 'at ./index.rsh:90:52:application call to [unknown function] (defined at: ./index.rsh:90:52:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
    msg: null,
    who: 'Bob_receiveToken'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v506, v510, v587, v611, v645, v656, v657, v662],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:90:30:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v671], secs: v673, time: v672, didSend: v333, from: v670 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_receiveToken"
        });
      ;
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v670), null);
      const v680 = null;
      const v681 = await txn1.getOutput('Bob_receiveToken', 'v680', ctc0, v680);
      
      await stdlib.simMapSet(sim_r, 0, v670, undefined /* Nothing */);
      const v1121 = v656;
      const v1122 = v657;
      const v1123 = stdlib.addressEq(v670, v611);
      if (v1123) {
        sim_r.isHalt = false;
        }
      else {
        const v1124 = v670;
        const v1125 = v645;
        const v1126 = v645;
        const v1128 = v656;
        const v1129 = v657;
        if (v645) {
          sim_r.isHalt = false;
          }
        else {
          const v1134 = stdlib.add(v672, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc2, ctc5, ctc7, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v671], secs: v673, time: v672, didSend: v333, from: v670 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v675 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v670), null);
  let v676;
  switch (v675[0]) {
    case 'None': {
      const v677 = v675[1];
      v676 = false;
      
      break;
      }
    case 'Some': {
      const v678 = v675[1];
      v676 = true;
      
      break;
      }
    }
  stdlib.assert(v676, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:91:32:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:40:application call to [unknown function] (defined at: ./index.rsh:92:40:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
    msg: null,
    who: 'Bob_receiveToken'
    });
  const v680 = null;
  const v681 = await txn1.getOutput('Bob_receiveToken', 'v680', ctc0, v680);
  if (v333) {
    stdlib.protect(ctc0, await interact.out(v671, v681), {
      at: './index.rsh:90:31:application',
      fs: ['at ./index.rsh:90:31:application call to [unknown function] (defined at: ./index.rsh:90:31:function exp)', 'at ./index.rsh:93:30:application call to "k" (defined at: ./index.rsh:92:40:function exp)', 'at ./index.rsh:92:40:application call to [unknown function] (defined at: ./index.rsh:92:40:function exp)', 'at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
      msg: 'out',
      who: 'Bob_receiveToken'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v670, undefined /* Nothing */);
  const v1121 = v656;
  const v1122 = v657;
  const v1123 = stdlib.addressEq(v670, v611);
  if (v1123) {
    return;
    }
  else {
    const v1124 = v670;
    const v1125 = v645;
    const v1126 = v645;
    const v1128 = v656;
    const v1129 = v657;
    if (v645) {
      return;
      }
    else {
      const v1131 = stdlib.sub(stdlib.UInt_max, v672);
      const v1132 = stdlib.sub(v1131, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
      const v1133 = stdlib.ge(v1132, stdlib.checkedBigNumberify('reach standard library:578:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1133, {
        at: 'reach standard library:578:15:application',
        fs: ['at reach standard library:586:29:application call to [unknown function] (defined at: reach standard library:575:55:function exp)', 'at ./index.rsh:100:17:application call to "relativeTime" (defined at: reach standard library:581:71:function exp)'],
        msg: null,
        who: 'Bob_receiveToken'
        });
      const v1134 = stdlib.add(v672, stdlib.checkedBigNumberify('./index.rsh:100:18:decimal', stdlib.UInt_max, '2000'));
      return;
      }}
  
  
  };
export async function Bob_join(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_join expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 12) {return _Bob_join12(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_receiveToken(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_receiveToken expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_receiveToken expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Bob_receiveToken11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_join()byte[0]`, `Bob_receiveToken()byte[0]`],
    pure: [],
    sigs: [`Bob_join()byte[0]`, `Bob_receiveToken()byte[0]`]
    },
  appApproval: `BiAVAAEgKAQIDAkLMDgHBaj6muwLDVFia2OgjQbQDyYCAQAAIjUAMRhBByspZEkiWzUBIQVbNQIxGSMSQQAIMQAoKGZCBvk2GgAXSUEAISI1BCM1BkkhDQxAAAghDRJEKUIAj4GsmL/oBhJEKUIBDDYaAhc1BDYaAzYaARdJIQUMQAI1SSEIDEABbUkhBgxAAOlJIQ4MQABZIQ4SRCEGNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hCVs1/oAEIp+XA7AyBjT+D0Q0/zEAEkQ0/zQDJFs0AyVbNP40AyEKWyIyBjQDV0ARNAMhD1tCBE5IIQY0ARJENARJIhJMNAISEUQoZEk1AyEJWzX/STUFNf6ABOYybRQ0/lCwMgY0/wxEMQCIBk1JNfwiVUAABiI1/UIABiM1/UIAADT9FESACAAAAAAAAAI6sCk1BzEAKIABAWY0A1cAIDQDJFs0AyVbNP80AyEKWyMIIzIGNANXQBE0AyEPW0IDxUghCDQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEn9ybtTT/ULAxAIgF0Ek1/SJVQAAGIjX+QgAGIzX+QgAANP5EgAgAAAAAAAACqLApNQcxACgoZjQDVwAgNAMkWzQDJVs0A1cwIDQDV1ABFzEAMgY0A1dRETQDIRBbQgSzSSEHDEAAXiEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/VzAgNf5JNQUXNf2ABGN+eIs0/RZRBwhQsDT/MQASRDT/NAMkWzQDJVs0/jT9NP4yBjQDV1ARNAOBYVtCBE5IIQU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gAQX/NsusDIGNAMhEVsPRDT/MQASRDT/NAMkWzQDJVs0A1cwIDQDV1ABFzQDV1EBFzIGNANXUhE0AyESW0IDXkkhBAxAAXtJgQYMQAEDSSELDEAAe0ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8kWzX+JVs1/VcwIDX8V1IRNfshEls1+kk1BTX5gAQEKBmiNPlQsDIGNAMhEVsMRDT/MQASRDT/NP4WUDT9FlA0/FA0+1A0+hZQKEsBVwBpZ0ghBzUBMgY1AkID2kghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yRbNf5XURE1/YAEYbSsDLA0/zEAEkQ0/VcAEUk1/CJbNfuxIrIBNPuyEiEEshA0A1cwILIUNP6yEbM0/zT+NAMlWzQDV1ABFzIGNPtJCRY0/FcICFA0/FcQAVA0AyEQW0IB0SEEEkQhDDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yRbNf4lWzX9VzARNfyABJEnNPOwNPxXABE1+zT9NP6IA400/zEAEkQ0/zT+NP00/yIjMgY0+yJbNP0IFjT7VwgIUDT7VxABUDQDgUFbQgHcSSMMQABMIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJqLkXSwNP8xABJENP80AyRbNAMlWzQDIQpbNAMhCVsIIiMyBjQDV0ARIkIAs0ghE4gC7yI0ARJENARJIhJMNAISEURJNQVJSkpXAAQ1/yEEWzX+VwwDNf2BD1s1/IEXWzX7gR9bNfqABEjJ7A40/1A0/hZQNP1QNPwWUDT7FlA0+hZQsIERr0k1+VcAETX4IQWvNPhXCAhQNPhXEAFQNfchE4gCfbEisgEishIhBLIQMgqyFDT8shGzMQA0/BZQNPsWUDT6FlAyBhZQNPdQKEsBVwBRZ0gjNQEyBjUCQgHjNf81/jX9Nfw1+zX6Nfk1+DX3NPw0+zT5DBBBACw09zT4FlA0+RZQNPoWUDT7FlA0/lA0/xZQKEsBVwBZZ0ghBjUBMgY1AkIBmjT3NPgiNPsKIzT9NP40/0IAADX/Nf41/TX8Nfs1+jX5NPxBACQ0+TT6FlA0+xZQNP5QNP8WUChLAVcASWdIIQw1ATIGNQJCAVGxIrIBNP5XABEiW7ISIQSyEDT5shQ0+rIRs7EisgE0/7III7IQNPmyB7OxIrIBIrISIQSyEDIJshUyCrIUNPqyEbNCAPA1/zX+Nf01/DX7Nfo1+TX4Nfc0+0EALjT3NPgWUDT5FlA0+lA0/BZRBwhQNP5QNP8WUChLAVcAamdIIQs1ATIGNQJCAMeB////////////ATT9CSEUCSIPRDT9IRQINfY09zT4FlA0+RZQNPpQKFA0/BZRBwhQNP5QNP8WUDT2FlAoSwFXAHNnSCEFNQEyBjUCQgB4Nf81/jX9Nfw1+zX6Nfk1+DX3NPw0+hJBAC409zT4FlA0+RZQNPpQNPsWUQcIUDT+UDT/FlAoSwFXAGpnSCEINQEyBjUCQgAwNPc0+DT5NPw0+0k0/TT+NP9C/xAxGSEMEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 115,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes4",
                    "name": "elem0",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T4",
                "name": "v507",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes3",
                    "name": "elem0",
                    "type": "bytes3"
                  }
                ],
                "internalType": "struct T5",
                "name": "v509",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v510",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v511",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes4",
                    "name": "elem0",
                    "type": "bytes4"
                  }
                ],
                "internalType": "struct T4",
                "name": "v507",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes3",
                    "name": "elem0",
                    "type": "bytes3"
                  }
                ],
                "internalType": "struct T5",
                "name": "v509",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v510",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v511",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v512",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v671",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v560",
                "type": "bool"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v636",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v645",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v570",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v680",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_join",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_receiveToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v671",
                "type": "bool"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T33",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v560",
                "type": "bool"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v636",
                "type": "bool"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v645",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620035c5380380620035c5833981016040819052620000269162000559565b60008055436003556200003862000292565b604080513381528351602080830191909152808501518051516001600160e01b031916838501529081015160608084019190915281840151516001600160e81b031916608080850191909152908201516001600160a01b031660a0808501919091529082015160c0840152015160e082015290517f19e45e33cc6e2f321fecf4b6d396ae2844dd37d681f9247885921cf7e4dcb734918190036101000190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001359290620001e5565b6060820152620001483415600762000268565b62000152620002f9565b338152602080840180516060908101516001600160a01b0316838501528151608090810151604080870191909152925160a09081015183870152439186018290529186015191850191909152600160008190555551620001b59183910162000645565b60405160208183030381529060405260029080519060200190620001db92919062000343565b5050505062000737565b620001ef620003d2565b60005b600181101562000245578481600181106200021157620002116200062f565b60200201518282600181106200022b576200022b6200062f565b6020020152806200023c81620006d0565b915050620001f2565b50818184600181106200025c576200025c6200062f565b60200201529392505050565b816200028e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002c5620003d2565b81526040805160608101825260008082526020828101829052928201529101908152602001620002f4620003d2565b905290565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001620002f4620003d2565b8280546200035190620006fa565b90600052602060002090601f016020900481019282620003755760008555620003c0565b82601f106200039057805160ff1916838001178555620003c0565b82800160010185558215620003c0579182015b82811115620003c0578251825591602001919060010190620003a3565b50620003ce9291506200041f565b5090565b60405180602001604052806001905b62000408604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003e15790505090565b5b80821115620003ce576000815560010162000420565b604080519081016001600160401b03811182821017156200046757634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200046757634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200046757634e487b7160e01b600052604160045260246000fd5b600060208284031215620004e257600080fd5b604051602081016001600160401b03811182821017156200051357634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160e81b0319811681146200053457600080fd5b905292915050565b80516001600160a01b03811681146200055457600080fd5b919050565b600081830360e08112156200056d57600080fd5b6200057762000436565b83518152601f198201915060c08212156200059157600080fd5b6200059b6200046d565b6020831215620005aa57600080fd5b620005b46200049e565b60208601519093506001600160e01b031981168114620005d357600080fd5b835282815260408501516020820152620005f18660608701620004cf565b604082015262000604608086016200053c565b606082015260a0850151608082015260c085015160a082015280602083015250809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101516101008601949291860160005b6001811015620006c4578251805183528581015186840152860151151586830152918401919083019060010162000692565b50505050505092915050565b6000600019821415620006f357634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200070f57607f821691505b602082108114156200073157634e487b7160e01b600052602260045260246000fd5b50919050565b612e7e80620007476000396000f3fe6080604052600436106100e05760003560e01c80637f426b8711610084578063a93a2bdd11610056578063a93a2bdd146101e1578063ab53f2c6146101f4578063c798003714610217578063e533a29d1461022a57005b80637f426b871461019e57806383230757146101a65780638f3c54f4146101bb578063a7661d54146101ce57005b80632c10a159116100bd5780632c10a159146101335780633bc5b7bf146101465780635471c5a81461017357806379581d201461018657005b806316013779146100e957806318e67cf3146100fc5780631e93b0f11461010f57005b366100e757005b005b6100e76100f73660046123bb565b61023d565b6100e761010a3660046123bb565b61026d565b34801561011b57600080fd5b506003545b6040519081526020015b60405180910390f35b6100e76101413660046123bb565b610299565b34801561015257600080fd5b506101666101613660046123ec565b6102c5565b60405161012a919061241f565b6100e76101813660046123bb565b6102f1565b61018e61031d565b604051901515815260200161012a565b61018e610358565b3480156101b257600080fd5b50600154610120565b6100e76101c93660046123bb565b610390565b6100e76101dc3660046123bb565b6103bc565b6100e76101ef3660046123bb565b6103e8565b34801561020057600080fd5b50610209610414565b60405161012a929190612492565b6100e76102253660046123bb565b6104b1565b6100e76102383660046123bb565b6104dd565b604080518082019091526000808252602082015261026961026336849003840184612636565b82610509565b5050565b604080518082019091526000808252602082015261026961029336849003840184612636565b8261076b565b60408051808201909152600080825260208201526102696102bf36849003840184612652565b82610923565b60408051606081018252600080825260208201819052918101919091526102eb82610ade565b92915050565b604080518082019091526000808252602082015261026961031736849003840184612652565b82610bb7565b6000610327611fa2565b602080820151600090819052604080518082019091528181529182015261034e8282610509565b6020015192915050565b6000610362611fa2565b60208082015160009081905260408051808201909152818152918201526103898282610d75565b5192915050565b60408051808201909152600080825260208201526102696103b636849003840184612636565b82610ff5565b60408051808201909152600080825260208201526102696103e236849003840184612652565b826111c0565b604080518082019091526000808252602082015261026961040e36849003840184612636565b82610d75565b600060606000546002808054610429906126a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610455906126a8565b80156104a25780601f10610477576101008083540402835291602001916104a2565b820191906000526020600020905b81548152906001019060200180831161048557829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102696104d736849003840184612652565b826113fa565b604080518082019091526000808252602082015261026961050336849003840184612652565b82611622565b610519600b6000541460266117ee565b815161053490158061052d57508251600154145b60276117ee565b600080805560028054610546906126a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610572906126a8565b80156105bf5780601f10610594576101008083540402835291602001916105bf565b820191906000526020600020905b8154815290600101906020018083116105a257829003601f168201915b50505050508060200190518101906105d7919061280c565b6040805160208101909152600081529091507ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b789139273338560405161061a929190612829565b60405180910390a161062e341560246117ee565b600061063933610ade565b51600181111561064b5761064b612409565b141561065a5760008152610682565b600161066533610ade565b51600181111561067757610677612409565b141561068257600181525b805161068f9060256117ee565b604051600081527fbe783801568fb90ba7563590f6187a29e190acf19abe04f604ed16c8612762079060200160405180910390a1600060208085018290523382526004905260409020805462ffffff191690556106ea611fd1565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015260608087015185519416938101939093526080808701518551901515910152818401805133905280514393019290925260a086015182519091015260c085015190519091015261076481611814565b5050505050565b61077b60096000541460226117ee565b815161079690158061078f57508251600154145b60236117ee565b6000808055600280546107a8906126a8565b80601f01602080910402602001604051908101604052809291908181526020018280546107d4906126a8565b80156108215780601f106107f657610100808354040283529160200191610821565b820191906000526020600020905b81548152906001019060200180831161080457829003601f168201915b50505050508060200190518101906108399190612853565b90507f19623dd1c8e630acb28c50c4139a0e2042f380ee519bb2621ddfa8e7ca13d9b6338460405161086c929190612829565b60405180910390a1610880341560206117ee565b8051610898906001600160a01b0316331460216117ee565b6108a0611fd1565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601805186519086169083015288840151518651901515608091820152905184870180519190961690528451439401939093529185015183519091015260a08401519151015261091d81611814565b50505050565b610933600160005414600a6117ee565b815161094e90158061094757508251600154145b600b6117ee565b600080805560028054610960906126a8565b80601f016020809104026020016040519081016040528092919081815260200182805461098c906126a8565b80156109d95780601f106109ae576101008083540402835291602001916109d9565b820191906000526020600020905b8154815290600101906020018083116109bc57829003601f168201915b50505050508060200190518101906109f191906128cf565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610a24929190612943565b60405180910390a1610a38341560086117ee565b8051610a50906001600160a01b0316331460096117ee565b610a58612011565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608201516080830151610a969190612981565b8151606090810191909152602080830180516000908190528151600193019290925280514360409091015260a085015181519093019290925290516080015261091d81611977565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610b2a57610b2a612409565b1415610ba7576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b6b57610b6b612409565b6001811115610b7c57610b7c612409565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610bc7600c60005414602f6117ee565b8151610be2901580610bdb57508251600154145b60306117ee565b600080805560028054610bf4906126a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610c20906126a8565b8015610c6d5780601f10610c4257610100808354040283529160200191610c6d565b820191906000526020600020905b815481529060010190602001808311610c5057829003601f168201915b5050505050806020019051810190610c859190612999565b9050610c99816060015143101560316117ee565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983384604051610cca929190612943565b60405180910390a1610cde3415602d6117ee565b8051610cf6906001600160a01b03163314602e6117ee565b610cfe612011565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015260608085015184518201526080808601518486018051919091528051600095019490945283514393019290925260a085015183519091015260c08401519151015261091d81611977565b610d85600c60005414602a6117ee565b8151610da0901580610d9957508251600154145b602b6117ee565b600080805560028054610db2906126a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610dde906126a8565b8015610e2b5780601f10610e0057610100808354040283529160200191610e2b565b820191906000526020600020905b815481529060010190602001808311610e0e57829003601f168201915b5050505050806020019051810190610e439190612999565b604080516020810190915260008152909150610e6682606001514310602c6117ee565b7f69beebeea7b0b108020d81166bc0b515fd9f40ae2df9ed1acacbdd11ce103f8e3385604051610e97929190612829565b60405180910390a1610eab341560286117ee565b6000610eb633610ade565b516001811115610ec857610ec8612409565b1415610ed75760008152610eff565b6001610ee233610ade565b516001811115610ef457610ef4612409565b1415610eff57600181525b8051610f1a90610f10576001610f13565b60005b60296117ee565b604051600081527fc893f3a8ab427977403f8f3db723d105d137185641ed8643491dff1de076fa6d9060200160405180910390a16000808452338152600460205260409020805462ff00ff19166001179055610f74612011565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401518251909101526080830151610fbb90600190612981565b60208083018051929092528151600191015280514360409091015260a084015181516060015260c084015190516080015261076481611977565b61100560086000541460186117ee565b815161102090158061101957508251600154145b60196117ee565b600080805560028054611032906126a8565b80601f016020809104026020016040519081016040528092919081815260200182805461105e906126a8565b80156110ab5780601f10611080576101008083540402835291602001916110ab565b820191906000526020600020905b81548152906001019060200180831161108e57829003601f168201915b50505050508060200190518101906110c39190612a19565b90506110d78161010001514310601a6117ee565b7f4e3b66664dfaa8eec55d3e4b5320be5906866b0f0eff2c9c5b88206afe3bdf8d3384604051611108929190612829565b60405180910390a161111c341560166117ee565b8051611134906001600160a01b0316331460176117ee565b61113c612048565b81516001600160a01b039081168252602080840151821681840152604080850151818501526060808601519093169284019290925260c0840151608084015260e084015160a0840152600960005543600155905161119c91839101612afb565b6040516020818303038152906040526002908051906020019061076492919061209f565b6111d0600560005414600f6117ee565b81516111eb9015806111e457508251600154145b60106117ee565b6000808055600280546111fd906126a8565b80601f0160208091040260200160405190810160405280929190818152602001828054611229906126a8565b80156112765780601f1061124b57610100808354040283529160200191611276565b820191906000526020600020905b81548152906001019060200180831161125957829003601f168201915b505050505080602001905181019061128e9190612b56565b90506112b760408051608081018252600060208201818152928201819052606082015290815290565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233856040516112e8929190612943565b60405180910390a16112fc3415600c6117ee565b6040820151606083015151516113129190612981565b81515260608201805151602090810151835182015290515160409081015183519015159082015290830151908301516113589161135191339190611a9e565b600d6117ee565b8151611370906001600160a01b03163314600e6117ee565b611378612123565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152855182850180519190941690528251600092018290528251600191015290514360609182015284015183516113d89290611ab6565b60208201805160809081019290925290840151905160a0015261076481611b2a565b61140a60076000541460146117ee565b815161142590158061141e57508251600154145b60156117ee565b600080805560028054611437906126a8565b80601f0160208091040260200160405190810160405280929190818152602001828054611463906126a8565b80156114b05780601f10611485576101008083540402835291602001916114b0565b820191906000526020600020905b81548152906001019060200180831161149357829003601f168201915b50505050508060200190518101906114c8919061280c565b90506114f160408051608081018252600060208201818152928201819052606082015290815290565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3385604051611522929190612943565b60405180910390a1611536341560126117ee565b815161154e906001600160a01b0316331460136117ee565b60a0820151515161155f9080612bf2565b81515260a0820180515160209081015183518201528151516040908101518451901515910152830151606084015191516115a2929060005b602002015151611cc2565b6115aa612153565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260808401518183018051911515909152514391015260a083015182516116019190600090611ab6565b6020820180516040019190915260c084015190516060015261076481611cd6565b611632600860005414601d6117ee565b815161164d90158061164657508251600154145b601e6117ee565b60008080556002805461165f906126a8565b80601f016020809104026020016040519081016040528092919081815260200182805461168b906126a8565b80156116d85780601f106116ad576101008083540402835291602001916116d8565b820191906000526020600020905b8154815290600101906020018083116116bb57829003601f168201915b50505050508060200190518101906116f09190612a19565b9050611705816101000151431015601f6117ee565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763384604051611736929190612943565b60405180910390a161174a3415601b6117ee565b8051611762906001600160a01b03163314601c6117ee565b61176a612123565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518386018051919095169052608080870151855190151594019390935260a080870151855190151593019290925283514391015260c085015183519092019190915260e08401519151015261091d81611b2a565b816102695760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b8051606001516020820151516001600160a01b03908116911614156118d95761183b61217c565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151909316838501528451608090810151151590850152818501805182015160a0860152519092015160c0840152600b6000554360015590516118b091839101612c66565b604051602081830303815290604052600290805190602001906118d492919061209f565b505050565b6118e1612123565b81515181516001600160a01b039182169052825160209081015183519083169082015283516040908101518451820152818501805151838601805191909516905285516080908101518551901515908501528651810151855190151590840152815190930151845160609081019190915281519092015184519093019290925290510151905160a0015261026981611b2a565b50565b80602001516020015161198b576000611999565b805160400151602082015151105b15611a15576119a66121b3565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015283516060908101518185015282850180515160808087019190915281519092015160a086015251015160c0840152600c60005543600155516118b091839101612c75565b611a1d612153565b81515181516001600160a01b0391821690528251602090810151835192169181019190915282015151611a51906000612cda565b815160409081019190915260208083018051600190528482018051840151825190930192909252815160609081015182519094019390935290516080015190519091015261026981611cd6565b6000611aac83853085611dbc565b90505b9392505050565b611abe6121f7565b60005b6001811015611b0a57848160018110611adc57611adc612bdc565b6020020151828260018110611af357611af3612bdc565b602002015280611b0281612cfc565b915050611ac1565b5081818460018110611b1e57611b1e612bdc565b60200201529392505050565b60408051602081019091526000815281602001516020015115611bea57611b4f61217c565b8251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528186018051519093166060850152825181015115156080808601919091528351015160a08086019190915292519092015160c08401526007600055436001559051611bc691839101612c66565b6040516020818303038152906040526002908051906020019061091d92919061209f565b611c1b60006107d0846020015160600151600019611c089190612bf2565b611c129190612bf2565b101560116117ee565b6107d0826020015160600151611c319190612981565b8152611c3b612242565b8251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528186018051519093166060850152600060808086018290528451830151151560a08088019190915285519091015160c087015293519093015160e085015284516101008501526008909255436001559051611bc691839101612d17565b611ccd838383611e96565b6118d457600080fd5b60208101515115611d4457611ce9612295565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528184018051820151606080860191909152905101516080840152600560005543600155516118b091839101612dc1565b805160208082015191519083015160400151611d639291906000611597565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611da5573d6000803e3d6000fd5b5060008080556001819055611974906002906122cf565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611e2391612e0f565b60006040518083038185875af1925050503d8060008114611e60576040519150601f19603f3d011682016040523d82523d6000602084013e611e65565b606091505b5091509150611e7682826001611f67565b5080806020019051810190611e8b9190612e2b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611ef591612e0f565b60006040518083038185875af1925050503d8060008114611f32576040519150601f19603f3d011682016040523d82523d6000602084013e611f37565b606091505b5091509150611f4882826002611f67565b5080806020019051810190611f5d9190612e2b565b9695505050505050565b60608315611f76575081611aaf565b825115611f865782518084602001fd5b60405163100960cb60e01b81526004810183905260240161180b565b604051806040016040528060008152602001611fcc60405180602001604052806000151581525090565b905290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c08201929092529081905b8152602001611fcc612309565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611fcc612328565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016120926121f7565b8152602001600081525090565b8280546120ab906126a8565b90600052602060002090601f0160209004810192826120cd5760008555612113565b82601f106120e657805160ff1916838001178555612113565b82800160010185558215612113579182015b828111156121135782518255916020019190600101906120f8565b5061211f929150612352565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611fcc612367565b6040805160a0810182526000918101828152606082018390526080820192909252908190612004565b6040805160e08101825260008082526020820181905291810182905260608101829052608081019190915260a081016120926121f7565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016120925b60405180602001604052806001905b61222c604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816122065790505090565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c081016122816121f7565b815260200160008152602001600081525090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016120926121f7565b5080546122db906126a8565b6000825580601f106122eb575050565b601f0160209004906000526020600020908101906119749190612352565b60408051608081018252600080825260208201529081016120926121f7565b6040518060a0016040528060008152602001600015158152602001600081526020016120926121f7565b5b8082111561211f5760008155600101612353565b6040518060c0016040528060006001600160a01b03168152602001600015158152602001600015158152602001600081526020016120926121f7565b6000604082840312156123b557600080fd5b50919050565b6000604082840312156123cd57600080fd5b611aaf83836123a3565b6001600160a01b038116811461197457600080fd5b6000602082840312156123fe57600080fd5b8135611aaf816123d7565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061244457634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60005b83811015612481578181015183820152602001612469565b8381111561091d5750506000910152565b82815260406020820152600082518060408401526124b7816060850160208701612466565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715612505576125056124cc565b60405290565b6040516060810167ffffffffffffffff81118282101715612505576125056124cc565b60405160e0810167ffffffffffffffff81118282101715612505576125056124cc565b60405160c0810167ffffffffffffffff81118282101715612505576125056124cc565b604051610120810167ffffffffffffffff81118282101715612505576125056124cc565b801515811461197457600080fd5b60008183036040808212156125ba57600080fd5b805181810167ffffffffffffffff82821081831117156125dc576125dc6124cc565b818452829550863583526020601f19860112156125f857600080fd5b835194506020850191508482108183111715612616576126166124cc565b5090915260208401359061262982612598565b9082526020015292915050565b60006040828403121561264857600080fd5b611aaf83836125a6565b60006040828403121561266457600080fd5b6040516040810181811067ffffffffffffffff82111715612687576126876124cc565b60405282358152602083013561269c81612598565b60208201529392505050565b600181811c908216806126bc57607f821691505b602082108114156123b557634e487b7160e01b600052602260045260246000fd5b8051610bb2816123d7565b8051610bb281612598565b600082601f83011261270457600080fd5b61270c6124e2565b8060608085018681111561271f57600080fd5b855b81811015612770578281890312156127395760008081fd5b61274161250b565b815181526020808301518183015260408084015161275e81612598565b90830152908652909401938201612721565b50919695505050505050565b6000610120828403121561278f57600080fd5b61279761252e565b905081516127a4816123d7565b815260208201516127b4816123d7565b60208201526040828101519082015260608201516127d1816123d7565b606082015260808201516127e481612598565b60808201526127f68360a084016126f3565b60a082015261010082015160c082015292915050565b6000610120828403121561281f57600080fd5b611aaf838361277c565b6001600160a01b038316815260608101611aaf602083018480518252602090810151511515910152565b6000610100828403121561286657600080fd5b61286e612551565b8251612879816123d7565b81526020830151612889816123d7565b60208201526040838101519082015260608301516128a6816123d7565b60608201526128b884608085016126f3565b608082015260e0929092015160a083015250919050565b600061010082840312156128e257600080fd5b6128ea612551565b82516128f5816123d7565b81526020830151612905816123d7565b806020830152506040830151604082015260608301516060820152608083015160808201526129378460a085016126f3565b60a08201529392505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082198211156129945761299461296b565b500190565b600061012082840312156129ac57600080fd5b6129b461252e565b82516129bf816123d7565b815260208301516129cf816123d7565b80602083015250604083015160408201526060830151606082015260808301516080820152612a018460a085016126f3565b60a0820152610100929092015160c083015250919050565b60006101608284031215612a2c57600080fd5b612a34612574565b612a3d836126dd565b8152612a4b602084016126dd565b602082015260408301516040820152612a66606084016126dd565b6060820152612a77608084016126e8565b6080820152612a8860a084016126e8565b60a0820152612a9a8460c085016126f3565b60c082015261012083015160e08201526101409092015161010083015250919050565b8060005b600181101561091d578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612ac1565b81516001600160a01b0390811682526020808401518216908301526040808401519083015260608084015190911690820152608080830151610100830191612b4590840182612abd565b5060a083015160e083015292915050565b600060e08284031215612b6857600080fd5b60405160a0810181811067ffffffffffffffff82111715612b8b57612b8b6124cc565b6040528251612b99816123d7565b81526020830151612ba9816123d7565b602082015260408381015190820152612bc584606085016126f3565b606082015260c09290920151608083015250919050565b634e487b7160e01b600052603260045260246000fd5b600082821015612c0457612c0461296b565b500390565b60018060a01b03808251168352806020830151166020840152604082015160408401528060608301511660608401525060808101511515608083015260a0810151612c5760a0840182612abd565b5060c001516101009190910152565b61012081016102eb8284612c09565b60006101208201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a0830151612cc860a0840182612abd565b5060c083015161010083015292915050565b600082612cf757634e487b7160e01b600052601260045260246000fd5b500490565b6000600019821415612d1057612d1061296b565b5060010190565b81516001600160a01b03168152602080830151610160830191612d44908401826001600160a01b03169052565b50604083015160408301526060830151612d6960608401826001600160a01b03169052565b506080830151612d7d608084018215159052565b5060a0830151612d9160a084018215159052565b5060c0830151612da460c0840182612abd565b5060e0830151610120830152610100909201516101409091015290565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160e0830191612dfe90840182612abd565b50608083015160c083015292915050565b60008251612e21818460208701612466565b9190910192915050565b600060208284031215612e3d57600080fd5b8151611aaf8161259856fea264697066735822122038ca1146a9b2da70eac91701681b5ead8834f2566b96c552c727b89ecf8430e064736f6c634300080c0033`,
  BytecodeLen: 13765,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:116:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:68:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:105:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:76:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:82:21:after expr stmt semicolon',
    fs: ['at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:87:39:after expr stmt semicolon',
    fs: ['at ./index.rsh:81:15:application call to [unknown function] (defined at: ./index.rsh:81:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:43:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_join": Bob_join,
  "Bob_receiveToken": Bob_receiveToken
  };
export const _APIs = {
  Bob: {
    join: Bob_join,
    receiveToken: Bob_receiveToken
    }
  };
