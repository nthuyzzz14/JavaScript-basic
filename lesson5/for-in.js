// For-in dùng để lặp các Attribute trong Object
// được áp dụng để in ra các thuộc tính cảu obj thay vì phải viết từng dòng in ra

let thuy = { //Json object không thể dùng for-of để lặp
  name: 'Ma Thanh Thuy',
  age: 19,
  country: 'Vietnam',
  Hobbies: ['Soccer', 'Run', 'Playing game', 'Music', "Coding"],
}

for(let key in thuy){
console.log(`${key}; ${thuy[key]}`);
if(key === 'Hobbies'){

}
console.log('-----------');
}
