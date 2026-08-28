// Array
//là kiểu dữ liệu dùng để lưu trữ các giá trị
//Các giá trị trong mảng có thể là mất kỳ kiểu dữ liệu nào
//Trong Array có thể chứa các array khác
// index bat dau tu 0

let numbers = [ 1, 2, 3, 4, 5];

//Truy cap phan tu cuoi mang index = array.length - 1

console.log('DO dai cua mang = ', numbers.length - 1)

//Lấy độ dài của mảng = 5 trừ đi 3 là 4 bà dung [4] đẻ in ra giá trị đại index, vì [] dùng để in ra giá trị tại vị trí
console.log('Phan tu cuoi cua mang = ',numbers[5-1])
for(let i = 0 ; i <= numbers.length; i++){
  console.log(numbers[i])
}

console.log('---------------------')

//Mảng có thể chứa mọi loại kiểu dữ liệu khác nhau
let mixedArray = [1, 'thuy', false, undefined, Symbol, mathuy={ name: 'mathanhthuy'}, [1,2,3]]

for (let i = 0; i <= mixedArray.length; i++){
  console.log('Mang ket hop: ', mixedArray[i])
}