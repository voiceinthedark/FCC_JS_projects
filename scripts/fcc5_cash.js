/**
 * Cash Register
 */

 function checkCashRegister(price, cash, cid) {
   const currencyVal = {
     'PENNY': 0.01,
     'NICKEL': 0.05,
     'DIME': 0.1,
     'QUARTER': 0.25,
     'ONE': 1,
     'FIVE': 5,
     'TEN': 10,
     'TWENTY': 20,
     'ONE HUNDRED': 100
   };
   let totalInDrawer = cid.reduce((acc, cur) => acc + cur[1], 0.0);
   const change = cash - price;
   // Open case
   if(totalInDrawer > change){
     return calculateFor('OPEN');
     // Closed case
   }else if(totalInDrawer == change){
     return calculateFor('CLOSED')
    // Insufficient funds
   } else {
     return {
       status: "INSUFFICIENT_FUNDS",
       change: [],
     };
   }


   function calculateFor(status) {
     let sumFromDrawer = change;
     let sumArr = [];
     for (let i = cid.length - 1; i >= 0; i--) {
       if (currencyVal[cid[i][0]] <= sumFromDrawer || cid[i][1] <= sumFromDrawer) {
         let pull = 0;
         while (pull < sumFromDrawer &&
           pull < cid[i][1] &&
           (pull + currencyVal[cid[i][0]]) <= sumFromDrawer) {
           pull += currencyVal[cid[i][0]];
           pull = Number(Number(pull).toFixed(2));
         }
         sumFromDrawer -= pull;
         sumFromDrawer = Number(sumFromDrawer).toFixed(2);
         sumArr.push([cid[i][0], pull]);
         //  console.log(pull);
         pull = 0;
       }
     }
     if (sumFromDrawer === '0.00') {
       if(status === 'CLOSED'){
         sumArr = sumArr.reverse();
       }
       return {
         status: status,
         change: sumArr,
       };
     }
     return {
       status: "INSUFFICIENT_FUNDS",
       change: [],
     };
   }
 }

 console.log(checkCashRegister(19.5, 20, [
   ["PENNY", 1.01],
   ["NICKEL", 2.05],
   ["DIME", 3.1],
   ["QUARTER", 4.25],
   ["ONE", 90],
   ["FIVE", 55],
   ["TEN", 20],
   ["TWENTY", 60],
   ["ONE HUNDRED", 100],
 ]));

 console.log(
   checkCashRegister(3.26, 100, [
     ["PENNY", 1.01],
     ["NICKEL", 2.05],
     ["DIME", 3.1],
     ["QUARTER", 4.25],
     ["ONE", 90],
     ["FIVE", 55],
     ["TEN", 20],
     ["TWENTY", 60],
     ["ONE HUNDRED", 100],
   ])
 );

 console.log(
   checkCashRegister(19.5, 20, [
     ["PENNY", 0.5],
     ["NICKEL", 0],
     ["DIME", 0],
     ["QUARTER", 0],
     ["ONE", 0],
     ["FIVE", 0],
     ["TEN", 0],
     ["TWENTY", 0],
     ["ONE HUNDRED", 0],
   ])
 );
 console.log(
   checkCashRegister(19.5, 20, [
     ["PENNY", 0.01],
     ["NICKEL", 0],
     ["DIME", 0],
     ["QUARTER", 0],
     ["ONE", 1],
     ["FIVE", 0],
     ["TEN", 0],
     ["TWENTY", 0],
     ["ONE HUNDRED", 0],
   ])
 );