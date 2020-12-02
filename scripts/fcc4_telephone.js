/**
 * Telephone Number Validator
 */

 function telephoneCheck(str) {
   let regdigit = /\d/g
   let regPermitted = /[\d()-\s]/g
   let matchingParentheses = function(n=1){
       if (n == 1) {
         return (
           (str.match(/\(/g) ?? []).length === (str.match(/\)/g) ?? []).length
         );
       } else {
           return (str.match(/\(/g) ?? []).length == 1 && ((str.match(/\)/g) ?? []).length == 1) && str.startsWith('(') && str.endsWith(')');
       }
   };

   let hasTenDigits = str.match(regdigit).length === 10;
   let hasElevenDigits = str.match(regdigit).length === 11;
   let startsWithOne = str.startsWith('1');
   let hasPermittedCharsOnly = str.length === str.match(regPermitted).length;
   let hasCorrectParentheses = matchingParentheses();

   if (!hasTenDigits && !hasElevenDigits) {
     return false;
   } else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
     return false;
   } else if (hasElevenDigits && !startsWithOne) {
     return false;
   } else if(matchingParentheses(2)){
       return false;
   }
    else {
       let regex = /^[1]?[\s\(-]*\d{3}[\)\(\s-]*\d{3}[\)\(\s-]*\d{4}[\)\s]*$/g;
       return regex.test(str);
   }
 }

//  console.log(telephoneCheck("555-555-5555"));
//  console.log(telephoneCheck("1(555)555-5555"));
//  console.log(telephoneCheck("555-5555"));
 console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("123**&!!asdf#"));  
console.log(telephoneCheck("1 555-555-5555")); 