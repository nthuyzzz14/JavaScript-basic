const student = '    MA THANH THUỶ - KỸ THUẬT PHẦN MỀM - ICTU - JavaScript JavaScript  ';

// Yeu cau 1 - xoá khoảng trắng
const delSpace = student.trim();
console.log('1 - Chuỗi sau khi xử lý:', delSpace);

// Yeu cau 2 - tìm tất cả từ JavaScript và in ra số lần xuất hiện
const foundWord = delSpace.match(/JavaScript/g);
console.log('2 - Số lần xuất hiện của JavaScript:', foundWord);
console.log('2 - Số lần xuất hiện của JavaScript:', foundWord.length);

// Yeu cau 3 - Thay ICTU -> ĐẠI HỌC ICTU
const progressStr = delSpace.replace(/ICTU/g, 'ĐẠI HỌC ICTU');
console.log('3 - Thay thế ICTU -> Đại HỌC ICTU:',progressStr);

// Yeu cau 4 - Chuyển thành toàn bộ chữ thường
const lowerCase = delSpace.toLowerCase()
console.log('4 - CHuyển toàn bộ chữ thành chữ thường:', lowerCase);