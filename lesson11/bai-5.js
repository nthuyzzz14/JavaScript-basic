const productCode = 'SP-IPHONE-15-PRO-256GB';

// xu ly chuoi thu thong tin
const processing1 = productCode.substring(0,2)
const processing2 = productCode.substring(3,9)
const processing3 = productCode.substring(10, 12)
const processing4 = productCode.substring(13, 16)
const processing5 = productCode.substring(17, 25);

console.log('Product:', processing1)
console.log('Name of product:',processing2)
console.log('Model',processing3)
console.log('Version:',processing4)
console.log('Data:', processing5)

// yeu cau 1 - Ma san pham co chua SP khong ?
const checkSP = productCode.includes('SP');
console.log('1 - Is SP in code?',checkSP);

// yeu cau 2 - tach chuoi thanh cac phan tu mang
const splitProduct = productCode.split('-');
console.log('2 - after split the productcode:', splitProduct);

