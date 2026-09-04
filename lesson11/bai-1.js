const username = 'mathanhthuy2007';

//Yeu cau 1 - lay ky tu dau tien cua username
const firstChar = username.charAt(0);
console.log('1 - first char is:', firstChar);

// yeu cau 2 - Kiem tra username co 'thuy' khong
const foundThuy = username.includes("thuy");
console.log('2 - Is username includes thuy ? ', foundThuy);

// yeu cau 3 - tim vi tri bat dau cua 'thuy'
const foundIndex = username.indexOf('thuy');
console.log('3 - The first index of thuy:', foundIndex);

// yeu cau 4 - Lay phan ten 'mathanhthuy ' ra khoi username
const sliceString = username.slice(0, 11);
console.log('4 - slice mathanhthuy from username:', sliceString);

// yeu cau 5 - lay nam sinh ra khoi username;
const sliceYear = username.slice(11, 15);
console.log('5 - slice year out of username:', sliceYear);