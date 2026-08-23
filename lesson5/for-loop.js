//For loop
// dùng khi biết trước số lần lặp

let sum = 0;
for(let i = 0 ; i <= 10; i++){
  sum += i;
}

console.log(`Tong: ${sum}`)

let sumTimes = 1;
for(let i = 1; i <= 10; i++){
  sumTimes *= i;
}

console.log(`Tich: ${sumTimes}`)