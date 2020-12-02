/**
 * Palindrome Checker
 */

 function palindrome(str) {     
   str = str.replace(/[\W_]+/g, '').toLowerCase();   
   return str == str.split('').reverse().join('');
 }

 console.log(palindrome("eye"));
 console.log(palindrome("2_A3*3#A2"));