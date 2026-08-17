// Primitive types
// const name = "ma thanh thuy";
// const nameCopy = name;
// nameCopy = "Thuy Ma Thanh";
// console.log("username: ", name);
// console.log("usernameCopy: ", nameCopy);

//Reference type
const objA = {
  name: "thuy",
};
const objB = objA;
objB.name = "thanh";
console.log("Object A: ", objA.name);
console.log("Object B: ", objB.name);
