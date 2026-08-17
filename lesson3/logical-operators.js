// Logical operators

let x = 10;
let y = 15;

//AND
console.log(x < 10 && y <= 15) // x nhỏ hơn 10 và y nhỏ hơn hoặc bằng 15: false (yêu cầu cả 2 vế phải đúng điều kiện)

//OR
console.log(x < 10 || y <= 15) // x nhỏ hơn 10 hoặc y nhỏ hơn hoặc bằng 15: true (điều kiện chỉ cần đúng 1 vế)

//NOT
console.log(!(x === y)) //phủ định x bằng y cả giá trị và kiểu dữ liệu: true (vì phú định cái sai )