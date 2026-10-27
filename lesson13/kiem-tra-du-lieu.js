const data = [123, "456", Infinity, NaN, 3.14, 9007199254740992, "abc", -0];

// yeu cau 1:
// duyệt từng phần tử trong mảng và trả ra 1 mảng với những phần tử được giữ lại
// dùng filter()
const filterNumber = data.filter(function (item) {
  return isFinite(item);
});
console.log("1. Mạng các số hữu hạn: ", filterNumber);

// yeu cau 2:
// duyệt qua từng phần tử trong mảng
// và liệt kê kết quả bằng filter() thành 1 mảng mới
const filterInteger = data.filter(function (item) {
  return Number.isInteger(item);
});
console.log("2. Mảng các phần tử số nguyên: ", filterInteger);

// yeu cau 3:
// 9007199254740992 co phai so nguyen an toan khong
console.log(
  "3. (9007199254740992) có phải safeInteger ? ",
  Number.isSafeInteger(9007199254740992),
);

// yeu cau 4:
// duyệt tất cả phần tử trong mảng
// kiểm tra điều kiện. tạo 1 mảng mới lưu đáp án
// dung filter()
const filterNaN = data.filter((item) => {
  return isNaN(item);
});
console.log("4. Mảng các phần tử NaN: ", filterNaN);

//yeu cau 5:
//chuyen gia tri ve dang nhi phan
const num = 255;
console.log("5. Chuyển (255) về dạng nhị phân: ", num.toString(2));
