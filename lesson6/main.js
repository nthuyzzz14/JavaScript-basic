let person = {
  name: 'Ma Thanh Thuy',
  age: 19,
  email: 'mathanhthuyreal207@gmail.com',
  quote: function(){
    console.log('mathanhthuydeptrai cute');
  }
}

console.log(`${person['name']}`)

for(let key in person){
  console.log(`${person[key]}`);
}