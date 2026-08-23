//Method function
// Hàm phương thức: là hàm được định nghĩa / khai báo bên trong đối tượng , và được coi là phương thức của đối thượng

let thuy = {
  name: 'ma thanh thuy',
  age: 19,
  address: 'Yen Trach, Thai Nguyen',
  number: '0336049655',
  sayHi: function (){
    console.log(`Hi everyone, I'm ${this.name} from Thai Nguyen !`)
  }
}

thuy.sayHi()