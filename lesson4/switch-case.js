//Switch case

let day = new Date().getDate();
console.log(day)

switch (day){
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default: // neu khong roi vao case tren thi se in ra Default
    console.log('Khong co thu nao nhu vay');
    break;
}