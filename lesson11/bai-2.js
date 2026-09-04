const fullName = 'Ma Thanh Thuy';

// yeu cau 1 - kiem tra fullName co chua Thanh khong;
const includesThanh = fullName.includes('Thanh');
console.log('1 - is fullName that includes Thanh ?',includesThanh);

//yeu cau 2 - tim vi tri dau tien cua Thuy
const indexOfThuy = fullName.indexOf('Thuy');
console.log('2 - index of Thuy:', indexOfThuy);

//yeu cau 3 - tach ten ra thanh tung phan tu mang;
const splitFullName = fullName.split(' ');
console.log('3 - split fullName to Array:', splitFullName);

// yeu cau 4 - lay rieng ra Ma
const slicefullName_01 = fullName.slice(0, 3);
console.log('4 - slice Ma out of fullName:',slicefullName_01);

// yeu cau 5 - lay rieng ra hanh
const slicefullName_02 = fullName.slice(3, 9);
console.log('5 - slice Thanh out of fullName:',slicefullName_02);

// yeu cau 4 - lay rieng ra Ma
const slicefullName_03 = fullName.slice(9, 14);
console.log('6 - slice Thuy out of fullName:',slicefullName_03);