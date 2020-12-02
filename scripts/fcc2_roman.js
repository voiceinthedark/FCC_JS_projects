/**
 * Roman Numeral Converter
 */

 function convertToRoman(num) {
     const romanToNum = {
         1: 'I',
         2: 'II',
         3: 'III',
         4: 'IV',
         5: 'V',
         6: 'VI',
         7: 'VII',
         8: 'VIII',
         9: 'IX',
         10: 'X',
         20: 'XX',
         30: 'XXX',
         40: 'XL',
         50: 'L',
         60: 'LX',
         70: 'LXX',
         80: 'LXXX',
         90: 'XC',
         100: 'C',
         200: 'CC',
         300: 'CCC',
         400: 'CD',
         500: 'D',
         600: 'DC',
         700: 'DCC',
         800: 'DCCC',
         900: 'CM',
         1000: 'M'
     };
   let num_list = String(num).split("").reverse();
   let romanStr = '';
   for(let i=0; i < num_list.length; i++){
       if (i < 3 && num_list[i] !== '0') /*Number less than 1000*/ {
         let n = Number.parseInt(num_list[i] + "0".repeat(i));
        romanStr += romanToNum[n].split('').reverse().join('');
       }else /*Number is bigger or equal to 1000*/{
           romanStr += 'M'.repeat(parseInt(num_list[i]));
       }
   }
   return romanStr.split("").reverse().join('');
 }

 console.log(convertToRoman(36));
 console.log(convertToRoman(336));
 console.log(convertToRoman(891));
 console.log(convertToRoman(649));
 console.log(convertToRoman(1004));