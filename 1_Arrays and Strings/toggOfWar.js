/* 
Arqon tortish
Har bir bolada qancha kuch borligini ko'rsatuvchi ro'yxat berilgan. Har bir bola uchun agar u hakam bo'lib, ro'yxatda undan oldingilar va undan keyingilar arqon tortish o'ynasa, qaysi tomon yutishini aniqlang.

Kuchlari yig'inidisi ko'p bo'lgan jamoa g'olib bo'ladi.

Holat	Natija
Hakamdan oldingilar g'alaba qozonsa	-1
Hakamdan keyingilar g'alaba qozonsa	1
Kuchlari teng bo'lsa	0
Misol 1:
Kiritma: [1, 2, 3, 4]
Natija: [1, 1, 1, -1]
Misol 2:
Kiritma: [10, 4, 8, 3]
Natija: [1, 1, -1, -1] */




const leftRightDifference = (nums) => {
    let [left, right] = [0, nums.reduce((a, b) => a + b, 0)];
    let result = [];
    for (const num of nums) {
      right -= num;
      if (right - left > 0) {
        result.push(1);
      } else if (right - left < 0) {
        result.push(-1);
      } else {
        result.push(0);
      }
      left += num;
    }
    return result;
  };
  
  console.log(leftRightDifference([1,2,3,4]));