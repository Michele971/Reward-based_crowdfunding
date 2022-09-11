// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
export const _backendVersion = 24;

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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc0
    });
  const map0_ctc = ctc7;
  
  
  const views_checkGoalReachedV = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v501, v512, v513, v514, v515] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v512, v514, v521, v522, v579, v654, v661, v662, v674] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
      const [v512, v514, v521, v522, v579, v788, v796, v797, v808] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'))) {
      const [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const views_getCtcBalanceV = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v501, v512, v513, v514, v515] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v512, v514, v521, v522, v579, v654, v661, v662, v674] = svs;
      return (await ((async () => {
        
        
        return v579;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
      const [v512, v514, v521, v522, v579, v788, v796, v797, v808] = svs;
      return (await ((async () => {
        
        
        return v579;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'))) {
      const [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593] = svs;
      return (await ((async () => {
        
        
        return v579;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const views_getGoalV = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v501, v512, v513, v514, v515] = svs;
      return (await ((async () => {
        
        
        return v514;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v512, v514, v521, v522, v579, v654, v661, v662, v674] = svs;
      return (await ((async () => {
        
        
        return v514;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
      const [v512, v514, v521, v522, v579, v788, v796, v797, v808] = svs;
      return (await ((async () => {
        
        
        return v514;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'))) {
      const [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593] = svs;
      return (await ((async () => {
        
        
        return v514;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return v514;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return v514;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const views_isCampaignOnV = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v501, v512, v513, v514, v515] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v512, v514, v521, v522, v579, v654, v661, v662, v674] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
      const [v512, v514, v521, v522, v579, v788, v796, v797, v808] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'))) {
      const [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '17'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '18'))) {
      const [v512, v513, v514, v515, v521, v522, v536, v537] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      views: {
        checkGoalReachedV: {
          decode: views_checkGoalReachedV,
          dom: [],
          rng: ctc1
          },
        getCtcBalanceV: {
          decode: views_getCtcBalanceV,
          dom: [],
          rng: ctc0
          },
        getGoalV: {
          decode: views_getGoalV,
          dom: [],
          rng: ctc0
          },
        isCampaignOnV: {
          decode: views_isCampaignOnV,
          dom: [],
          rng: ctc1
          }
        }
      },
    views: {
      1: [ctc3, ctc4, ctc0, ctc0, ctc0],
      9: [ctc4, ctc0, ctc4, ctc5, ctc0, ctc0, ctc3, ctc0, ctc0],
      15: [ctc4, ctc0, ctc4, ctc5, ctc0, ctc0, ctc3, ctc0, ctc0],
      16: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc5, ctc0, ctc3, ctc0, ctc0],
      17: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc5, ctc3, ctc0],
      18: [ctc4, ctc0, ctc0, ctc0, ctc4, ctc5, ctc3, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Company(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Company expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Company expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v500 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v501 = [v500];
  const v509 = stdlib.protect(ctc3, interact.tokenId, 'for Company\'s interact field tokenId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v513, v514, v515], secs: v517, time: v516, didSend: v33, from: v512 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v501, v512, v513, v514, v515, v509],
    evt_cnt: 1,
    funcNum: 1,
    lct: v516,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:89:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v522], secs: v524, time: v523, didSend: v42, from: v521 } = txn2;
      
      const v525 = v501[stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0')];
      const v526 = stdlib.Array_set(v525, '0', stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0'));
      const v527 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0'), v526);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v522
        });
      ;
      const v529 = false;
      const v530 = v523;
      const v536 = v527;
      const v537 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v540 = v529 ? false : true;
        
        return v540;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v570 = true;
        const v571 = stdlib.checkedBigNumberify('./index.rsh:133:21:decimal', stdlib.UInt_max, '0');
        const v572 = v530;
        const v578 = v536;
        const v579 = v537;
        
        if (await (async () => {
          const v584 = stdlib.lt(v571, v513);
          const v585 = v584 ? v570 : false;
          
          return v585;})()) {
          const v593 = stdlib.safeAdd(v572, v515);
          sim_r.isHalt = false;
          }
        else {
          const v640 = stdlib.eq(v579, v513);
          if (v640) {
            const v644 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
            const v648 = stdlib.sub(v513, v644);
            sim_r.txns.push({
              kind: 'from',
              to: v512,
              tok: undefined /* Nothing */
              });
            const v651 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
            const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
            const v653 = true;
            const v654 = v652;
            const v655 = v572;
            const v661 = v578;
            const v662 = v648;
            
            if (await (async () => {
              const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
              const v667 = v666 ? v653 : false;
              
              return v667;})()) {
              const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
              sim_r.isHalt = false;
              }
            else {
              const v730 = stdlib.sub(v662, v662);
              sim_r.txns.push({
                kind: 'from',
                to: v512,
                tok: undefined /* Nothing */
                });
              const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
              if (v732) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v521,
                  tok: undefined /* Nothing */
                  });
                const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                if (v740) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: v522
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                if (v764) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: v522
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v788 = v571;
            const v789 = true;
            const v790 = v572;
            const v796 = v578;
            const v797 = v579;
            
            if (await (async () => {
              const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
              const v801 = v800 ? v789 : false;
              
              return v801;})()) {
              const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
              sim_r.isHalt = false;
              }
            else {
              const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
              if (v850) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v521,
                  tok: undefined /* Nothing */
                  });
                const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                if (v858) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: v522
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                if (v882) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: v522
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v522
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc5, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v522], secs: v524, time: v523, didSend: v42, from: v521 } = txn2;
  const v525 = v501[stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0')];
  const v526 = stdlib.Array_set(v525, '0', stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0'));
  const v527 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0'), v526);
  ;
  ;
  let v529 = false;
  let v530 = v523;
  let v536 = v527;
  let v537 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v540 = v529 ? false : true;
    
    return v540;})()) {
    const v543 = stdlib.protect(ctc4, await interact.checkpw(), {
      at: './index.rsh:113:49:application',
      fs: ['at ./index.rsh:112:18:application call to [unknown function] (defined at: ./index.rsh:112:22:function exp)'],
      msg: 'checkpw',
      who: 'Company'
      });
    
    const v544 = '4f215eff8112095c178769c2ca9a29fc91783edc7ac70093c92a0c9fb7fe9d60786f078aab73ba9fa417e87949c14580821671ec38ace803880373beeec43ae5';
    
    const txn4 = await (ctc.sendrecv({
      args: [v512, v513, v514, v515, v521, v522, v536, v537, v543, v544],
      evt_cnt: 2,
      funcNum: 12,
      lct: v530,
      onlyIf: true,
      out_tys: [ctc4, ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:116:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v546, v547], secs: v549, time: v548, didSend: v61, from: v545 } = txn4;
        
        ;
        const v551 = stdlib.digest([ctc4], [v546]);
        const v552 = stdlib.digest([ctc4], [v547]);
        const v553 = stdlib.digestEq(v551, v552);
        if (v553) {
          
          sim_r.isHalt = false;
          }
        else {
          
          const cv529 = false;
          const cv530 = v548;
          const cv536 = v536;
          const cv537 = v537;
          
          await (async () => {
            const v529 = cv529;
            const v530 = cv530;
            const v536 = cv536;
            const v537 = cv537;
            
            if (await (async () => {
              const v540 = v529 ? false : true;
              
              return v540;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v570 = true;
              const v571 = stdlib.checkedBigNumberify('./index.rsh:133:21:decimal', stdlib.UInt_max, '0');
              const v572 = v530;
              const v578 = v536;
              const v579 = v537;
              
              if (await (async () => {
                const v584 = stdlib.lt(v571, v513);
                const v585 = v584 ? v570 : false;
                
                return v585;})()) {
                const v593 = stdlib.safeAdd(v572, v515);
                sim_r.isHalt = false;
                }
              else {
                const v640 = stdlib.eq(v579, v513);
                if (v640) {
                  const v644 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
                  const v648 = stdlib.sub(v513, v644);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v512,
                    tok: undefined /* Nothing */
                    });
                  const v651 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                  const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                  const v653 = true;
                  const v654 = v652;
                  const v655 = v572;
                  const v661 = v578;
                  const v662 = v648;
                  
                  if (await (async () => {
                    const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
                    const v667 = v666 ? v653 : false;
                    
                    return v667;})()) {
                    const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v730 = stdlib.sub(v662, v662);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v512,
                      tok: undefined /* Nothing */
                      });
                    const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                    if (v732) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: undefined /* Nothing */
                        });
                      const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v740) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v764) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}
                else {
                  const v788 = v571;
                  const v789 = true;
                  const v790 = v572;
                  const v796 = v578;
                  const v797 = v579;
                  
                  if (await (async () => {
                    const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
                    const v801 = v800 ? v789 : false;
                    
                    return v801;})()) {
                    const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                    if (v850) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: undefined /* Nothing */
                        });
                      const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v858) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v882) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}}}})();}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc1, ctc1, ctc1, ctc5, ctc3, ctc8, ctc1, ctc4, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v546, v547], secs: v549, time: v548, didSend: v61, from: v545 } = txn4;
    ;
    const v550 = stdlib.addressEq(v521, v545);
    stdlib.assert(v550, {
      at: './index.rsh:116:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Company'
      });
    const v551 = stdlib.digest([ctc4], [v546]);
    const v552 = stdlib.digest([ctc4], [v547]);
    const v553 = stdlib.digestEq(v551, v552);
    if (v553) {
      const v555 = 'Company verified!';
      stdlib.protect(ctc0, await interact.log(v555), {
        at: './index.rsh:96:27:application',
        fs: ['at ./index.rsh:96:27:application call to [unknown function] (defined at: ./index.rsh:96:27:function exp)', 'at ./index.rsh:96:27:application call to "liftedInteract" (defined at: ./index.rsh:96:27:application)', 'at ./index.rsh:117:32:application call to "passwordChecked" (defined at: ./index.rsh:94:33:function exp)'],
        msg: 'log',
        who: 'Company'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v512, v513, v514, v515, v521, v522, v536, v537],
        evt_cnt: 0,
        funcNum: 13,
        lct: v548,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0'), [[v513, v522]]],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v558, time: v557, didSend: v77, from: v556 } = txn5;
          
          ;
          const v559 = v536[stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0')];
          const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0')];
          const v561 = stdlib.add(v560, v513);
          const v563 = stdlib.Array_set(v559, '0', v561);
          const v564 = stdlib.Array_set(v536, stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0'), v563);
          sim_r.txns.push({
            amt: v513,
            kind: 'to',
            tok: v522
            });
          const cv529 = true;
          const cv530 = v557;
          const cv536 = v564;
          const cv537 = v537;
          
          await (async () => {
            const v529 = cv529;
            const v530 = cv530;
            const v536 = cv536;
            const v537 = cv537;
            
            if (await (async () => {
              const v540 = v529 ? false : true;
              
              return v540;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v570 = true;
              const v571 = stdlib.checkedBigNumberify('./index.rsh:133:21:decimal', stdlib.UInt_max, '0');
              const v572 = v530;
              const v578 = v536;
              const v579 = v537;
              
              if (await (async () => {
                const v584 = stdlib.lt(v571, v513);
                const v585 = v584 ? v570 : false;
                
                return v585;})()) {
                const v593 = stdlib.safeAdd(v572, v515);
                sim_r.isHalt = false;
                }
              else {
                const v640 = stdlib.eq(v579, v513);
                if (v640) {
                  const v644 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
                  const v648 = stdlib.sub(v513, v644);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v512,
                    tok: undefined /* Nothing */
                    });
                  const v651 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                  const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                  const v653 = true;
                  const v654 = v652;
                  const v655 = v572;
                  const v661 = v578;
                  const v662 = v648;
                  
                  if (await (async () => {
                    const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
                    const v667 = v666 ? v653 : false;
                    
                    return v667;})()) {
                    const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v730 = stdlib.sub(v662, v662);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v512,
                      tok: undefined /* Nothing */
                      });
                    const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                    if (v732) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: undefined /* Nothing */
                        });
                      const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v740) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v764) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}
                else {
                  const v788 = v571;
                  const v789 = true;
                  const v790 = v572;
                  const v796 = v578;
                  const v797 = v579;
                  
                  if (await (async () => {
                    const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
                    const v801 = v800 ? v789 : false;
                    
                    return v801;})()) {
                    const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
                    sim_r.isHalt = false;
                    }
                  else {
                    const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                    if (v850) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: undefined /* Nothing */
                        });
                      const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v858) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}
                    else {
                      const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                      const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                      if (v882) {
                        sim_r.txns.push({
                          kind: 'from',
                          to: v521,
                          tok: v522
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }
                      else {
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: v522
                          })
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }}}}}}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc1, ctc1, ctc5, ctc3, ctc8, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v558, time: v557, didSend: v77, from: v556 } = txn5;
      ;
      const v559 = v536[stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0')];
      const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0')];
      const v561 = stdlib.add(v560, v513);
      const v563 = stdlib.Array_set(v559, '0', v561);
      const v564 = stdlib.Array_set(v536, stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0'), v563);
      ;
      const v565 = stdlib.addressEq(v521, v556);
      stdlib.assert(v565, {
        at: './index.rsh:98:15:dot',
        fs: ['at ./index.rsh:117:32:application call to "passwordChecked" (defined at: ./index.rsh:94:33:function exp)'],
        msg: 'sender correct',
        who: 'Company'
        });
      const cv529 = true;
      const cv530 = v557;
      const cv536 = v564;
      const cv537 = v537;
      
      v529 = cv529;
      v530 = cv530;
      v536 = cv536;
      v537 = cv537;
      
      txn3 = txn5;
      continue;
      
      }
    else {
      const v568 = 'Wrong password, try again.';
      stdlib.protect(ctc0, await interact.log(v568), {
        at: './index.rsh:101:27:application',
        fs: ['at ./index.rsh:101:27:application call to [unknown function] (defined at: ./index.rsh:101:27:function exp)', 'at ./index.rsh:101:27:application call to "liftedInteract" (defined at: ./index.rsh:101:27:application)', 'at ./index.rsh:117:32:application call to "passwordChecked" (defined at: ./index.rsh:94:33:function exp)'],
        msg: 'log',
        who: 'Company'
        });
      
      const cv529 = false;
      const cv530 = v548;
      const cv536 = v536;
      const cv537 = v537;
      
      v529 = cv529;
      v530 = cv530;
      v536 = cv536;
      v537 = cv537;
      
      txn3 = txn4;
      continue;}
    
    }
  let v570 = true;
  let v571 = stdlib.checkedBigNumberify('./index.rsh:133:21:decimal', stdlib.UInt_max, '0');
  let v572 = v530;
  let v578 = v536;
  let v579 = v537;
  
  let txn4 = txn3;
  while (await (async () => {
    const v584 = stdlib.lt(v571, v513);
    const v585 = v584 ? v570 : false;
    
    return v585;})()) {
    const v593 = stdlib.safeAdd(v572, v515);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc9],
      timeoutAt: ['time', v593],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593],
        evt_cnt: 0,
        funcNum: 11,
        lct: v572,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:154:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v632, time: v631, didSend: v179, from: v630 } = txn6;
          
          ;
          const cv570 = false;
          const cv571 = v571;
          const cv572 = v631;
          const cv578 = v578;
          const cv579 = v579;
          
          await (async () => {
            const v570 = cv570;
            const v571 = cv571;
            const v572 = cv572;
            const v578 = cv578;
            const v579 = cv579;
            
            if (await (async () => {
              const v584 = stdlib.lt(v571, v513);
              const v585 = v584 ? v570 : false;
              
              return v585;})()) {
              const v593 = stdlib.safeAdd(v572, v515);
              sim_r.isHalt = false;
              }
            else {
              const v640 = stdlib.eq(v579, v513);
              if (v640) {
                const v644 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
                const v648 = stdlib.sub(v513, v644);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                const v651 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                const v653 = true;
                const v654 = v652;
                const v655 = v572;
                const v661 = v578;
                const v662 = v648;
                
                if (await (async () => {
                  const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
                  const v667 = v666 ? v653 : false;
                  
                  return v667;})()) {
                  const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v730 = stdlib.sub(v662, v662);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v512,
                    tok: undefined /* Nothing */
                    });
                  const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                  if (v732) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: undefined /* Nothing */
                      });
                    const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v740) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v764) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}
              else {
                const v788 = v571;
                const v789 = true;
                const v790 = v572;
                const v796 = v578;
                const v797 = v579;
                
                if (await (async () => {
                  const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
                  const v801 = v800 ? v789 : false;
                  
                  return v801;})()) {
                  const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                  if (v850) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: undefined /* Nothing */
                      });
                    const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v858) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v882) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc1, ctc1, ctc5, ctc3, ctc1, ctc8, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v632, time: v631, didSend: v179, from: v630 } = txn6;
      ;
      const v633 = stdlib.addressEq(v521, v630);
      const v634 = stdlib.addressEq(v512, v630);
      const v635 = v633 ? true : v634;
      stdlib.assert(v635, {
        at: './index.rsh:154:17:dot',
        fs: ['at ./index.rsh:152:43:application call to [unknown function] (defined at: ./index.rsh:152:43:function exp)'],
        msg: 'sender correct',
        who: 'Company'
        });
      const cv570 = false;
      const cv571 = v571;
      const cv572 = v631;
      const cv578 = v578;
      const cv579 = v579;
      
      v570 = cv570;
      v571 = cv571;
      v572 = cv572;
      v578 = cv578;
      v579 = cv579;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v608], secs: v610, time: v609, didSend: v137, from: v607 } = txn5;
      undefined /* setApiDetails */;
      const v612 = v608[stdlib.checkedBigNumberify('./index.rsh:138:11:spread', stdlib.UInt_max, '0')];
      const v614 = stdlib.add(v579, v612);
      ;
      await txn5.getOutput('investAPI_makeInvest', 'v612', ctc1, v612);
      const v622 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v607), null);
      const v623 = stdlib.fromSome(v622, stdlib.checkedBigNumberify('./index.rsh:146:44:decimal', stdlib.UInt_max, '0'));
      const v624 = stdlib.safeAdd(v623, v612);
      await stdlib.mapSet(map0, v607, v624);
      const v626 = stdlib.safeAdd(v571, v612);
      const cv570 = true;
      const cv571 = v626;
      const cv572 = v609;
      const cv578 = v578;
      const cv579 = v614;
      
      v570 = cv570;
      v571 = cv571;
      v572 = cv572;
      v578 = cv578;
      v579 = cv579;
      
      txn4 = txn5;
      continue;}
    
    }
  const v640 = stdlib.eq(v579, v513);
  if (v640) {
    const v644 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
    const v648 = stdlib.sub(v513, v644);
    ;
    const v651 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
    const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
    let v653 = true;
    let v654 = v652;
    let v655 = v572;
    let v661 = v578;
    let v662 = v648;
    
    let txn5 = txn4;
    while (await (async () => {
      const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
      const v667 = v666 ? v653 : false;
      
      return v667;})()) {
      const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc10],
        timeoutAt: ['time', v674],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v512, v514, v521, v522, v579, v654, v661, v662, v674],
          evt_cnt: 0,
          funcNum: 6,
          lct: v655,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:202:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v720, time: v719, didSend: v291, from: v718 } = txn7;
            
            ;
            const cv653 = false;
            const cv654 = v654;
            const cv655 = v719;
            const cv661 = v661;
            const cv662 = v662;
            
            await (async () => {
              const v653 = cv653;
              const v654 = cv654;
              const v655 = cv655;
              const v661 = cv661;
              const v662 = cv662;
              
              if (await (async () => {
                const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
                const v667 = v666 ? v653 : false;
                
                return v667;})()) {
                const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
                sim_r.isHalt = false;
                }
              else {
                const v730 = stdlib.sub(v662, v662);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                if (v732) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: undefined /* Nothing */
                    });
                  const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v740) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v764) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc1, ctc5, ctc3, ctc1, ctc1, ctc8, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v720, time: v719, didSend: v291, from: v718 } = txn7;
        ;
        const v721 = stdlib.addressEq(v521, v718);
        const v722 = stdlib.addressEq(v512, v718);
        const v723 = v721 ? true : v722;
        stdlib.assert(v723, {
          at: './index.rsh:202:17:dot',
          fs: ['at ./index.rsh:201:44:application call to [unknown function] (defined at: ./index.rsh:201:44:function exp)'],
          msg: 'sender correct',
          who: 'Company'
          });
        const cv653 = false;
        const cv654 = v654;
        const cv655 = v719;
        const cv661 = v661;
        const cv662 = v662;
        
        v653 = cv653;
        v654 = cv654;
        v655 = cv655;
        v661 = cv661;
        v662 = cv662;
        
        txn5 = txn7;
        continue;
        }
      else {
        const {data: [v690], secs: v692, time: v691, didSend: v248, from: v689 } = txn6;
        undefined /* setApiDetails */;
        ;
        const v694 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v689), null);
        const v695 = stdlib.fromSome(v694, stdlib.checkedBigNumberify('./index.rsh:190:61:decimal', stdlib.UInt_max, '0'));
        const v698 = v661[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
        const v699 = v698[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
        const v700 = stdlib.ge(v699, v695);
        stdlib.assert(v700, {
          at: './index.rsh:192:18:application',
          fs: ['at ./index.rsh:189:15:application call to [unknown function] (defined at: ./index.rsh:189:15:function exp)'],
          msg: null,
          who: 'Company'
          });
        const v701 = true;
        await txn6.getOutput('investAPI_claimReward', 'v701', ctc6, v701);
        const v712 = stdlib.sub(v699, v695);
        const v714 = stdlib.Array_set(v698, '0', v712);
        const v715 = stdlib.Array_set(v661, stdlib.checkedBigNumberify('./index.rsh:194:57:application', stdlib.UInt_max, '0'), v714);
        ;
        await stdlib.mapSet(map0, v689, undefined /* Nothing */);
        const v716 = stdlib.safeSub(v654, v695);
        const cv653 = true;
        const cv654 = v716;
        const cv655 = v691;
        const cv661 = v715;
        const cv662 = v662;
        
        v653 = cv653;
        v654 = cv654;
        v655 = cv655;
        v661 = cv661;
        v662 = cv662;
        
        txn5 = txn6;
        continue;}
      
      }
    const v730 = stdlib.sub(v662, v662);
    ;
    const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
    if (v732) {
      ;
      const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v740) {
        ;
        return;
        }
      else {
        return;
        }}
    else {
      const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v764) {
        ;
        return;
        }
      else {
        return;
        }}}
  else {
    let v788 = v571;
    let v789 = true;
    let v790 = v572;
    let v796 = v578;
    let v797 = v579;
    
    let txn5 = txn4;
    while (await (async () => {
      const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
      const v801 = v800 ? v789 : false;
      
      return v801;})()) {
      const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc10],
        timeoutAt: ['time', v808],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v512, v514, v521, v522, v579, v788, v796, v797, v808],
          evt_cnt: 0,
          funcNum: 9,
          lct: v790,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:240:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v843, time: v842, didSend: v387, from: v841 } = txn7;
            
            ;
            const cv788 = v788;
            const cv789 = false;
            const cv790 = v842;
            const cv796 = v796;
            const cv797 = v797;
            
            await (async () => {
              const v788 = cv788;
              const v789 = cv789;
              const v790 = cv790;
              const v796 = cv796;
              const v797 = cv797;
              
              if (await (async () => {
                const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
                const v801 = v800 ? v789 : false;
                
                return v801;})()) {
                const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
                sim_r.isHalt = false;
                }
              else {
                const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                if (v850) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: undefined /* Nothing */
                    });
                  const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v858) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v882) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc1, ctc5, ctc3, ctc1, ctc1, ctc8, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v843, time: v842, didSend: v387, from: v841 } = txn7;
        ;
        const v844 = stdlib.addressEq(v521, v841);
        const v845 = stdlib.addressEq(v512, v841);
        const v846 = v844 ? true : v845;
        stdlib.assert(v846, {
          at: './index.rsh:240:19:dot',
          fs: ['at ./index.rsh:239:46:application call to [unknown function] (defined at: ./index.rsh:239:46:function exp)'],
          msg: 'sender correct',
          who: 'Company'
          });
        const cv788 = v788;
        const cv789 = false;
        const cv790 = v842;
        const cv796 = v796;
        const cv797 = v797;
        
        v788 = cv788;
        v789 = cv789;
        v790 = cv790;
        v796 = cv796;
        v797 = cv797;
        
        txn5 = txn7;
        continue;
        }
      else {
        const {data: [v820], secs: v822, time: v821, didSend: v346, from: v819 } = txn6;
        undefined /* setApiDetails */;
        ;
        const v824 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v819), null);
        const v825 = stdlib.fromSome(v824, stdlib.checkedBigNumberify('./index.rsh:229:63:decimal', stdlib.UInt_max, '0'));
        const v827 = stdlib.ge(v797, v825);
        stdlib.assert(v827, {
          at: './index.rsh:230:20:application',
          fs: ['at ./index.rsh:228:31:application call to [unknown function] (defined at: ./index.rsh:228:31:function exp)'],
          msg: null,
          who: 'Company'
          });
        const v828 = true;
        await txn6.getOutput('investAPI_redeemInvestment', 'v828', ctc6, v828);
        const v838 = stdlib.sub(v797, v825);
        ;
        await stdlib.mapSet(map0, v819, undefined /* Nothing */);
        const v839 = stdlib.safeSub(v788, v825);
        const cv788 = v839;
        const cv789 = true;
        const cv790 = v821;
        const cv796 = v796;
        const cv797 = v838;
        
        v788 = cv788;
        v789 = cv789;
        v790 = cv790;
        v796 = cv796;
        v797 = cv797;
        
        txn5 = txn6;
        continue;}
      
      }
    const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
    if (v850) {
      ;
      const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v858) {
        ;
        return;
        }
      else {
        return;
        }}
    else {
      const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v882) {
        ;
        return;
        }
      else {
        return;
        }}}
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v500 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v501 = [v500];
  const v505 = stdlib.protect(ctc1, interact.deadline, 'for Creator\'s interact field deadline');
  const v506 = stdlib.protect(ctc1, interact.goal_formatted, 'for Creator\'s interact field goal_formatted');
  const v507 = stdlib.protect(ctc1, interact.max_goal, 'for Creator\'s interact field max_goal');
  
  const txn1 = await (ctc.sendrecv({
    args: [v507, v506, v505],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:67:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v513, v514, v515], secs: v517, time: v516, didSend: v33, from: v512 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v513, v514, v515], secs: v517, time: v516, didSend: v33, from: v512 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v522], secs: v524, time: v523, didSend: v42, from: v521 } = txn2;
  const v525 = v501[stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0')];
  const v526 = stdlib.Array_set(v525, '0', stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0'));
  const v527 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./index.rsh:89:11:dot', stdlib.UInt_max, '0'), v526);
  ;
  ;
  let v529 = false;
  let v530 = v523;
  let v536 = v527;
  let v537 = stdlib.checkedBigNumberify('./index.rsh:55:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v540 = v529 ? false : true;
    
    return v540;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 12,
      out_tys: [ctc4, ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v546, v547], secs: v549, time: v548, didSend: v61, from: v545 } = txn4;
    ;
    const v550 = stdlib.addressEq(v521, v545);
    stdlib.assert(v550, {
      at: './index.rsh:116:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v551 = stdlib.digest([ctc4], [v546]);
    const v552 = stdlib.digest([ctc4], [v547]);
    const v553 = stdlib.digestEq(v551, v552);
    if (v553) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 13,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v558, time: v557, didSend: v77, from: v556 } = txn5;
      ;
      const v559 = v536[stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0')];
      const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0')];
      const v561 = stdlib.add(v560, v513);
      const v563 = stdlib.Array_set(v559, '0', v561);
      const v564 = stdlib.Array_set(v536, stdlib.checkedBigNumberify('./index.rsh:98:15:dot', stdlib.UInt_max, '0'), v563);
      ;
      const v565 = stdlib.addressEq(v521, v556);
      stdlib.assert(v565, {
        at: './index.rsh:98:15:dot',
        fs: ['at ./index.rsh:117:32:application call to "passwordChecked" (defined at: ./index.rsh:94:33:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv529 = true;
      const cv530 = v557;
      const cv536 = v564;
      const cv537 = v537;
      
      v529 = cv529;
      v530 = cv530;
      v536 = cv536;
      v537 = cv537;
      
      txn3 = txn5;
      continue;
      
      }
    else {
      const cv529 = false;
      const cv530 = v548;
      const cv536 = v536;
      const cv537 = v537;
      
      v529 = cv529;
      v530 = cv530;
      v536 = cv536;
      v537 = cv537;
      
      txn3 = txn4;
      continue;}
    
    }
  let v570 = true;
  let v571 = stdlib.checkedBigNumberify('./index.rsh:133:21:decimal', stdlib.UInt_max, '0');
  let v572 = v530;
  let v578 = v536;
  let v579 = v537;
  
  let txn4 = txn3;
  while (await (async () => {
    const v584 = stdlib.lt(v571, v513);
    const v585 = v584 ? v570 : false;
    
    return v585;})()) {
    const v593 = stdlib.safeAdd(v572, v515);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc5],
      timeoutAt: ['time', v593],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const v629 = 'The campaign has finished';
      stdlib.protect(ctc0, await interact.log(v629), {
        at: './index.rsh:153:29:application',
        fs: ['at ./index.rsh:153:29:application call to [unknown function] (defined at: ./index.rsh:153:29:function exp)', 'at ./index.rsh:153:29:application call to "liftedInteract" (defined at: ./index.rsh:153:29:application)', 'at ./index.rsh:152:43:application call to [unknown function] (defined at: ./index.rsh:152:43:function exp)'],
        msg: 'log',
        who: 'Creator'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593],
        evt_cnt: 0,
        funcNum: 11,
        lct: v572,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:154:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v632, time: v631, didSend: v179, from: v630 } = txn6;
          
          ;
          const cv570 = false;
          const cv571 = v571;
          const cv572 = v631;
          const cv578 = v578;
          const cv579 = v579;
          
          await (async () => {
            const v570 = cv570;
            const v571 = cv571;
            const v572 = cv572;
            const v578 = cv578;
            const v579 = cv579;
            
            if (await (async () => {
              const v584 = stdlib.lt(v571, v513);
              const v585 = v584 ? v570 : false;
              
              return v585;})()) {
              const v593 = stdlib.safeAdd(v572, v515);
              sim_r.isHalt = false;
              }
            else {
              const v640 = stdlib.eq(v579, v513);
              if (v640) {
                
                const v644 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
                const v648 = stdlib.sub(v513, v644);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                
                const v651 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
                const v653 = true;
                const v654 = v652;
                const v655 = v572;
                const v661 = v578;
                const v662 = v648;
                
                if (await (async () => {
                  const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
                  const v667 = v666 ? v653 : false;
                  
                  return v667;})()) {
                  const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v730 = stdlib.sub(v662, v662);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v512,
                    tok: undefined /* Nothing */
                    });
                  const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                  if (v732) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: undefined /* Nothing */
                      });
                    const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v740) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v764) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}
              else {
                
                const v788 = v571;
                const v789 = true;
                const v790 = v572;
                const v796 = v578;
                const v797 = v579;
                
                if (await (async () => {
                  const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
                  const v801 = v800 ? v789 : false;
                  
                  return v801;})()) {
                  const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
                  sim_r.isHalt = false;
                  }
                else {
                  const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                  if (v850) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: undefined /* Nothing */
                      });
                    const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v858) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}
                  else {
                    const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                    const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                    if (v882) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v521,
                        tok: v522
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: v522
                        })
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}}}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc1, ctc1, ctc1, ctc6, ctc3, ctc1, ctc9, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v632, time: v631, didSend: v179, from: v630 } = txn6;
      ;
      const v633 = stdlib.addressEq(v521, v630);
      const v634 = stdlib.addressEq(v512, v630);
      const v635 = v633 ? true : v634;
      stdlib.assert(v635, {
        at: './index.rsh:154:17:dot',
        fs: ['at ./index.rsh:152:43:application call to [unknown function] (defined at: ./index.rsh:152:43:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv570 = false;
      const cv571 = v571;
      const cv572 = v631;
      const cv578 = v578;
      const cv579 = v579;
      
      v570 = cv570;
      v571 = cv571;
      v572 = cv572;
      v578 = cv578;
      v579 = cv579;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v608], secs: v610, time: v609, didSend: v137, from: v607 } = txn5;
      undefined /* setApiDetails */;
      const v612 = v608[stdlib.checkedBigNumberify('./index.rsh:138:11:spread', stdlib.UInt_max, '0')];
      const v614 = stdlib.add(v579, v612);
      ;
      await txn5.getOutput('investAPI_makeInvest', 'v612', ctc1, v612);
      const v622 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v607), null);
      const v623 = stdlib.fromSome(v622, stdlib.checkedBigNumberify('./index.rsh:146:44:decimal', stdlib.UInt_max, '0'));
      const v624 = stdlib.safeAdd(v623, v612);
      await stdlib.mapSet(map0, v607, v624);
      stdlib.protect(ctc0, await interact.showInvestment(v512, v612), {
        at: './index.rsh:147:53:application',
        fs: ['at ./index.rsh:147:23:application call to [unknown function] (defined at: ./index.rsh:147:27:function exp)', 'at ./index.rsh:144:19:application call to [unknown function] (defined at: ./index.rsh:144:19:function exp)'],
        msg: 'showInvestment',
        who: 'Creator'
        });
      
      const v626 = stdlib.safeAdd(v571, v612);
      const cv570 = true;
      const cv571 = v626;
      const cv572 = v609;
      const cv578 = v578;
      const cv579 = v614;
      
      v570 = cv570;
      v571 = cv571;
      v572 = cv572;
      v578 = cv578;
      v579 = cv579;
      
      txn4 = txn5;
      continue;}
    
    }
  const v640 = stdlib.eq(v579, v513);
  if (v640) {
    const v642 = 'Goal reached. Transfer money to the Founder...';
    stdlib.protect(ctc0, await interact.log(v642), {
      at: './index.rsh:165:25:application',
      fs: ['at ./index.rsh:165:25:application call to [unknown function] (defined at: ./index.rsh:165:25:function exp)', 'at ./index.rsh:165:25:application call to "liftedInteract" (defined at: ./index.rsh:165:25:application)'],
      msg: 'log',
      who: 'Creator'
      });
    
    const v644 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
    const v648 = stdlib.sub(v513, v644);
    ;
    const v650 = 'Claim SYS token from investors';
    stdlib.protect(ctc0, await interact.log(v650), {
      at: './index.rsh:174:25:application',
      fs: ['at ./index.rsh:174:25:application call to [unknown function] (defined at: ./index.rsh:174:25:function exp)', 'at ./index.rsh:174:25:application call to "liftedInteract" (defined at: ./index.rsh:174:25:application)'],
      msg: 'log',
      who: 'Creator'
      });
    
    const v651 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
    const v652 = v651[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
    let v653 = true;
    let v654 = v652;
    let v655 = v572;
    let v661 = v578;
    let v662 = v648;
    
    let txn5 = txn4;
    while (await (async () => {
      const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
      const v667 = v666 ? v653 : false;
      
      return v667;})()) {
      const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc10],
        timeoutAt: ['time', v674],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v512, v514, v521, v522, v579, v654, v661, v662, v674],
          evt_cnt: 0,
          funcNum: 6,
          lct: v655,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:202:17:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v720, time: v719, didSend: v291, from: v718 } = txn7;
            
            ;
            const cv653 = false;
            const cv654 = v654;
            const cv655 = v719;
            const cv661 = v661;
            const cv662 = v662;
            
            await (async () => {
              const v653 = cv653;
              const v654 = cv654;
              const v655 = cv655;
              const v661 = cv661;
              const v662 = cv662;
              
              if (await (async () => {
                const v666 = stdlib.gt(v654, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
                const v667 = v666 ? v653 : false;
                
                return v667;})()) {
                const v674 = stdlib.safeAdd(v655, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
                sim_r.isHalt = false;
                }
              else {
                const v730 = stdlib.sub(v662, v662);
                sim_r.txns.push({
                  kind: 'from',
                  to: v512,
                  tok: undefined /* Nothing */
                  });
                const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                if (v732) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: undefined /* Nothing */
                    });
                  const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v740) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v764) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc6, ctc1, ctc6, ctc3, ctc1, ctc1, ctc9, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v720, time: v719, didSend: v291, from: v718 } = txn7;
        ;
        const v721 = stdlib.addressEq(v521, v718);
        const v722 = stdlib.addressEq(v512, v718);
        const v723 = v721 ? true : v722;
        stdlib.assert(v723, {
          at: './index.rsh:202:17:dot',
          fs: ['at ./index.rsh:201:44:application call to [unknown function] (defined at: ./index.rsh:201:44:function exp)'],
          msg: 'sender correct',
          who: 'Creator'
          });
        const cv653 = false;
        const cv654 = v654;
        const cv655 = v719;
        const cv661 = v661;
        const cv662 = v662;
        
        v653 = cv653;
        v654 = cv654;
        v655 = cv655;
        v661 = cv661;
        v662 = cv662;
        
        txn5 = txn7;
        continue;
        }
      else {
        const {data: [v690], secs: v692, time: v691, didSend: v248, from: v689 } = txn6;
        undefined /* setApiDetails */;
        ;
        const v694 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v689), null);
        const v695 = stdlib.fromSome(v694, stdlib.checkedBigNumberify('./index.rsh:190:61:decimal', stdlib.UInt_max, '0'));
        const v697 = 'An investor is claiming his reward...';
        stdlib.protect(ctc0, await interact.log(v697), {
          at: './index.rsh:191:31:application',
          fs: ['at ./index.rsh:191:31:application call to [unknown function] (defined at: ./index.rsh:191:31:function exp)', 'at ./index.rsh:191:31:application call to "liftedInteract" (defined at: ./index.rsh:191:31:application)', 'at ./index.rsh:189:15:application call to [unknown function] (defined at: ./index.rsh:189:15:function exp)'],
          msg: 'log',
          who: 'Creator'
          });
        
        const v698 = v661[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
        const v699 = v698[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
        const v700 = stdlib.ge(v699, v695);
        stdlib.assert(v700, {
          at: './index.rsh:192:18:application',
          fs: ['at ./index.rsh:189:15:application call to [unknown function] (defined at: ./index.rsh:189:15:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v701 = true;
        await txn6.getOutput('investAPI_claimReward', 'v701', ctc7, v701);
        const v712 = stdlib.sub(v699, v695);
        const v714 = stdlib.Array_set(v698, '0', v712);
        const v715 = stdlib.Array_set(v661, stdlib.checkedBigNumberify('./index.rsh:194:57:application', stdlib.UInt_max, '0'), v714);
        ;
        await stdlib.mapSet(map0, v689, undefined /* Nothing */);
        const v716 = stdlib.safeSub(v654, v695);
        const cv653 = true;
        const cv654 = v716;
        const cv655 = v691;
        const cv661 = v715;
        const cv662 = v662;
        
        v653 = cv653;
        v654 = cv654;
        v655 = cv655;
        v661 = cv661;
        v662 = cv662;
        
        txn5 = txn6;
        continue;}
      
      }
    const v730 = stdlib.sub(v662, v662);
    ;
    const v732 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
    if (v732) {
      ;
      const v738 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v739 = v738[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v740 = stdlib.gt(v739, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v740) {
        ;
        return;
        }
      else {
        return;
        }}
    else {
      const v762 = v661[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v764 = stdlib.gt(v763, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v764) {
        ;
        return;
        }
      else {
        return;
        }}}
  else {
    const v787 = 'Goal not reached. Waiting investors redeem thier money.';
    stdlib.protect(ctc0, await interact.log(v787), {
      at: './index.rsh:217:25:application',
      fs: ['at ./index.rsh:217:25:application call to [unknown function] (defined at: ./index.rsh:217:25:function exp)', 'at ./index.rsh:217:25:application call to "liftedInteract" (defined at: ./index.rsh:217:25:application)'],
      msg: 'log',
      who: 'Creator'
      });
    
    let v788 = v571;
    let v789 = true;
    let v790 = v572;
    let v796 = v578;
    let v797 = v579;
    
    let txn5 = txn4;
    while (await (async () => {
      const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
      const v801 = v800 ? v789 : false;
      
      return v801;})()) {
      const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc10],
        timeoutAt: ['time', v808],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v512, v514, v521, v522, v579, v788, v796, v797, v808],
          evt_cnt: 0,
          funcNum: 9,
          lct: v790,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:240:19:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v843, time: v842, didSend: v387, from: v841 } = txn7;
            
            ;
            const cv788 = v788;
            const cv789 = false;
            const cv790 = v842;
            const cv796 = v796;
            const cv797 = v797;
            
            await (async () => {
              const v788 = cv788;
              const v789 = cv789;
              const v790 = cv790;
              const v796 = cv796;
              const v797 = cv797;
              
              if (await (async () => {
                const v800 = stdlib.gt(v788, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
                const v801 = v800 ? v789 : false;
                
                return v801;})()) {
                const v808 = stdlib.safeAdd(v790, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
                sim_r.isHalt = false;
                }
              else {
                const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
                if (v850) {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v521,
                    tok: undefined /* Nothing */
                    });
                  const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v858) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
                  const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
                  if (v882) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v521,
                      tok: v522
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v522
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc6, ctc1, ctc6, ctc3, ctc1, ctc1, ctc9, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v843, time: v842, didSend: v387, from: v841 } = txn7;
        ;
        const v844 = stdlib.addressEq(v521, v841);
        const v845 = stdlib.addressEq(v512, v841);
        const v846 = v844 ? true : v845;
        stdlib.assert(v846, {
          at: './index.rsh:240:19:dot',
          fs: ['at ./index.rsh:239:46:application call to [unknown function] (defined at: ./index.rsh:239:46:function exp)'],
          msg: 'sender correct',
          who: 'Creator'
          });
        const cv788 = v788;
        const cv789 = false;
        const cv790 = v842;
        const cv796 = v796;
        const cv797 = v797;
        
        v788 = cv788;
        v789 = cv789;
        v790 = cv790;
        v796 = cv796;
        v797 = cv797;
        
        txn5 = txn7;
        continue;
        }
      else {
        const {data: [v820], secs: v822, time: v821, didSend: v346, from: v819 } = txn6;
        undefined /* setApiDetails */;
        ;
        const v824 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v819), null);
        const v825 = stdlib.fromSome(v824, stdlib.checkedBigNumberify('./index.rsh:229:63:decimal', stdlib.UInt_max, '0'));
        const v827 = stdlib.ge(v797, v825);
        stdlib.assert(v827, {
          at: './index.rsh:230:20:application',
          fs: ['at ./index.rsh:228:31:application call to [unknown function] (defined at: ./index.rsh:228:31:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v828 = true;
        await txn6.getOutput('investAPI_redeemInvestment', 'v828', ctc7, v828);
        stdlib.protect(ctc0, await interact.redeemInvestmentGet(v512, v825), {
          at: './index.rsh:232:60:application',
          fs: ['at ./index.rsh:232:25:application call to [unknown function] (defined at: ./index.rsh:232:29:function exp)', 'at ./index.rsh:228:31:application call to [unknown function] (defined at: ./index.rsh:228:31:function exp)'],
          msg: 'redeemInvestmentGet',
          who: 'Creator'
          });
        
        const v838 = stdlib.sub(v797, v825);
        ;
        await stdlib.mapSet(map0, v819, undefined /* Nothing */);
        const v839 = stdlib.safeSub(v788, v825);
        const cv788 = v839;
        const cv789 = true;
        const cv790 = v821;
        const cv796 = v796;
        const cv797 = v838;
        
        v788 = cv788;
        v789 = cv789;
        v790 = cv790;
        v796 = cv796;
        v797 = cv797;
        
        txn5 = txn6;
        continue;}
      
      }
    const v850 = stdlib.gt(v797, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
    if (v850) {
      ;
      const v856 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v857 = v856[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v858 = stdlib.gt(v857, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v858) {
        ;
        return;
        }
      else {
        return;
        }}
    else {
      const v880 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v881 = v880[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v882 = stdlib.gt(v881, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v882) {
        ;
        return;
        }
      else {
        return;
        }}}
  
  
  
  };
export async function _investAPI_claimReward9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _investAPI_claimReward9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _investAPI_claimReward9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v512, v514, v521, v522, v579, v654, v661, v662, v674] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc3, ctc1, ctc3, ctc4, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v676 = ctc.selfAddress();
  const v678 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)', 'at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)'],
    msg: 'in',
    who: 'investAPI_claimReward'
    });
  const v680 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v676), null);
  const v681 = stdlib.fromSome(v680, stdlib.checkedBigNumberify('./index.rsh:185:39:decimal', stdlib.UInt_max, '0'));
  const v682 = v661[stdlib.checkedBigNumberify('./index.rsh:185:52:application', stdlib.UInt_max, '0')];
  const v683 = v682[stdlib.checkedBigNumberify('./index.rsh:185:52:application', stdlib.UInt_max, '0')];
  const v684 = stdlib.le(v681, v683);
  stdlib.assert(v684, {
    at: './index.rsh:185:17:application',
    fs: ['at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)', 'at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)', 'at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)'],
    msg: null,
    who: 'investAPI_claimReward'
    });
  const v687 = stdlib.gt(v683, stdlib.checkedBigNumberify('./index.rsh:186:35:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v687, {
    at: './index.rsh:186:17:application',
    fs: ['at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)', 'at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)', 'at ./index.rsh:184:12:application call to [unknown function] (defined at: ./index.rsh:184:12:function exp)'],
    msg: 'No rewards left in the contract',
    who: 'investAPI_claimReward'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v512, v514, v521, v522, v579, v654, v661, v662, v674, v678],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:188:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v690], secs: v692, time: v691, didSend: v248, from: v689 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "investAPI_claimReward"
        });
      ;
      const v694 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v689), null);
      const v695 = stdlib.fromSome(v694, stdlib.checkedBigNumberify('./index.rsh:190:61:decimal', stdlib.UInt_max, '0'));
      const v698 = v661[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
      const v699 = v698[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
      const v701 = true;
      const v702 = await txn1.getOutput('investAPI_claimReward', 'v701', ctc5, v701);
      
      const v712 = stdlib.sub(v699, v695);
      const v714 = stdlib.Array_set(v698, '0', v712);
      const v715 = stdlib.Array_set(v661, stdlib.checkedBigNumberify('./index.rsh:194:57:application', stdlib.UInt_max, '0'), v714);
      sim_r.txns.push({
        kind: 'from',
        to: v689,
        tok: v522
        });
      await stdlib.simMapSet(sim_r, 0, v689, undefined /* Nothing */);
      const v716 = stdlib.safeSub(v654, v695);
      const v1514 = v716;
      const v1516 = v715;
      const v1517 = v662;
      const v1518 = stdlib.gt(v716, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
      if (v1518) {
        const v1520 = stdlib.safeAdd(v691, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
        sim_r.isHalt = false;
        }
      else {
        const v1521 = stdlib.sub(v662, v662);
        sim_r.txns.push({
          kind: 'from',
          to: v512,
          tok: undefined /* Nothing */
          });
        const v1522 = stdlib.gt(v1521, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
        if (v1522) {
          sim_r.txns.push({
            kind: 'from',
            to: v521,
            tok: undefined /* Nothing */
            });
          const v1523 = v715[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1524 = v1523[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1525 = stdlib.gt(v1524, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
          if (v1525) {
            sim_r.txns.push({
              kind: 'from',
              to: v521,
              tok: v522
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v1526 = v715[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1527 = v1526[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1528 = stdlib.gt(v1527, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
          if (v1528) {
            sim_r.txns.push({
              kind: 'from',
              to: v521,
              tok: v522
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc3, ctc4, ctc1, ctc1, ctc7, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v690], secs: v692, time: v691, didSend: v248, from: v689 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v694 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v689), null);
  const v695 = stdlib.fromSome(v694, stdlib.checkedBigNumberify('./index.rsh:190:61:decimal', stdlib.UInt_max, '0'));
  const v698 = v661[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
  const v699 = v698[stdlib.checkedBigNumberify('./index.rsh:192:26:application', stdlib.UInt_max, '0')];
  const v700 = stdlib.ge(v699, v695);
  stdlib.assert(v700, {
    at: './index.rsh:192:18:application',
    fs: ['at ./index.rsh:189:15:application call to [unknown function] (defined at: ./index.rsh:189:15:function exp)'],
    msg: null,
    who: 'investAPI_claimReward'
    });
  const v701 = true;
  const v702 = await txn1.getOutput('investAPI_claimReward', 'v701', ctc5, v701);
  if (v248) {
    stdlib.protect(ctc0, await interact.out(v690, v702), {
      at: './index.rsh:183:12:application',
      fs: ['at ./index.rsh:183:12:application call to [unknown function] (defined at: ./index.rsh:183:12:function exp)', 'at ./index.rsh:193:14:application call to "ret" (defined at: ./index.rsh:189:15:function exp)', 'at ./index.rsh:189:15:application call to [unknown function] (defined at: ./index.rsh:189:15:function exp)'],
      msg: 'out',
      who: 'investAPI_claimReward'
      });
    }
  else {
    }
  
  const v712 = stdlib.sub(v699, v695);
  const v714 = stdlib.Array_set(v698, '0', v712);
  const v715 = stdlib.Array_set(v661, stdlib.checkedBigNumberify('./index.rsh:194:57:application', stdlib.UInt_max, '0'), v714);
  ;
  await stdlib.mapSet(map0, v689, undefined /* Nothing */);
  const v716 = stdlib.safeSub(v654, v695);
  const v1514 = v716;
  const v1516 = v715;
  const v1517 = v662;
  const v1518 = stdlib.gt(v716, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
  if (v1518) {
    const v1520 = stdlib.safeAdd(v691, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
    return;
    }
  else {
    const v1521 = stdlib.sub(v662, v662);
    ;
    const v1522 = stdlib.gt(v1521, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
    if (v1522) {
      ;
      const v1523 = v715[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1524 = v1523[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1525 = stdlib.gt(v1524, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v1525) {
        ;
        return;
        }
      else {
        return;
        }}
    else {
      const v1526 = v715[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1527 = v1526[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1528 = stdlib.gt(v1527, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v1528) {
        ;
        return;
        }
      else {
        return;
        }}}
  
  
  };
export async function _investAPI_makeInvest16(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _investAPI_makeInvest16 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _investAPI_makeInvest16 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'), [ctc3, ctc1, ctc1, ctc1, ctc3, ctc4, ctc1, ctc7, ctc1, ctc1]);
  const v597 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
    msg: 'in',
    who: 'investAPI_makeInvest'
    });
  const v598 = v597[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v601 = stdlib.gt(v598, stdlib.checkedBigNumberify('./index.rsh:140:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v601, {
    at: './index.rsh:140:17:application',
    fs: ['at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
    msg: null,
    who: 'investAPI_makeInvest'
    });
  const v603 = stdlib.safeAdd(v579, v598);
  const v604 = stdlib.le(v603, v513);
  stdlib.assert(v604, {
    at: './index.rsh:141:17:application',
    fs: ['at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
    msg: 'Not allow to invest more than goal amount',
    who: 'investAPI_makeInvest'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v512, v513, v514, v515, v521, v522, v571, v578, v579, v593, v597],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v598, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v608], secs: v610, time: v609, didSend: v137, from: v607 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "investAPI_makeInvest"
        });
      const v612 = v608[stdlib.checkedBigNumberify('./index.rsh:138:11:spread', stdlib.UInt_max, '0')];
      const v614 = stdlib.add(v579, v612);
      sim_r.txns.push({
        amt: v612,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v616 = await txn1.getOutput('investAPI_makeInvest', 'v612', ctc1, v612);
      
      const v622 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v607), null);
      const v623 = stdlib.fromSome(v622, stdlib.checkedBigNumberify('./index.rsh:146:44:decimal', stdlib.UInt_max, '0'));
      const v624 = stdlib.safeAdd(v623, v612);
      await stdlib.simMapSet(sim_r, 0, v607, v624);
      const v626 = stdlib.safeAdd(v571, v612);
      const v1530 = v626;
      const v1532 = v578;
      const v1533 = v614;
      const v1534 = stdlib.lt(v626, v513);
      if (v1534) {
        const v1536 = stdlib.safeAdd(v609, v515);
        sim_r.isHalt = false;
        }
      else {
        const v1537 = stdlib.eq(v614, v513);
        if (v1537) {
          const v1538 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
          const v1539 = stdlib.sub(v513, v1538);
          sim_r.txns.push({
            kind: 'from',
            to: v512,
            tok: undefined /* Nothing */
            });
          const v1540 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
          const v1541 = v1540[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
          const v1616 = v1541;
          const v1618 = v578;
          const v1619 = v1539;
          const v1620 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
          if (v1620) {
            const v1622 = stdlib.safeAdd(v609, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
            sim_r.isHalt = false;
            }
          else {
            const v1623 = stdlib.sub(v1539, v1539);
            sim_r.txns.push({
              kind: 'from',
              to: v512,
              tok: undefined /* Nothing */
              });
            const v1624 = stdlib.gt(v1623, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
            if (v1624) {
              sim_r.txns.push({
                kind: 'from',
                to: v521,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v522
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v522
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1631 = v626;
          const v1634 = v578;
          const v1635 = v614;
          const v1636 = stdlib.gt(v626, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
          if (v1636) {
            const v1638 = stdlib.safeAdd(v609, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
            sim_r.isHalt = false;
            }
          else {
            const v1639 = stdlib.gt(v614, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
            if (v1639) {
              sim_r.txns.push({
                kind: 'from',
                to: v521,
                tok: undefined /* Nothing */
                });
              const v1640 = v578[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
              const v1641 = v1640[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
              const v1642 = stdlib.gt(v1641, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
              if (v1642) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v521,
                  tok: v522
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v522
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v522
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1643 = v578[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
              const v1644 = v1643[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
              const v1645 = stdlib.gt(v1644, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
              if (v1645) {
                sim_r.txns.push({
                  kind: 'from',
                  to: v521,
                  tok: v522
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v522
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v522
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1, ctc1, ctc3, ctc4, ctc1, ctc7, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v608], secs: v610, time: v609, didSend: v137, from: v607 } = txn1;
  undefined /* setApiDetails */;
  const v612 = v608[stdlib.checkedBigNumberify('./index.rsh:138:11:spread', stdlib.UInt_max, '0')];
  const v614 = stdlib.add(v579, v612);
  ;
  const v616 = await txn1.getOutput('investAPI_makeInvest', 'v612', ctc1, v612);
  if (v137) {
    stdlib.protect(ctc0, await interact.out(v608, v616), {
      at: './index.rsh:138:12:application',
      fs: ['at ./index.rsh:138:12:application call to [unknown function] (defined at: ./index.rsh:138:12:function exp)', 'at ./index.rsh:145:12:application call to "y" (defined at: ./index.rsh:144:19:function exp)', 'at ./index.rsh:144:19:application call to [unknown function] (defined at: ./index.rsh:144:19:function exp)'],
      msg: 'out',
      who: 'investAPI_makeInvest'
      });
    }
  else {
    }
  
  const v622 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v607), null);
  const v623 = stdlib.fromSome(v622, stdlib.checkedBigNumberify('./index.rsh:146:44:decimal', stdlib.UInt_max, '0'));
  const v624 = stdlib.safeAdd(v623, v612);
  await stdlib.mapSet(map0, v607, v624);
  const v626 = stdlib.safeAdd(v571, v612);
  const v1530 = v626;
  const v1532 = v578;
  const v1533 = v614;
  const v1534 = stdlib.lt(v626, v513);
  if (v1534) {
    const v1536 = stdlib.safeAdd(v609, v515);
    return;
    }
  else {
    const v1537 = stdlib.eq(v614, v513);
    if (v1537) {
      const v1538 = stdlib.safeDiv(v513, stdlib.checkedBigNumberify('./index.rsh:169:36:decimal', stdlib.UInt_max, '2'));
      const v1539 = stdlib.sub(v513, v1538);
      ;
      const v1540 = v578[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
      const v1541 = v1540[stdlib.checkedBigNumberify('./index.rsh:180:28:application', stdlib.UInt_max, '0')];
      const v1616 = v1541;
      const v1618 = v578;
      const v1619 = v1539;
      const v1620 = stdlib.gt(v1541, stdlib.checkedBigNumberify('./index.rsh:182:31:decimal', stdlib.UInt_max, '0'));
      if (v1620) {
        const v1622 = stdlib.safeAdd(v609, stdlib.checkedBigNumberify('./index.rsh:201:36:application', stdlib.UInt_max, '518400'));
        return;
        }
      else {
        const v1623 = stdlib.sub(v1539, v1539);
        ;
        const v1624 = stdlib.gt(v1623, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
        if (v1624) {
          ;
          return;
          }
        else {
          return;
          }}}
    else {
      const v1631 = v626;
      const v1634 = v578;
      const v1635 = v614;
      const v1636 = stdlib.gt(v626, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
      if (v1636) {
        const v1638 = stdlib.safeAdd(v609, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
        return;
        }
      else {
        const v1639 = stdlib.gt(v614, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
        if (v1639) {
          ;
          const v1640 = v578[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1641 = v1640[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1642 = stdlib.gt(v1641, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
          if (v1642) {
            ;
            return;
            }
          else {
            return;
            }}
        else {
          const v1643 = v578[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1644 = v1643[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1645 = stdlib.gt(v1644, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
          if (v1645) {
            ;
            return;
            }
          else {
            return;
            }}}}}
  
  
  };
export async function _investAPI_redeemInvestment15(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _investAPI_redeemInvestment15 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _investAPI_redeemInvestment15 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v512, v514, v521, v522, v579, v788, v796, v797, v808] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), [ctc3, ctc1, ctc3, ctc4, ctc1, ctc1, ctc7, ctc1, ctc1]);
  const v810 = ctc.selfAddress();
  const v812 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:224:14:application call to [unknown function] (defined at: ./index.rsh:224:14:function exp)', 'at ./index.rsh:224:14:application call to [unknown function] (defined at: ./index.rsh:224:14:function exp)'],
    msg: 'in',
    who: 'investAPI_redeemInvestment'
    });
  const v814 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v810), null);
  const v815 = stdlib.fromSome(v814, stdlib.checkedBigNumberify('./index.rsh:225:41:decimal', stdlib.UInt_max, '0'));
  const v817 = stdlib.le(v815, v797);
  stdlib.assert(v817, {
    at: './index.rsh:225:19:application',
    fs: ['at ./index.rsh:224:14:application call to [unknown function] (defined at: ./index.rsh:224:14:function exp)', 'at ./index.rsh:224:14:application call to [unknown function] (defined at: ./index.rsh:224:14:function exp)', 'at ./index.rsh:224:14:application call to [unknown function] (defined at: ./index.rsh:224:14:function exp)'],
    msg: null,
    who: 'investAPI_redeemInvestment'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v512, v514, v521, v522, v579, v788, v796, v797, v808, v812],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:227:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v820], secs: v822, time: v821, didSend: v346, from: v819 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "investAPI_redeemInvestment"
        });
      ;
      const v824 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v819), null);
      const v825 = stdlib.fromSome(v824, stdlib.checkedBigNumberify('./index.rsh:229:63:decimal', stdlib.UInt_max, '0'));
      const v828 = true;
      const v829 = await txn1.getOutput('investAPI_redeemInvestment', 'v828', ctc5, v828);
      
      const v838 = stdlib.sub(v797, v825);
      sim_r.txns.push({
        kind: 'from',
        to: v819,
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v819, undefined /* Nothing */);
      const v839 = stdlib.safeSub(v788, v825);
      const v1646 = v839;
      const v1649 = v796;
      const v1650 = v838;
      const v1651 = stdlib.gt(v839, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
      if (v1651) {
        const v1653 = stdlib.safeAdd(v821, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
        sim_r.isHalt = false;
        }
      else {
        const v1654 = stdlib.gt(v838, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
        if (v1654) {
          sim_r.txns.push({
            kind: 'from',
            to: v521,
            tok: undefined /* Nothing */
            });
          const v1655 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1656 = v1655[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1657 = stdlib.gt(v1656, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
          if (v1657) {
            sim_r.txns.push({
              kind: 'from',
              to: v521,
              tok: v522
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          const v1658 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
          const v1660 = stdlib.gt(v1659, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
          if (v1660) {
            sim_r.txns.push({
              kind: 'from',
              to: v521,
              tok: v522
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: v522
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc3, ctc4, ctc1, ctc1, ctc7, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v820], secs: v822, time: v821, didSend: v346, from: v819 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v824 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v819), null);
  const v825 = stdlib.fromSome(v824, stdlib.checkedBigNumberify('./index.rsh:229:63:decimal', stdlib.UInt_max, '0'));
  const v827 = stdlib.ge(v797, v825);
  stdlib.assert(v827, {
    at: './index.rsh:230:20:application',
    fs: ['at ./index.rsh:228:31:application call to [unknown function] (defined at: ./index.rsh:228:31:function exp)'],
    msg: null,
    who: 'investAPI_redeemInvestment'
    });
  const v828 = true;
  const v829 = await txn1.getOutput('investAPI_redeemInvestment', 'v828', ctc5, v828);
  if (v346) {
    stdlib.protect(ctc0, await interact.out(v820, v829), {
      at: './index.rsh:223:14:application',
      fs: ['at ./index.rsh:223:14:application call to [unknown function] (defined at: ./index.rsh:223:14:function exp)', 'at ./index.rsh:231:30:application call to "returnOfAPIredeem" (defined at: ./index.rsh:228:31:function exp)', 'at ./index.rsh:228:31:application call to [unknown function] (defined at: ./index.rsh:228:31:function exp)'],
      msg: 'out',
      who: 'investAPI_redeemInvestment'
      });
    }
  else {
    }
  
  const v838 = stdlib.sub(v797, v825);
  ;
  await stdlib.mapSet(map0, v819, undefined /* Nothing */);
  const v839 = stdlib.safeSub(v788, v825);
  const v1646 = v839;
  const v1649 = v796;
  const v1650 = v838;
  const v1651 = stdlib.gt(v839, stdlib.checkedBigNumberify('./index.rsh:222:37:decimal', stdlib.UInt_max, '0'));
  if (v1651) {
    const v1653 = stdlib.safeAdd(v821, stdlib.checkedBigNumberify('./index.rsh:239:38:application', stdlib.UInt_max, '518400'));
    return;
    }
  else {
    const v1654 = stdlib.gt(v838, stdlib.checkedBigNumberify('./index.rsh:247:18:decimal', stdlib.UInt_max, '0'));
    if (v1654) {
      ;
      const v1655 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1656 = v1655[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1657 = stdlib.gt(v1656, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v1657) {
        ;
        return;
        }
      else {
        return;
        }}
    else {
      const v1658 = v796[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1659 = v1658[stdlib.checkedBigNumberify('./index.rsh:250:14:application', stdlib.UInt_max, '0')];
      const v1660 = stdlib.gt(v1659, stdlib.checkedBigNumberify('./index.rsh:250:24:decimal', stdlib.UInt_max, '0'));
      if (v1660) {
        ;
        return;
        }
      else {
        return;
        }}}
  
  
  };
export async function investAPI_claimReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for investAPI_claimReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for investAPI_claimReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _investAPI_claimReward9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function investAPI_makeInvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for investAPI_makeInvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for investAPI_makeInvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 16) {return _investAPI_makeInvest16(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function investAPI_redeemInvestment(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for investAPI_redeemInvestment expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for investAPI_redeemInvestment expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 15) {return _investAPI_redeemInvestment15(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`investAPI_claimReward()byte`, `investAPI_makeInvest(uint64)uint64`, `investAPI_redeemInvestment()byte`],
    pure: [`views_checkGoalReachedV()byte`, `views_getCtcBalanceV()uint64`, `views_getGoalV()uint64`, `views_isCampaignOnV()byte`],
    sigs: [`investAPI_claimReward()byte`, `investAPI_makeInvest(uint64)uint64`, `investAPI_redeemInvestment()byte`, `views_checkGoalReachedV()byte`, `views_getCtcBalanceV()uint64`, `views_getGoalV()uint64`, `views_isCampaignOnV()byte`]
    },
  appApproval: `BiAeAAEJBBIQIFgIEQ9xeSgwSFCBhNSVCYvGmZoO+8yj9w7Wkp6NDtjq0awB2KaEiwUNgQFgBQagjQaA0h8mAwEAAQEAIjUAMRhBC5AqZEkiWzUBIQhbNQIxGSMSQQAJMQAoJK9mQgtdNhoAF0lBAggiNQQjNQZJIREMQAF/SSESDEAAm0khEwxAAAghExJEKkIF4yESEkQ0AUkhBQxAAD5JIQkMQAAmSSEEDEAAESEEEkQoZEk1A1coCDUHQgsVSChkSTUDVygINQdCCwdIKGQpZFBJNQNXKAg1B0IK9kkkDEAAK0khCgxAABFIKGQpZFBJNQNXIAg1B0IK2CQSRChkKWRQSTUDVyAINQdCCsUjEkQoZEk1A1c5CDUHQgq1SSEUDEAAWSEUEkQ0AUkhBQxAACZJIQkMQAAYSSEEDEAACiEEEkQoNQdCColIKDUHQgqCSCk1B0IKe0kkDEAAF0khCgxAAAdIKDUHQgpnJBJEKDUHQgpeIxJEKDUHQgpVIRESRDQBSSEFDEAANEkhCQxAABxJIQQMQAAMIQQSRCEIrzUHQgouSCEIrzUHQgolSChkKWRQSTUDV3kINQdCChRJJAxAACtJIQoMQAARSChkKWRQSTUDV1AINQdCCfYkEkQoZClkUEk1A1dQCDUHQgnjIxJEIQivNQdCCdhJIRUMQAAZSSEWDEAACCEWEkQqQgNUIRUSRDYaAUICKoGJwJw3EkQ0AUkhBQxAACZJIQkMQAAYSSEEDEAACiEEEkQoNQdCCZBIKDUHQgmJSCg1B0IJgkkkDEAAF0khCgxAAAdIKDUHQgluJBJEKTUHQgllIxJEKDUHQglcNhoCFzUENhoDNhoBF0kkDEACxUmBCwxAAaxJgQwMQAE3SSEXDEAAfSEXEkQhBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUohBls1/1c4IDX+IQdbNf1XYBE1/IAEIp+XA7A0/FcAETX7NP80/YgJOzT+MQASRDQDVwAgNP80AyENWzQDIQ5bNP40/SMyBjT7SSJbNP8IFjX6VwgJNPpMUDQDIQtbQgT6SCEJNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf8hBls1/iENWzX9IQ5bNfxXOCA1+yEHWzX6V2ARNfkhC1s1+Ek1BUlXAIA191eAgDX2gARIuMzuNPdQNPZQsDT7MQASRDT3ATT2ARJBAC80/zT+FlA0/RZQNPwWUDT7UDT6FlA0+VA0+BZQKEsBVwB5Z0ghBDUBMgY1AkIH7jT/NP40/TT8NPs0+iIyBjT5NPhCBEdIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/1c4IDX+gATj2TY1sDIGNAMhGFsPRDT+MQASNP8xABIRRDT/NAMhBls0AyENWzQDIQ5bNP40AyEHWyI0AyEZWzIGNANXaBE0AyEMW0IEOEmBCgxAAKJIIQU0ARJENARJIhJMNAISEUQoZClkUDUDSTUFNf+ABDfp4yA0/1CwMgY0AyEYWwxENP8XNf40/ogHiIAIAAAAAAAAAmQ0/hZQsDT+FjUHMQAoKSIxAIgHXEk1/SNbNP0iVU00/ggWUGY0A1cAIDQDIQZbNAMhDVs0AyEOWzQDVzggNAMhB1sjNAMhGVs0/ggyBjQDV2gRNAMhDFs0/ghCA49IIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/1coIDX+gASiBWaOsDIGNAMhDFsPRDT+MQASNP8xABIRRDT/NAMhBls0/jQDIQ9bNAMhEFs0AyEHWyIyBjQDV2ARNAMhC1tCBRhJIRoMQAHgSSEbDEABF0khCAxAAKVIIQo0ARJENARJIhJMNAISEUQoZClkUEk1AyELWzX/STUFNf6ABEfkryc0/lCwMgY0AyEMWwxEIjEAiAZYSTX8I1s0/CJVTTX9NP80/Q9EgAkAAAAAAAADPAGwKTUHsSKyATT9sggjshAxALIHszEAKCSvZjQDVwAgNAMhBls0A1coIDQDIQ9bNAMhEFs0AyEHWzT9CSMyBjQDV2ARNP80/QlCBF4hGxJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcAIDX/VyggNf6ABGG0rAywMgY0AyEMWw9ENP4xABI0/zEAEhFENP80AyEGWzT+NAMhD1s0AyEQWyI0AyEHWzIGNANXYBE0AyELW0ICukgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJIQ9bNf9XYBE1/kk1BTX9gARokmRjNP1QsDIGNAMhDFsMRCIxAIgFQ0k1+yNbNPsiVU01/DT+VwARSTX7IltJNfo0/A9EgAkAAAAAAAACvQGwKTUHsSKyATT8shIlshAxALIUNP+yEbMxACgkr2Y0A1cAIDQDIQZbNANXKCA0/zQDIRBbIzQDIQdbNPwJMgY0+zT6NPwJFjX5VwgJNPlMUDQDIQtbQgH4SSMMQAB2IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwARNf9JNQUXNf6ABNUVGRQ0/hZQsCEciASYsSKyASKyEiWyEDIKshQ0/rIRszQDVxEgNAOBMVs0A4E5WzQDgUFbMQA0/iIyBjT/VwARIQivNf1XCAk0/UxQIkIAZEghHIgETyI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCFs1/iEFWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJrzX8NPwxAFA0/xZQNP4WUDT9FlAoSwFXAElnSCM1ATIGNQJCA5E1/zX+Nf01/DX7Nfo1+TX4Nfc19jT8QQAXNPY09zT4NPk0+jT7IyI0/TT+NP9CAC809jT3FlA0+BZQNPkWUDT6UDT7FlA0/lA0/xZQKEsBVwB5Z0ghCTUBMgY1AkIDMjX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/DT2DDT7EEEARTT9NPgINfQ09TT2FlA09xZQNPgWUDT5UDT6FlA0/BZQNP5QNP8WUDT0FlAoSwFXAH9nKUsBV38KZ0ghBTUBMgY1AkICzDT/NPYSQQA1NPaBAgo19LEisgE09LIII7IQNPWyB7M09TT3NPk0+jT/IzT+VwARIls0/TT+NPY09AlCABY09TT3NPk0+jT/NPwjNP00/jT/QgE5Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0/CINNPsQQQBANP0hHQg19TT2NPcWUDT4UDT5FlA0+hZQNPwWUDT+UDT/FlA09RZQKEsBVwB/ZylLAVd/AmdIJDUBMgY1AkICGzT/SQk19bEisgE0/7III7IQNPayB7M09SINQQBnsSKyATT1sggjshA0+LIHszT+VwARIltJNfQiDUEALrEisgE09LISJbIQNPiyFDT5shGzsSKyASKyEiWyEDIJshUyCrIUNPmyEbNCAZWxIrIBIrISJbIQMgmyFTIKshQ0+bIRs0IBezT+VwARIltJNfQiDUEALrEisgE09LISJbIQNPiyFDT5shGzsSKyASKyEiWyEDIJshUyCrIUNPmyEbNCAT6xIrIBIrISJbIQMgmyFTIKshQ0+bIRs0IBJDX/Nf41/TX8Nfs1+jX5Nfg19zX2NPsiDTT8EEEAQTT9IR0INfU09jT3FlA0+FA0+RZQNPoWUDT7FlA0/lA0/xZQNPUWUChLAVcAf2cpSwFXfwJnSCEKNQEyBjUCQgDhNP8iDUEAZ7EisgE0/7III7IQNPiyB7M0/lcAESJbSTX1Ig1BAC6xIrIBNPWyEiWyEDT4shQ0+bIRs7EisgEishIlshAyCbIVMgqyFDT5shGzQgBxsSKyASKyEiWyEDIJshUyCrIUNPmyEbNCAFc0/lcAESJbSTX1Ig1BAC6xIrIBNPWyEiWyEDT4shQ0+bIRs7EisgEishIlshAyCbIVMgqyFDT5shGzQgAasSKyASKyEiWyEDIJshUyCrIUNPmyEbNCAAAxGSEaEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAARIJK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 137,
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
                "internalType": "uint256",
                "name": "v513",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v514",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
                "internalType": "uint256",
                "name": "v513",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v514",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v515",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v522",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v608",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
        "internalType": "struct T26",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T32",
                "name": "v546",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T32",
                "name": "v547",
                "type": "tuple"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T34",
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
        "internalType": "struct T26",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v690",
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
    "name": "_reach_e5",
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
        "internalType": "struct T26",
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
                "name": "v820",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
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
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v612",
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
    "name": "_reach_oe_v701",
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
    "name": "_reach_oe_v828",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v522",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T29",
                "name": "v608",
                "type": "tuple"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
        "internalType": "struct T26",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T32",
                "name": "v546",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T32",
                "name": "v547",
                "type": "tuple"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T34",
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
        "internalType": "struct T26",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v690",
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
    "name": "_reach_m5",
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
        "internalType": "struct T26",
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
                "name": "v820",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
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
    "inputs": [],
    "name": "investAPI_claimReward",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "investAPI_makeInvest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "investAPI_redeemInvestment",
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
    "name": "views_checkGoalReachedV",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "views_getCtcBalanceV",
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
    "name": "views_getGoalV",
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
    "name": "views_isCampaignOnV",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620044fc380380620044fc83398101604081905262000026916200030f565b6000805543600355620000386200016e565b60408051338152835160208083019190915280850151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a180516000908190528151602090810182905282516040019190915281519082015152620000c13415600b62000144565b620000cb620001a5565b60208083015182523382820152838101805151604080850191909152815183015160608501529051810151608084015260016000819055439055516200011491839101620003a6565b604051602081830303815290604052600290805190602001906200013a929190620001e5565b5050505062000466565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101620001a062000274565b905290565b6040518060a00160405280620001ba62000274565b815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b828054620001f39062000429565b90600052602060002090601f01602090048101928262000217576000855562000262565b82601f106200023257805160ff191683800117855562000262565b8280016001018555821562000262579182015b828111156200026257825182559160200191906001019062000245565b5062000270929150620002c1565b5090565b60405180602001604052806001905b620002aa604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620002835790505090565b5b80821115620002705760008155600101620002c2565b604051606081016001600160401b03811182821017156200030957634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200032357600080fd5b604080519081016001600160401b03811182821017156200035457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200036e57600080fd5b62000378620002d8565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b815160e08201908260005b6001811015620003ed578251805183526020808201518185015260409182015115159184019190915290920191606090910190600101620003b1565b50505060208301516001600160a01b03811660608401525060408301516080830152606083015160a0830152608083015160c083015292915050565b600181811c908216806200043e57607f821691505b602082108114156200046057634e487b7160e01b600052602260045260246000fd5b50919050565b61408680620004766000396000f3fe6080604052600436106101175760003560e01c806384eea5151161009a578063ab53f2c611610061578063ab53f2c61461026a578063ad9fa3d81461028d578063bb12b2e3146102a0578063c7980037146102b5578063de736998146102c857005b806384eea515146102145780638809b7b6146102275780638b9fadc81461022f5780638f145be7146102425780639f6c06c31461025757005b80633ccb4082116100de5780633ccb4082146101be5780635471c5a8146101d157806355887919146101e45780637cb571f5146101f757806383230757146101ff57005b8063186d31bc146101205780631e93b0f11461014a5780632b58c77d146101695780633bc5b7bf1461017c5780633c425eca146101a957005b3661011e57005b005b34801561012c57600080fd5b506101356102db565b60405190151581526020015b60405180910390f35b34801561015657600080fd5b506003545b604051908152602001610141565b61011e6101773660046134e7565b6102ed565b34801561018857600080fd5b5061019c610197366004613518565b610326565b604051610141919061354b565b3480156101b557600080fd5b5061015b610352565b61011e6101cc3660046134e7565b61035e565b61011e6101df3660046134e7565b610393565b61011e6101f23660046134e7565b6103c8565b6101356103fd565b34801561020b57600080fd5b5060015461015b565b61015b610222366004613590565b61043d565b610135610488565b61011e61023d3660046134e7565b6104c5565b34801561024e57600080fd5b506101356104fa565b61011e6102653660046135a9565b610506565b34801561027657600080fd5b5061027f61053b565b6040516101419291906135e8565b61011e61029b3660046134e7565b6105d8565b3480156102ac57600080fd5b5061015b61060d565b61011e6102c33660046134e7565b610619565b61011e6102d63660046134e7565b61064e565b6000806102e781610683565b91505090565b604080516060810182526000808252602082018190529181019190915261032261031c368490038401846136ef565b8261098a565b5050565b604080516060810182526000808252602082018190529181019190915261034c82610b7d565b92915050565b6000806102e781610c4f565b604080516060810182526000808252602082018190529181019190915261032261038d368490038401846137cc565b82610e32565b60408051606081018252600080825260208201819052918101919091526103226103c2368490038401846137e8565b826110e8565b60408051606081018252600080825260208201819052918101919091526103226103f736849003840184613820565b826112f9565b60006104076130a9565b602081810151600090819052604080516060810182528281529283018290528201526104338282610e32565b6040015192915050565b60006104476130d8565b602081015151839052610473604080516060810182526000808252602082018190529181019190915290565b61047d82826112f9565b602001519392505050565b60006104926130a9565b602081810151600090819052604080516060810182528281529283018290528201526104be82826115a9565b5192915050565b60408051606081018252600080825260208201819052918101919091526103226104f4368490038401846137e8565b82611873565b6000806102e781611a68565b6040805160608101825260008082526020820181905291810191909152610322610535368490038401846138dd565b82611c34565b6000606060005460028080546105509061394c565b80601f016020809104026020016040519081016040528092919081815260200182805461057c9061394c565b80156105c95780601f1061059e576101008083540402835291602001916105c9565b820191906000526020600020905b8154815290600101906020018083116105ac57829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152610322610607368490038401846137cc565b826115a9565b6000806102e781611ef1565b6040805160608101825260008082526020820181905291810191909152610322610648368490038401846137e8565b826121f5565b604080516060810182526000808252602082018190529181019190915261032261067d368490038401846137e8565b826123e2565b60006001600054141561073a5760006002805461069f9061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546106cb9061394c565b80156107185780601f106106ed57610100808354040283529160200191610718565b820191906000526020600020905b8154815290600101906020018083116106fb57829003601f168201915b50505050508060200190518101906107309190613a15565b5060009392505050565b600960005414156107e5576000600280546107549061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546107809061394c565b80156107cd5780601f106107a2576101008083540402835291602001916107cd565b820191906000526020600020905b8154815290600101906020018083116107b057829003601f168201915b50505050508060200190518101906107309190613b2b565b600f60005414156107ff576000600280546107549061394c565b601060005414156108b4576000600280546108199061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546108459061394c565b80156108925780601f1061086757610100808354040283529160200191610892565b820191906000526020600020905b81548152906001019060200180831161087557829003601f168201915b50505050508060200190518101906108aa9190613b48565b5060019392505050565b6011600054141561095f576000600280546108ce9061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546108fa9061394c565b80156109475780601f1061091c57610100808354040283529160200191610947565b820191906000526020600020905b81548152906001019060200180831161092a57829003601f168201915b50505050508060200190518101906107309190613be9565b60126000541415610979576000600280546108ce9061394c565b6109856000600a6125d0565b919050565b61099a600160005414600d6125d0565b81516109b59015806109ae57508251600154145b600e6125d0565b6000808055600280546109c79061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546109f39061394c565b8015610a405780601f10610a1557610100808354040283529160200191610a40565b820191906000526020600020905b815481529060010190602001808311610a2357829003601f168201915b5050505050806020019051810190610a589190613a15565b604080513381528551602080830191909152860151516001600160a01b03168183015290519192507f2acda5aa38b4208a2a7687009c06bad50691a5b0d6c1cd519fe35d44984428b6919081900360600190a1610ab73415600c6125d0565b610abf613105565b60208281015182516001600160a01b03918216905260408085015184518401526060808601518551830152608080870151865183015285513391015287840151518551931660a090930192909252838301805160009081905290514390850152855182519384018352818452865151850151948401949094528551610b5894939192820190835b602002015160400151151590526125f6565b60208201805160400191909152516000606090910152610b778161266a565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610bc957610bc9613535565b1415610c40576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610c0a57610c0a613535565b6001811115610c1b57610c1b613535565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b600060016000541415610c6b5760006002805461069f9061394c565b60096000541415610d2157600060028054610c859061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb19061394c565b8015610cfe5780601f10610cd357610100808354040283529160200191610cfe565b820191906000526020600020905b815481529060010190602001808311610ce157829003601f168201915b5050505050806020019051810190610d169190613b2b565b608001519392505050565b600f6000541415610d3b57600060028054610c859061394c565b60106000541415610df257600060028054610d559061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054610d819061394c565b8015610dce5780601f10610da357610100808354040283529160200191610dce565b820191906000526020600020905b815481529060010190602001808311610db157829003601f168201915b5050505050806020019051810190610de69190613b48565b61010001519392505050565b60116000541415610e0c576000600280546108ce9061394c565b60126000541415610e26576000600280546108ce9061394c565b610985600060086125d0565b610e42600f60005414601b6125d0565b8151610e5d901580610e5657508251600154145b601c6125d0565b600080805560028054610e6f9061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9b9061394c565b8015610ee85780601f10610ebd57610100808354040283529160200191610ee8565b820191906000526020600020905b815481529060010190602001808311610ecb57829003601f168201915b5050505050806020019051810190610f009190613b2b565b9050610f186040518060200160405280600081525090565b610f2a8261010001514310601d6125d0565b7f849b84b294e785a61d632662c725690ca1d438a787e4a7d9b8444daff5ba54483385604051610f5b929190613ca9565b60405180910390a1610f6f341560196125d0565b6001610f7a33610b7d565b516001811115610f8c57610f8c613535565b14610f98576000610fa6565b610fa133610b7d565b604001515b80825260e0830151610fbb911115601a6125d0565b604051600181527fcfd34676db22b48884fbca29a8f0b1e399f1d8338e3c7bfd2a1a7896b6157a5d9060200160405180910390a1600160408085019190915281519051339180156108fc02916000818181858888f19350505050158015611026573d6000803e3d6000fd5b50336000908152600460205260408120805461ffff191681556001015561104b613125565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501518351921691015260808084015182519091015260a083015182516110a091906127c9565b60208281018051929092528151600191015280514360409091015260c084015190516060015260e0830151825190036020820151608001526110e181612818565b5050505050565b6110f860126000541460336125d0565b815161111390158061110c57508251600154145b60346125d0565b6000808055600280546111259061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546111519061394c565b801561119e5780601f106111735761010080835404028352916020019161119e565b820191906000526020600020905b81548152906001019060200180831161118157829003601f168201915b50505050508060200190518101906111b69190613be9565b90507f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f790076429833846040516111e9929190613cd3565b60405180910390a16111fd341560306125d0565b61121a611213338360a0015184602001516129e8565b60316125d0565b6080810151611235906001600160a01b0316331460326125d0565b61123d613105565b815181516001600160a01b03918216905260208084018051845183015260408086015185518201526060808701518651820152608080880151875190871691015260a0808801518751961695019490945282850180516001905251439084015260c0860180518251958601835281515151935190930185528051518401519385019390935291516112d8939192600092919082019083610b46565b6020820180516040019190915260e0830151905160600152610b778161266a565b61130960106000541460246125d0565b815161132490158061131d57508251600154145b60256125d0565b6000808055600280546113369061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546113629061394c565b80156113af5780601f10611384576101008083540402835291602001916113af565b820191906000526020600020905b81548152906001019060200180831161139257829003601f168201915b50505050508060200190518101906113c79190613b48565b90506113db816101200151431060266125d0565b60408051338152845160208083019190915285015151518183015290517f8ef10ecf82600a0e607d2b4732e42a9011d02a836d5c8900039202caf70fa8f29181900360600190a16020830151515161143690341460236125d0565b60208381015151516040519081527f9aa936c33c4c14184b8d53617dd04abe035984823530294c014ad9e3d40949c1910160405180910390a160208381015151518382015233600081815260049092526040909120805460ff191660019081179091556114de916114a690610b7d565b5160018111156114b8576114b8613535565b146114c45760006114d2565b6114cd33610b7d565b604001515b60208501515151612a00565b336000908152600460205260409020600101556114f9613163565b815181516001600160a01b0391821690526020808401518351820152604080850151845190910152606080850151845190910152608080850151845190841691015260a08085015184519316920191909152808201516001905260c08301519085015151516115689190612a00565b6020828101805182019290925281514360409091015260e08401518251606001526101008401519086015151519151910160809190910152610b7781612a4d565b6115b960096000541460116125d0565b81516115d49015806115cd57508251600154145b60126125d0565b6000808055600280546115e69061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546116129061394c565b801561165f5780601f106116345761010080835404028352916020019161165f565b820191906000526020600020905b81548152906001019060200180831161164257829003601f168201915b50505050508060200190518101906116779190613b2b565b905061168f6040518060200160405280600081525090565b6116a1826101000151431060136125d0565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c2136533856040516116d2929190613ca9565b60405180910390a16116e63415600f6125d0565b60016116f133610b7d565b51600181111561170357611703613535565b1461170f57600061171d565b61171833610b7d565b604001515b80825260c0830151515161173491111560106125d0565b604051600181527f66dd1dbde5bb53feba4eec0bdd1c4dd1ba6955df6355c5f0c53a0e6534d288359060200160405180910390a1600183526060820151815161177f91903390612cf6565b336000908152600460205260408120805461ffff19168155600101556117a3613183565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416910152606080860151845193169201919091526080808501518351909101528101516001905260a0830151825161180191906127c9565b6020828101805182019290925290514360409182015260c085018051825160608101845282515151875190038152825151850151948101949094529051611852939192600092919082019083610b46565b6020820180516060019190915260e08401519051608001526110e181612d0a565b61188360106000541460296125d0565b815161189e90158061189757508251600154145b602a6125d0565b6000808055600280546118b09061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546118dc9061394c565b80156119295780601f106118fe57610100808354040283529160200191611929565b820191906000526020600020905b81548152906001019060200180831161190c57829003601f168201915b50505050508060200190518101906119419190613b48565b9050611956816101200151431015602b6125d0565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503384604051611987929190613cd3565b60405180910390a161199b341560276125d0565b60808101516119cf906001600160a01b031633146119c55781516001600160a01b031633146119c8565b60015b60286125d0565b6119d7613163565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855182015260808087015186519086169082015260a0808801518751961695019490945282850180516000905260c087015181519094019390935282514392019190915260e0850151825190910152610100840151905190910152610b7781612a4d565b600060016000541415611a845760006002805461069f9061394c565b60096000541415611b2f57600060028054611a9e9061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054611aca9061394c565b8015611b175780601f10611aec57610100808354040283529160200191611b17565b820191906000526020600020905b815481529060010190602001808311611afa57829003601f168201915b50505050508060200190518101906108aa9190613b2b565b600f6000541415611b49576000600280546107549061394c565b60106000541415611bf457600060028054611b639061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054611b8f9061394c565b8015611bdc5780601f10611bb157610100808354040283529160200191611bdc565b820191906000526020600020905b815481529060010190602001808311611bbf57829003601f168201915b50505050508060200190518101906107309190613b48565b60116000541415611c0e576000600280546108ce9061394c565b60126000541415611c28576000600280546108ce9061394c565b610985600060076125d0565b611c44601160005414602e6125d0565b8151611c5f901580611c5857508251600154145b602f6125d0565b600080805560028054611c719061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054611c9d9061394c565b8015611cea5780601f10611cbf57610100808354040283529160200191611cea565b820191906000526020600020905b815481529060010190602001808311611ccd57829003601f168201915b5050505050806020019051810190611d029190613be9565b90507f2d7356dfd3ebf706c5af20c67cfd4dd1ded2c68aa63f12916c3957ec52e5b42e3384604051611d35929190613cfb565b60405180910390a1611d493415602c6125d0565b6080810151611d64906001600160a01b03163314602d6125d0565b602080840151810151604051611d7a9201613d7e565b60408051601f1981840301815290829052805160209182012085820151519092611da49201613d7e565b6040516020818303038152906040528051906020012060001c1415611e6357611dcb6131ba565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601519085015260808086015184169085015260a0808601519093169284019290925260c0808501519084015260e080850151908401526012600055436001559051611e3f91839101613de7565b604051602081830303815290604052600290805190602001906110e1929190613220565b611e6b613105565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551820152608080870151865190861691015260a0808701518651951694019390935281840180516000905280514393019290925260c085015182519091015260e0840151905190910152610b778161266a565b505050565b600060016000541415611fa957600060028054611f0d9061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054611f399061394c565b8015611f865780601f10611f5b57610100808354040283529160200191611f86565b820191906000526020600020905b815481529060010190602001808311611f6957829003601f168201915b5050505050806020019051810190611f9e9190613a15565b606001519392505050565b6009600054141561205457600060028054611fc39061394c565b80601f0160208091040260200160405190810160405280929190818152602001828054611fef9061394c565b801561203c5780601f106120115761010080835404028352916020019161203c565b820191906000526020600020905b81548152906001019060200180831161201f57829003601f168201915b505050505080602001905181019061047d9190613b2b565b600f600054141561206e57600060028054611fc39061394c565b60106000541415612124576000600280546120889061394c565b80601f01602080910402602001604051908101604052809291908181526020018280546120b49061394c565b80156121015780601f106120d657610100808354040283529160200191612101565b820191906000526020600020905b8154815290600101906020018083116120e457829003601f168201915b50505050508060200190518101906121199190613b48565b604001519392505050565b601160005414156121cf5760006002805461213e9061394c565b80601f016020809104026020016040519081016040528092919081815260200182805461216a9061394c565b80156121b75780601f1061218c576101008083540402835291602001916121b7565b820191906000526020600020905b81548152906001019060200180831161219a57829003601f168201915b50505050508060200190518101906121199190613be9565b601260005414156121e95760006002805461213e9061394c565b610985600060096125d0565b61220560096000541460166125d0565b815161222090158061221957508251600154145b60176125d0565b6000808055600280546122329061394c565b80601f016020809104026020016040519081016040528092919081815260200182805461225e9061394c565b80156122ab5780601f10612280576101008083540402835291602001916122ab565b820191906000526020600020905b81548152906001019060200180831161228e57829003601f168201915b50505050508060200190518101906122c39190613b2b565b90506122d881610100015143101560186125d0565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051612309929190613cd3565b60405180910390a161231d341560146125d0565b6040810151612351906001600160a01b031633146123475781516001600160a01b0316331461234a565b60015b60156125d0565b612359613183565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551941693810193909352608080860151855182015282850180516000905260a087015181519094019390935282514392019190915260c085015182519093019290925260e0840151905190910152610b7781612d0a565b6123f2600f6000541460206125d0565b815161240d90158061240657508251600154145b60216125d0565b60008080556002805461241f9061394c565b80601f016020809104026020016040519081016040528092919081815260200182805461244b9061394c565b80156124985780601f1061246d57610100808354040283529160200191612498565b820191906000526020600020905b81548152906001019060200180831161247b57829003601f168201915b50505050508060200190518101906124b09190613b2b565b90506124c581610100015143101560226125d0565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33846040516124f6929190613cd3565b60405180910390a161250a3415601e6125d0565b604081015161253e906001600160a01b031633146125345781516001600160a01b03163314612537565b60015b601f6125d0565b612546613125565b815181516001600160a01b03918216905260208084015183518201526040808501518451908416908201526060808601518551941693810193909352608080860151855182015260a08601518386018051919091528051600094019390935282514392019190915260c085015182519093019290925260e0840151905190910152610b7781612818565b816103225760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6125fe6132a4565b60005b600181101561264a5784816001811061261c5761261c613c93565b602002015182826001811061263357612633613c93565b60200201528061264281613e6e565b915050612601565b508181846001811061265e5761265e613c93565b60200201529392505050565b602081015151156127185761267d613163565b81515181516001600160a01b0391821690528251602090810151835182015283516040908101518451820152845160609081015185518201528551608090810151865190861690820152865160a0908101518751961695019490945282850180516001905280516000908501528387018051909401518151840152835190920151825182015291519091015190519091015261032281612a4d565b6127206131ba565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151818601528551608090810151851690860152855160a09081015190941693850193909352818501805182015160c0860152519092015160e084015260116000554360015590516127a291839101613de7565b60405160208183030381529060405260029080519060200190611eec929190613220565b50565b6000826127d68382613e89565b915081111561034c5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016125ed565b604080516020810190915260008152602082015151612838576000612842565b8160200151602001515b1561290f5761285c8260200151604001516207e900612a00565b81526128666132ef565b8251516001600160a01b039081168252835160209081015181840152845160409081015183168185015285516060908101519093168385015285516080908101518186015282870180515160a087015280519094015160c086015292519092015160e08401528351610100840152600f6000554360015590516128eb91839101613f2e565b60405160208183030381529060405260029080519060200190610b77929190613220565b602082015160800151156129b457815160409081015160208401516080015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612962573d6000803e3d6000fd5b5060208201516060015151511561299e57815160608082015160409092015160208501519091015161299e92919060005b602002015151612cf6565b600080805560018190556103229060029061335c565b60208201516060015151511561299e57815160608082015160409092015160208501519091015161299e9291906000612993565b60006129f683853085612e7c565b90505b9392505050565b600082612a0d8382613f3d565b915081101561034c5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016125ed565b604080518082019091526000808252602082015281600001516020015182602001516020015110612a7f576000612a86565b6020820151515b15612b4557612aa5826020015160400151836000015160600151612a00565b8152612aaf613396565b8251516001600160a01b0390811682528351602090810151818401528451604090810151818501528551606090810151818601528651608090810151851681870152875160a09081015190951694860194909452828701805184015160c087015280519091015160e08601525190920151610100840152835161012084015260106000554360015590516128eb91839101613f55565b8160000151602001518260200151608001511415612c5357815160200151612b6e906002612f56565b602082018190528251516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612bad573d6000803e3d6000fd5b50612bb6613183565b82515181516001600160a01b039182169052835160409081015183516020908101919091528551608090810151855190851690840152865160a0015185519416606094850152818701805182015186518301528286018051600190528151860151515181518501528151850151815190950194909452518401518351909401939093528551810151908501519151919003910152611eec81612d0a565b612c5b613125565b82515181516001600160a01b039182169052835160409081015183516020908101919091528551608090810151855190851690840152865160a001518551941660609485015281870180518201518651830152805183015183870180519190915280516001940193909352805184015183519094019390935282518401518251909401939093529051820151905190910152611eec81612818565b612d01838383612f9d565b611eec57600080fd5b6040805180820190915260008082526020820152600082602001516020015111612d35576000612d3c565b6020820151515b15612de757612d568260200151604001516207e900612a00565b8152612d606132ef565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015181860152828701805184015160a087015280519094015160c086015292519092015160e0840152835161010084015260096000554360015590516128eb91839101613f2e565b6000602082810182905283515190840151608001516040516001600160a01b03909216926108fc8215029290818181858888f19350505050158015612e30573d6000803e3d6000fd5b506020810151156129b4578151604090810151602083015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612962573d6000803e3d6000fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612ee391613ff5565b60006040518083038185875af1925050503d8060008114612f20576040519150601f19603f3d011682016040523d82523d6000602084013e612f25565b606091505b5091509150612f368282600161306e565b5080806020019051810190612f4b9190614011565b979650505050505050565b600081612f935760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016125ed565b6129f9828461402e565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612ffc91613ff5565b60006040518083038185875af1925050503d8060008114613039576040519150601f19603f3d011682016040523d82523d6000602084013e61303e565b606091505b509150915061304f8282600261306e565b50808060200190518101906130649190614011565b9695505050505050565b6060831561307d5750816129f9565b82511561308d5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016125ed565b6040518060400160405280600081526020016130d360405180602001604052806000151581525090565b905290565b6040518060400160405280600081526020016130d360408051808201909152600060208201908152815290565b60405180604001604052806131186133f6565b81526020016130d3613447565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908152602081016130d3613466565b60405180604001604052806131766133f6565b81526020016130d3613490565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190613176565b60405180610100016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016132136132a4565b8152602001600081525090565b82805461322c9061394c565b90600052602060002090601f01602090048101928261324e5760008555613294565b82601f1061326757805160ff1916838001178555613294565b82800160010185558215613294579182015b82811115613294578251825591602001919060010190613279565b506132a09291506134ba565b5090565b60405180602001604052806001905b6132d9604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816132b35790505090565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016133486132a4565b815260200160008152602001600081525090565b5080546133689061394c565b6000825580601f10613378575050565b601f0160209004906000526020600020908101906127c691906134ba565b60405180610140016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016133486132a4565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b60408051608081018252600080825260208201529081016132136132a4565b6040518060a0016040528060008152602001600015158152602001600081526020016132136132a4565b6040518060a0016040528060001515815260200160008152602001600081526020016132136132a4565b5b808211156132a057600081556001016134bb565b6000604082840312156134e157600080fd5b50919050565b6000604082840312156134f957600080fd5b6129f983836134cf565b6001600160a01b03811681146127c657600080fd5b60006020828403121561352a57600080fd5b81356129f981613503565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061357057634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b6000602082840312156135a257600080fd5b5035919050565b600061012082840312156134e157600080fd5b60005b838110156135d75781810151838201526020016135bf565b83811115610b775750506000910152565b828152604060208201526000825180604084015261360d8160608501602087016135bc565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561365b5761365b613622565b60405290565b6040516020810167ffffffffffffffff8111828210171561365b5761365b613622565b6040516060810167ffffffffffffffff8111828210171561365b5761365b613622565b604051610120810167ffffffffffffffff8111828210171561365b5761365b613622565b604051610140810167ffffffffffffffff8111828210171561365b5761365b613622565b6000818303604081121561370257600080fd5b61370a613638565b833581526020601f198301121561372057600080fd5b613728613661565b9150602084013561373881613503565b825260208101919091529392505050565b80151581146127c657600080fd5b6000818303604081121561376a57600080fd5b613772613638565b8335815291506020601f198201121561378a57600080fd5b506040516020810181811067ffffffffffffffff821117156137ae576137ae613622565b60405260208301356137bf81613749565b8152602082015292915050565b6000604082840312156137de57600080fd5b6129f98383613757565b6000604082840312156137fa57600080fd5b613802613638565b82358152602083013561381481613749565b60208201529392505050565b6000818303604081121561383357600080fd5b61383b613638565b833581526020601f198301121561385157600080fd5b613859613661565b9150613863613661565b602094850135815282529283015250919050565b60006080828403121561388957600080fd5b6040516080810181811067ffffffffffffffff821117156138ac576138ac613622565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60008183036101208112156138f157600080fd5b6138f9613638565b83358152610100601f198301121561391057600080fd5b613918613638565b91506139278560208601613877565b82526139368560a08601613877565b6020830152816020820152809250505092915050565b600181811c9082168061396057607f821691505b602082108114156134e157634e487b7160e01b600052602260045260246000fd5b600082601f83011261399257600080fd5b61399a613661565b806060808501868111156139ad57600080fd5b855b818110156139fe578281890312156139c75760008081fd5b6139cf613684565b81518152602080830151818301526040808401516139ec81613749565b908301529086529094019382016139af565b50919695505050505050565b805161098581613503565b600060e08284031215613a2757600080fd5b60405160a0810181811067ffffffffffffffff82111715613a4a57613a4a613622565b604052613a578484613981565b81526060830151613a6781613503565b6020820152608083810151604083015260a0840151606083015260c0909301519281019290925250919050565b60006101608284031215613aa757600080fd5b613aaf6136a7565b9050613aba82613a0a565b815260208201516020820152613ad260408301613a0a565b6040820152613ae360608301613a0a565b60608201526080820151608082015260a082015160a0820152613b098360c08401613981565b60c082015261012082015160e082015261014082015161010082015292915050565b60006101608284031215613b3e57600080fd5b6129f98383613a94565b60006101808284031215613b5b57600080fd5b613b636136cb565b613b6c83613a0a565b8152602083015160208201526040830151604082015260608301516060820152613b9860808401613a0a565b6080820152613ba960a08401613a0a565b60a082015260c083015160c0820152613bc58460e08501613981565b60e08201526101408301516101008201526101609092015161012083015250919050565b60006101408284031215613bfc57600080fd5b604051610100810181811067ffffffffffffffff82111715613c2057613c20613622565b604052613c2c83613a0a565b8152602083015160208201526040830151604082015260608301516060820152613c5860808401613a0a565b6080820152613c6960a08401613a0a565b60a0820152613c7b8460c08501613981565b60c0820152610120929092015160e083015250919050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0383168152606081016129f9602083018480518252602090810151511515910152565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b60006101408201905060018060a01b0384168252825160208301526020830151613d4a604084018251805182526020810151602083015260408101516040830152606081015160608301525050565b602090810151805160c08501529081015160e084015260408101516101008401526060810151610120840152509392505050565b815181526020808301519082015260408083015190820152606080830151908201526080810161034c565b8060005b6001811015610b77578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613dad565b60006101408201905060018060a01b038084511683526020840151602084015260408401516040840152606084015160608401528060808501511660808401528060a08501511660a08401525060c0830151613e4660c0840182613da9565b5060e083015161012083015292915050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415613e8257613e82613e58565b5060010190565b600082821015613e9b57613e9b613e58565b500390565b80516001600160a01b031682526020808201519083015260408082015190613ed2908401826001600160a01b03169052565b506060810151613eed60608401826001600160a01b03169052565b506080810151608083015260a081015160a083015260c0810151613f1460c0840182613da9565b5060e0810151610120830152610100015161014090910152565b610160810161034c8284613ea0565b60008219821115613f5057613f50613e58565b500190565b81516001600160a01b0316815261018081016020830151602083015260408301516040830152606083015160608301526080830151613f9f60808401826001600160a01b03169052565b5060a0830151613fba60a08401826001600160a01b03169052565b5060c083015160c083015260e0830151613fd760e0840182613da9565b50610100830151610140830152610120909201516101609091015290565b600082516140078184602087016135bc565b9190910192915050565b60006020828403121561402357600080fd5b81516129f981613749565b60008261404b57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122015b63088babfb97428994a6a12c93660923205804840f083a661b16d75aac35364736f6c634300080c0033`,
  BytecodeLen: 17660,
  Which: `oD`,
  version: 8,
  views: {
    views: {
      checkGoalReachedV: `views_checkGoalReachedV`,
      getCtcBalanceV: `views_getCtcBalanceV`,
      getGoalV: `views_getGoalV`,
      isCampaignOnV: `views_isCampaignOnV`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:80:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:180:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:254:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:220:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:133:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:111:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:97:15:after expr stmt semicolon',
    fs: ['at ./index.rsh:117:32:application call to "passwordChecked" (defined at: ./index.rsh:94:33:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Company": Company,
  "Creator": Creator,
  "investAPI_claimReward": investAPI_claimReward,
  "investAPI_makeInvest": investAPI_makeInvest,
  "investAPI_redeemInvestment": investAPI_redeemInvestment
  };
export const _APIs = {
  investAPI: {
    claimReward: investAPI_claimReward,
    makeInvest: investAPI_makeInvest,
    redeemInvestment: investAPI_redeemInvestment
    }
  };
