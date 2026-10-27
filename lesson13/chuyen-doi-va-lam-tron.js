const numA = 98765.4321;
const numB = "1000";
const numC = 3.14159265;
const numD = 7;
const numE = 1e309;

// yeu cau 1:
console.log("1. numA: ", numA.toFixed(5));

// yau cau 2:
const b = Number(numB);
console.log("2. numB: ", b.toString(8));

// yeu cau 3:
const c = numC.toPrecision(1);
console.log("NumC: ", c);

// yeu cau 4:
const d = numD.toString(3);
console.log("NumD: ", d);

// yeu cau 5:
console.log("NumE có phải số hữu hạn: ", isFinite(1e309));
