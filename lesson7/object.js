// object
// Object trong java có thẻ có 1 thuộc tính là object khác (nested object)

let person = {
  name: 'Ma Thanh Thuy',
  age: 19,
  live: ' Thai Nguyen Province',
  emai: 'mathanhthuyreal207@gmail.com',
  techs: ['Java', 'C', 'HTML', 'JavaScript'],
  job: {
    nameCompany: 'Microsoft',
    position: 'Front-End Developer',
    salary: '100 trieu',
    fullStack: false
  },
  quote:'tôi là người đẹp trai số một',
}

console.log(person)
console.log('-------------------')


let person2 = new Object();
person2.name = 'Ma thuy';
person2.age=18
person2.job = {
   nameCompany: 'Microsoft',
    position: 'Front-End Developer',
    salary: '100 trieu',
    fullStack: false
};
person2.tech = ['Java', 'C', 'HTML', 'JavaScript']

console.log(person2)
console.log('---------------')

// cách truy cập đến các phàn tử trong object

//cách 1
console.log(person.name);
//Cách 2: để thuọc tính sẽ truy cập tới bằng String
console.log(person2['name'])

//Thêm / sửa / xoá thuộc tính của Object
//Them
person.gender = 'male'

//sua
person.age = 20;

//xoa
delete person.emai;

console.log(person)