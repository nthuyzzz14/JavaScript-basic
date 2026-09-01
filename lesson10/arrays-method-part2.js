 // concat() - Dùng để nối 2 hoặc nhiều mảng lại với nhau. Tạo ra mảng mới mà không làm thay đổi mảng ban đầu
 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];
 const concatResult = arr1.concat(arr2);
 console.log('1 - After concat(): ', concatResult);

 // slice() - Dùng để cắt 1 mảng mà không ảnh hưởng đến mảng ban đầu, vị trí cắt từ startIndex đến endIndex (Những sẽ không bao gồm endIndex)
 const arr3 = [1, 2, 3, 4, 5, 6];
 const sliceResult = arr3.slice(1, 3);
 console.log('2 - After slice(): ', sliceResult);

// splice() - Dùng để thay thế nội dung bằng cách xoá hoặc thêm phần tử mới. Sẽ làm thay đổi mảng ban đầu
const arr4 = [1, 2, 3 ,4 ,5 , 6];
const spliceResult = arr4.splice(3, 2, 'a', 'b');
console.log('3 - after splice(): ', arr4);
console.log('3 - After splice(): ', spliceResult);

// every() - Dùng để kiểm tra tất cả phần tử trong mảng có thoả mãn điều kiện của hàm call-back và trả về True or False
const arr5 = [1, 2, 3 ,4 ,5 ,6  ,7, -1];
const tatCaLonHon0 = arr5.every((num) => {
  return num > 0;
});
console.log('4 - After every():', tatCaLonHon0);

//findIndex() - Kiểm tra phần tử đầu tiên thoả mã điều kiện, nếu không có turn -1. Điều kiện kiểm tra so sánh giá trị và trả về index
const arr6 = [1, 2 ,3, 4 ,5,6, 7];
const findIndexResult = arr6.findIndex(num => num > 3);
console.log('Vị trí của num > 3:', findIndexResult);

// toString() - chuyển tất cả phần tử trong mảng thành 1 chuỗi String
const arr7 = [1, 2, 3, 4, 5, 6];
const toStringResult = arr7.toString();
console.log('5 - after toString(): ', toStringResult);
console.log('type of toString(): ', typeof toStringResult);

// join() - Nối tất cả các phần tử trong  mảng thành 1 chuỗi String, nhưng có thể chỉ định thêm dấu phân cách
const arr8 = [1, 2, 3, 4, 5, 6, 7];
const joinResult = arr8.join(' - ');
console.log('6 - after join(): ', joinResult);