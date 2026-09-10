const sentence = "Ma Thanh Thuỷ Thuỷ đẹp trai Yên trạch 123";

// toLowerCase() - chuyển tất cả chữ trong chuỗi thành chữ thường, Không làm thay đổi chuỗi ban đầu
const lowerSentence = sentence.toLowerCase();
console.log("1 - to lower sentence:", lowerSentence);

// toUpperCase() - chuyển tất cả chữ trong chuỗi thành chữ in hoa. Không làm thay đổi chuỗi ban đầu
const upperSentence = sentence.toUpperCase();
console.log("2 - to upper sentence:", upperSentence);

// trim() - Loại bỏ khoảng trống ở đầu và cuối chuỗi. Không làm thay đổi chuỗi ban đầu
const sentence1 = "     Ma Thanh Thuỷ đẹp trai Yên trạch 123      ";
const trimSpace = sentence1.trim();
console.log("3 - after trim():", trimSpace);

// replace() - Thay thế chuỗi con trong chuỗi ban đầu bằng một chuỗi khác, nó chỉ thay thế chuỗi xuất hiện đầu tiên được truyền vào. Nếu muốn thay thế toàn bộ thì dùng biêt thức chính quy (regex) và thêm flag g(global)
const replaceStr = sentence.replace("Thuỷ", "Nhỏ");
// Biểu thức chính quy thay đổi toàn bộ chuỗi con
const replaceStrRegex = sentence.replace(/Thuỷ/g, 'Nhỏ');
console.log("4 - after replace():", replaceStr);
console.log("4 - after replace():", replaceStrRegex);

// match() - Dùng để tìm kiếm và trả vê 1 mảng chưa kết quả khớp với biểu thức chính quy cần tìm kiếm. Nếu không có kết quả khớp trả về null , chỉ trả về kết quả của lần đầu tiên xuất hiện. Muốn trả về tát cả dùng flag g(global)
const matchesStr =  sentence.match(/Thuỷ/g);
console.log('5 - the string after match():', matchesStr);