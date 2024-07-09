/* 
Eng ko'p suvli hovuz
Sizga orasi 1 metr qilib joylashtirilgan devor balandliklari berilgan. Eng ko'p suv sig'dira oladigan ikkita devor qancha suv sig'dira oladi?

Misol 1:


Kiritma: [1,8,6,2,5,4,8,3,7]
Natija: 49
Tushuntirish: 7 * 7 = 49
Misol 2:
Kiritma: [1,1]
Natija: 1
*/

const maxArea = (nums) => {
  let [i, j] = [0, nums.length - 1];
  let maxAre = 0;

  while (i < j) {
    area = (j - i) * Math.min(nums[i], nums[j]);
    maxAre = Math.max(maxAre, area);

    if (nums[i] < nums[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxAre;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
