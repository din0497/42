/* 
Sonlar ko'paytmasi
Sizga sonlar ro'yxati berilgan. Har bir element uchun o'zidan boshqa barcha sonlar ko'paytmasini toping.

Algoritmingiz O(n) vaqtda ishlashi kerak va bo'luv operatoridan (/) foydalanishingiz mumkin emas.

Misol 1:
Kiritish: [1,2,3,4]
Natija: [24,12,8,6]
Misol 2:
Kiritish: [-1,1,0,-3,3]
Natija: [0,0,9,0,0]
*/







// 1
const productExceptSelf = (nums) => {
  let multiply = nums.reduce((a, b) => a * b, 1);
  const result = [];

  for (const num of nums) {
    result.push(multiply / num);
  }
  return result;
};

// 2

const productExceptSelf = (nums) => {
    const prefix = [1];
    const suffix = [1];
    result = [];
  
    let product = 1;
  
    for (const num of nums) {
      product *= num;
      prefix.push(product);
    }
    product = 1;
  
    for (let i = nums.length - 1; i >= 0; i--) {
      product *= nums[i];
      suffix.unshift(product);
    }
  
    for (i = 0; i < nums.length; i++) {
      result.push(prefix[i] * suffix[i + 1]);
    }
    return result;
  };
  
