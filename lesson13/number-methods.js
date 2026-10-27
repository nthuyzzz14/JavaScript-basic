// toFixed() - là phương pháp làm tròn số thập phân được chỉ định, và kết quả trả ra là kiểu string làm tròn như trong toán học.
const num1 = 21.2356798;
const fixedNum1 = num1.toFixed(2); // giữ lại 2 số sau dấu chấm
console.log(`Kết quả: ${fixedNum1}`); // kq: 21.24

//toPrecision() - làm tròn số lượng chữ số chỉ định (bao gồm cả số nguyên và số thập phân)
const num2 = 1238.8257;
const precisionNum2 = num2.toPrecision(6);
console.log(`Kết quả: ${precisionNum2}`); // ket qua sua 1238.83
console.log("kieu du lieu:" + typeof precisionNum2);

//toString(radix) - chuyển đổi số thành chuỗi số với cơ số radix được chỉ định trước
const num3 = 255;
const binaryNum3 = num3.toString(2); // nhị phân
const hexNum3 = num3.toString(16); // hệ thập lục phân
console.log(`Kết quả nhị phân: ${binaryNum3}`);
console.log(`Kết quả thập lục phân: ${hexNum3}`);
console.log(typeof binaryNum3);

// isFinite() - kiểm tra có phải là một số hữu hạn hay không (return: boolean)
console.log("isFinite 123: ", isFinite(123));
console.log('co phai ("123") là số hữu hạn: ', isFinite("123")); // tự động convert string sang number  và kiểm tra
console.log("Duong vô cực có phải số hữu hạn: ", isFinite(Infinity));
console.log("Âm vô cực có phải số hữu hạn: ", isFinite(-Infinity));

//Number.isInteger() - kiểm tra 1 số có phải là số nguyên (returnL boolean)
console.log("Kiểm tra (123) có phải là số nguyên: ", Number.isInteger(123));
console.log('Kiểm tra ("123") có phải là số nguyên: ', Number.isInteger("123")); // không tự convert nên làm string và kiểm tra là sai

//Number.isSafeInteger() - kiểm tra 1 số có phải là số nguyên AN TOÀN hay khônh
// Số nguyên AN TOÀN: (-2^53 - 1) và (2^53 - 1)
console.log(
  "kiểm tra (123) có phải là safeInteger: ",
  Number.isSafeInteger(123),
);
console.log(
  "kiểm tra ('345') có phải là safeInteger: ",
  Number.isSafeInteger("345"),
); // không tự convert
console.log(
  "kiểm tra (9007199254740991) có phải safeInteger: ",
  Number.isSafeInteger(9007199254740991),
); // true vì nằm trong phạm vi 2^53-1
console.log(
  "kiểm tra (9007199254740992) có phải là safeInteger: ",
  Number.isSafeInteger(9007199254740992),
); // false vượt quá phạm vi 2^53-1

//Number.NaN - "Not-a-Number" là giá trị đại diện các giá trị không thể thực hiêjn được
console.log("kiểm tra ('123') có phải NaN: ", parseInt("123")); // tự động convert
console.log("kiểm tra (abx) có phải NaN: ", parseInt("abx")); // là char -> NaN
console.log("kiểm tra (abx123) có phải NaN: ", parseFloat("abx123"));

//isNaN() - kiểm tra giá tị có phải NaN hay không (return: boolean)
console.log("kiểm tra (NaN): ", isNaN(NaN));
console.log("Kiểm tra (123): ", isNaN(123)); // là integer
console.log("Kiểm tra ('abc'): ", isNaN("abc")); // là NaN
console.log("kiểm tra ('123'): ", isNaN("123")); // có tự động convert string -> number
