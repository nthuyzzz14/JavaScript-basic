const values = [9007199254740991, -9007199254740991, "123", 12.5, NaN, "12abc"];

// yeu cau 1:
const safeIntegerA = Number.isSafeInteger(9007199254740991);
console.log("(9007199254740991) có phải số nguyên an toàn? ", safeIntegerA);
console.log(
  "(-9007199254740991) có phải số nguyên an toàn? ",
  Number.isSafeInteger(-9007199254740991),
);

//yeu cau 2:
console.log("Kiểm tra ('123') có phải số nguyên? ", Number.isInteger("123"));
console.log("Kiểm tra (12.5) có phải số nguyên? ", Number.isInteger(12.5));
