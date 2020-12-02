/**
 * Caesars Cipher
 * Using Rot13
 */

 function rot13(str) {
     const alphabetList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
     let ciphered = '';
     let strList = str.split('');
     for(let i =0; i < strList.length; i++){
         str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 ?  ciphered += alphabetList[(alphabetList.indexOf(strList[i]) + 13) % alphabetList.length] : ciphered += strList[i];         
     }
   return ciphered;
 }

 console.log(rot13("SERR PBQR PNZC"));
 console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));