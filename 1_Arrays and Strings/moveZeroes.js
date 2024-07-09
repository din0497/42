/* 
Berilgan sonlar ro'yxatidagi nollarni ro'yxat orqasiga o'tkazing, lekin boshqa elementlar ketma-ketligi buzilmasin.

Imkon qadar kamroq amal bajaring.

Qo'shimcha xotiradan foydalanmang - amallarni ro'yxat ustida bajaring.

Misol 1:
Kiritish: nums = [0,1,0,3,12]
Natija: [1, 3, 12, 0, 0]
Misol 1:
Kiritish: nums = [0]
Natija: [0]
*/


const moveZeroes = (nums) => {
    count = 0;

    for(i=0; i<nums.length; i++){
        if(nums[i] === 0){
            count++
            continue
        }
        console.log(nums);
        [nums[i], nums[i-count]]=[nums[i-count], nums[i]]
    }
    return nums
}

console.log(moveZeroes([0,1,0,3,12]));
                       