//Dưới đây là những method xử lý array quan trọng

let nums = [1,2,3,4,5, 6];
console.log('Length of array = ', nums.length);

console.log('-----------------')

// Push() - thêm phần từ vào cuối phần tử mảng
nums.push(10);
console.log('after push:', nums);
//Ket qua [ 1, 2, 3, 4, 5, 10 ]

// Pop() - Xoa phan tu cuoi cuoi mang
nums.pop();
console.log('after pop:', nums)
// Ket qua [ 1, 2, 3, 4, 5 ]

// Shift()  - xoa phan tu dau tien cua mang
nums.shift();
console.log('After shift:', nums);
// Ket qua [ 2, 3, 4, 5 ]

// Unshift - them phan tu vao dau cua mang
nums.unshift(0)
console.log('After unshift:', nums)
// Ket qua [ 0, 2, 3, 4, 5 ]


// forEach - Lặp qua từng phần tử của mảng
nums.forEach((num, index) => {
  console.log(`Vi tri ${index} - value ${num}`)
})

// Map() - tạo ra một mảng mới với các phần tử đã được biến đổi bên trong map() và không ảnh hưởng tới mảng ban đầu
let squareNums = nums.map((num) => {
  return num * num;
}) 
console.log(`Square of number: ${squareNums}`);

// Filter() - Tạo ra một mảng mới với các phần tử thoả mãn điều kiện và không ảnh hưởng tới mảng ban đầu
let evenNums = nums.filter((num) => {
  //nếu thoả mãn đièu kiện sẽ trả về đó là Filter()
  return num % 2 === 0;
});
console.log(`Nhung so chan trong mang: ${evenNums}`);

// find() - tìm phần tử đầu tiên thoả mãn điều kiện và sẽ dừng
let foundNums = nums.find((num) => {
  return num > 4;
});
console.log(`Phan tu thoa man dieu kien num > 4: `, foundNums);

// reduce - tính toán giá trị duy nhất của mảng
let sum = nums.reduce((total, num) => {
  return total + num;
}, 0);
console.log('Sum array: ', sum);

// some() - Kiểm tra mảng có có phần tử thoả mãn điều kiện không và trả về Boolean
let hasEvenNums = nums.some((num) => {
  console.log('Kiem tra phuong thuc some (): ',nums);
  return num % 2 === 0;
});
console.log('Trong mang co num % 2 === 0 không ? ', hasEvenNums);