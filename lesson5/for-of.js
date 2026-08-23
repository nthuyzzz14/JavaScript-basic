//For-of loop
// dùng để lặp qua các giá trị của iterable object(những đối tượng có thể lặp), phổ biến như String, Array, ..

//array
let fruits =['Mango', 'Banana', 'Orange', 'Berry', 'Apple' , 'Pinaple', 'Cherry', 'Durian']
for(let fruit of fruits){
  console.log(`Favfruit: ${fruit}`);
  console.log('----------------')
}

console.log('=================');

let name = 'ma thanh thuy la nguoi dep trai so mot';
for(let char of name){
  console.log(`Character: ${char}`);
}