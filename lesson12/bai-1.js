let myName = '    Ma Thanh Thuỷ      ';

// Yeu cau 1 - Xoa khoang trang dua va cuoi
const delSpace = myName.trim();
const upperName = delSpace.toUpperCase();

console.log('after trim and UpperCase:',upperName);