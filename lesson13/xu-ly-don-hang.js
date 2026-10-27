const price = 199.9876;
const quantity = 255;
const discount = 0.123456;
const total = 1238.8257;
const code = "4095";

// yeu cau 1:
console.log("Làm tròn price: ", price.toFixed(2));

// yeu cau 2:
console.log("Chuyển quantity sang dạng nhị phân: ", quantity.toString(2));

// yau cau 3:
console.log("Hiển thị discount: ", discount.toPrecision(4));

// yeu cau 4:
const integerCode = Number(code);
console.log("Code có phải số nguyên: ", Number.isInteger(integerCode));

const total2 = total.toFixed(3);
console.log("Total có phải hữu hạn không: ", isFinite(total2));
