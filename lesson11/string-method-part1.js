// charAt() - dùng để kiểm tra ký tự tại 1 vị trí, và trả về ký tự đó. Vị trí của ký tự bắt đầu từ không giống như index. Nếu vị trí không tồn tại sẽ trả về rỗng ''
const str1 = 'mathanhthuy'
console.log(str1.charAt(0));
console.log(str1.charAt(2));
console.log(str1.charAt(100));
console.log(typeof str1.charAt(100));

// concat() - Dùng để nối 2 hoặc nhiều chuỗi lại với nhau và trả về 1 chuỗi mới. Mà không làm thay đổi chuỗi ban đầu
const str2 = 'Ma Thanh Thuy';
const str3 = 'Người đẹp trai thế giới top 1';
const character = ' - '
const concatResult = str2.concat(character).concat(str3);
console.log('1 - after concat():', concatResult);
console.log(str2);

// includes() - Dùng để kiểm tra chuỗi con có tồn tại trong chuỗi mẹ. Và trả về true hoặc false. Có phân biệt chữ hoa và chữ thường 
const str4 = 'GianDangIuHong?';
const includesResult = str4.includes('Gian');
console.log('2 - after includes():',includesResult);

// indexOf() - Dùng để kiểm tra ký tự trong chuỗi. Nếu có tồn tại thì trả về index của ký tự đầu tiên trong chuỗi cần kiểm tra. Nếu không tồn tại trả về -1. Có phân biệt chữ hoa và chữ thường
const str5 = 'mathanhthUy';
const indexOfResult = str5.indexOf('uy');
console.log('3 - after indexOf():', indexOfResult);

// split - Dùng để chia chuỗi thành 1 mảng chuỗi còn nhờ vào ký tự nhận diện ''. Không làm thay đổi chuỗi ban đầu.
const str6 = 'ma, thanh, thuy, cute, deptrai, somot';
const splitResult = str6.split(', ');
console.log('4 - after split():', splitResult);

// slice - Dùng để cắt chuỗi từ startIndex đển endIndex. Và trả về không bao gồm endIndex. Không làm thay đổi chuỗi ban đầu. Nếu start > end trả về chuỗi rỗng
const str7 = 'ai la nguoi dep trai?';
const sliceResult_01 = str7.slice(0, 11);
const sliceResult_02 = str7.slice(10, 0);
console.log('5 - after sliceResult_01:', sliceResult_01);
console.log('5 - after sliceResult_02:', sliceResult_02);
console.log(typeof sliceResult_02);

// substring - Dùng để cắt chuỗi từ startIndex đển endIndex. Và trả về không bao gồm endIndex. Không làm thay đổi chuỗi ban đầu. Khác với slice thì start > end thì tự động đảo ngược lại.
const str8 = 'ai la nguoi dep trai?';
const subStringResult_01 = str8.substring(0, 11);
const subStringResult_02 = str8.substring(11, 0);
console.log('6 - after subStringResult_01:', subStringResult_01);
console.log('65 - after subStringResult_02:', subStringResult_02);
