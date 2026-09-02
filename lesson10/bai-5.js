const product1 = ['Laptop', 'Mouse', 'Keyboard'];
const product2 = ['Monitor', 'Headphone', 'Webcam'];

// yeu cau 1 - Noi 2 mang san pham
const concatP1P2 = product1.concat(product2);
console.log('1 - After concat:', concatP1P2);

// Yeu cau 2 - Lay ra 3 san pham cuoi
const get3Products = concatP1P2.slice(3, 6);
console.log('2 - after get 3 products:', get3Products); 

// Yeu cau 3 - xoa 'Mouse' them 'Gaming Mouse'
const changeMouse = concatP1P2.splice(1, 1, 'Gaming Mouse');
console.log('3 - after change mouse:', concatP1P2);

// Yeu cau 4 - Kiem tra tat ca san pham phai String khong
const isString = concatP1P2.every(product => typeof product === 'string');
console.log('4 - Is array String ? ', isString);

// Yeu cau 5 - Tim index cua san pham co value la 'Monitor'
const foundMonitor = concatP1P2.findIndex(product => product === 'Monitor');
console.log('5 - Index of Monitor is ', foundMonitor);

// Yeu cau 6 - chuyen thanh chuoi va tao ngan cach giua cac chuoi |
const joinResult = concatP1P2.join(' | ');
console.log('6 - after join:', joinResult);