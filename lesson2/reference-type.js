//Object
const student = {
  maSv: "01",
  name: "Ma Thanh Thuy",
  age: "19",
  number: "0336049655",
  email: "mathanhthuyreal207@gmail.com",
  greet: function () {
    console.log("Boujour !, I am " + this.name + ", nice to meet you !");
  },
};

student.greet();
console.log("Sinh vien: ", student.name);
console.log("Tuoi:  ", student.age);
console.log("Number:  ", student.number);

//Array
const sports = ["Soccer", "volleybal", "Esport", "Batminton", "Tenis", "Run"];
console.log("Length of number sport equal ", sports.length);
console.log("----------------------");

console.log("Cac mon the thao :", sports);
console.log("----------------------");

console.log("My favourite sport is ", sports[0]);
console.log("----------------------");

console.log("My favourite sport is ", sports[1]);
console.log("----------------------");

console.log("My favourite sport is ", sports[2]);
console.log("----------------------");

console.log("My favourite sport is ", sports[3]);
console.log("----------------------");

//Function
const favSubject = (subj) => {
  console.log("my fav subject is " + subj + " because it really interesting !");
};

favSubject("OOP");
