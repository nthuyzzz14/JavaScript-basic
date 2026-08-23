//Contructors function
//  dùng để tạo đối tượng mới dựa trên khuôn mẫu.

function Person (name){
  this.name = name;
  this.greet = function () {
    console.log(`Hi everyone, I'm ${this.name} from Vietnam`);
  }
}

const youngguy = new Person('Young guy (19)');
youngguy.greet();

console.log('------------');

const oldman = new Person('Old Man (59) ');
oldman.greet()