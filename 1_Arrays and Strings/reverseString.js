/* 
Teskari so'z
Berilgan belgilar ro'yxatini teskari tartibga keltiring.

Xotira murakkabligi O(1) bo'lsin.

Misol 1:
Kiritish: s = ["h","e","l","l","o"]
Natija: ["o","l","l","e","h"]
Misol 2:
Kiritish: s = ["H","a","n","n","a","h"]
Natija: ["h","a","n","n","a","H"]
*/


function reverseString(s) {
    let [i, j] = [0, s.length - 1];
  
    while (i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++
      j--
    }
    return s;
  }
  
  console.log(reverseString(["h","e","l","l","o"]));