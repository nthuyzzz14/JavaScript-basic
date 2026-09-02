const fruit1 = ['Apple', 'Banana', 'Orange'];
const fruit2 = ['Mango', 'Grape', 'Watermelon'];

// Yeu cau 1 - Ghép 2 mảng
let concatF1F2 = fruit1.concat(fruit2);
console.log('1 - Array after concat:', concatF1F2);

// Yeu cau 2 - Chuyen mang thanh chuoi String co cac phan cach " - "
let joinF1F2 = concatF1F2.join(' - ');
console.log('2 - Array after join - :', joinF1F2);
