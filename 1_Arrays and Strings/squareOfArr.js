/* 
Ro'yxatni aylantiring
Berilgan ro'yxatni k qadam o'ng tomonga aylantiring.

Ro'yxatni 1 qadam o'ng tomonga aylantirish, o'ng tomondagi ohirgi elementni, chap tomonning boshiga olib qo'yish degani.

Amalni berilgan ro'yhat ustida bajaring - yangi ro'yxat yaratmang.

Misol 1:
Kiritish: nums = [1,2,3,4,5,6,7], k = 3
Natija: [5,6,7,1,2,3,4]
Tushuntirish:
1-qadam: [7,1,2,3,4,5,6]
2-qadam: [6,7,1,2,3,4,5]
3-qadam: [5,6,7,1,2,3,4]
Misol 2:
Kiritish: nums = [-1,-100,3,99], k = 2
Natija: [3,99,-1,-100]
Tushuntirish: 
1-qadam: [99,-1,-100,3]
2-qadam: [3,99,-1,-100]
*/

const sortedSquare = (nums) => {
  let [i, j] = [0, nums.length - 1];
  const result = [];

  while (i <= j) {
    if (Math.abs(nums[i]) < Math.abs(nums[j])) {
      result.push(nums[j] ** 2);
      j--;
    } else {
      result.push(nums[i] ** 2);
      i++;
    }
  }
  return result.reverse();
};

console.log(sortedSquare([-4, -1, 0, 3, 10]));
