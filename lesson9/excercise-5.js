let products = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 15000,
    stock: 5
  },
  
  {
    id: 2,
    name: 'Mouse',
    category: 'Accessories',
    price: 300,
    stock: 20
  },

  {
    id: 3,
    name: 'Keyboard',
    category: 'Accessories',
    price: 800,
    stock: 0
  },

  {
    id: 4,
    name: 'Monitor',
    category: 'Electronics',
    price: 5000,
    stock: 3
  },

  {
    id: 5,
    name: 'Headphone',
    category: 'Accessories',
    price: 1200,
    stock: 10
  },

  {
    id: 6,
    name: 'Webcam',
    category: 'Electronics',
    price: 1800,
    stock: 0
  },
]

// Yeu cau 1 - Loc ra cac san pham con hang
let onStock = products.filter((item) => {
  return item.stock > 0;
});
console.log('1 - Sản phẩm còn hàng:', onStock);

// Yeu cau 2 - Tao bang moi chi chua ten san pham
let nameProduct = onStock.map((item) =>{
  return item.name;
});
console.log('2 - Tên tất cả sản phẩm:', nameProduct);

// Yeu cau 3 - Tinh tong gia tri hang ton kho
let totalValue =  onStock.reduce((total, item) =>{
  return total + (item.price * item.stock);
}, 0);
console.log('3 - Giá trị tồn kho:', totalValue);

// Yeu cau 4 - Tim san pham gia cao nhat 
let maxPrice = onStock.reduce((max, item) =>{
  return item.price > max.price ? item : max;
}, products[0]);
console.log('4 - Sản phẩm có giá cao nhất:', maxPrice);

//Yeu cau 5 - Loc ran pham thuoc loai Accessories
let onlyAccessory = onStock.filter((item) =>{
  return item.category === 'Accessories';
});
console.log('5 - Những sản phẩm là Accessories:', onlyAccessory);