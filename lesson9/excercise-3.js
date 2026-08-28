let cart = [
  {
    name: 'Headphone',
    price: 1200,
    quantity: 2,
  },

  {
    name: 'Laptop',
    price: 15000,
    quantity: 1
  },

  {
    name: 'Mouse',
    price: 200,
    quantity: 2
  },

  {
    name: 'Keyboard',
    price: 800,
    quantity: 1,
  },

];

// Yeu cau 1 - Tinh tong so tien phai tra
let totalPay = cart.reduce((total, item) =>{
  return total + (item.price * item.quantity);
}, 0)
console.log("Tổng số tiền phải trả:", totalPay);
console.log('_____________________');

// Yeu cau 2 - Lọc item có quantity >= 2
let twoORhigher = cart.filter((item) => {
  return item.quantity >= 2;
});
console.log('Sẩn phẩm có quantity >= 2:',twoORhigher);
console.log('_____________________');

// Yeu cau 3 - Tạo mảng mới có chứa tên cảu tất cả các sản phẩm
let onlyItemName = cart.map((item) => {
  return item.name;
});
console.log('All of item names: ',onlyItemName);
console.log('_____________________');

// Yeu cau 4 - Tìm sản phẩm có giá cao nhất
let maxPrice = cart.reduce((max,item) =>{
  return item.price > max.price ? item : max; 
},cart[0]);
console.log('San pham co gia cao nhat:', maxPrice);
console.log('_____________________');