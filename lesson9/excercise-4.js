let orders = [
  {
    id: 1,
    customer: "Thuy",
    total: 500,
    status: "completed",
  },

  {
    id: 2,
    customer: "Manh",
    total: 2000,
    status: "pending",
  },

  {
    id: 3,
    customer: "Chien",
    total: 200,
    status: "cancelled",
  },

  {
    id: 4,
    customer: "Duc",
    total: 1100,
    status: "completed",
  },

  {
    id: 5,
    customer: "Even",
    total: 900,
    status: "completed",
  },

  {
    id: 6,
    customer: 'Tan',
    total: 700,
    status: 'cancelled'
  }
];

// Yeu cau 1 - Loc don hang co trang thai 'completed'
let onlyCompleted = orders.filter((product) => {
  return product.status === "completed";
});
console.log("Trang thai:", onlyCompleted);

// Yeu cau 2 - Tinh tong tien cua don hang 'completed'
let completedPay = onlyCompleted.reduce((total, product) => {
  return total + product.total;
}, 0);
console.log("Tong tien don hang completed:", completedPay);

//Yeu cau 3 - Tao 1 mang chua ten cua cac khach hang dat don completed
let customerCompletedOrder = onlyCompleted.map((product) => {
  return product.customer;
});
console.log("Ten khach hang dat hang thanh cong:", customerCompletedOrder);

// Yeu cau 4 - Tim don hang completed co gia cao nhat
let maxOrderCompleted = onlyCompleted.reduce((max, product) =>{
  return product.total > max.total ? product : max;
}, orders[0]);
console.log('San pham co gia cao nhat:',maxOrderCompleted);

// Yeu cau 5 - Kiem tra don hang co tren 1k hay khong
let found1K = orders.find((product) => {
  return product.total > 1000;
});
console.log('Trong orders co san pham gia tren 1K khong ?', found1K);

// Yeu cau 5 - Tinh so luong don hang bi cancelled
let onlyCancelled = orders.filter((product) =>{
  return product.status === 'cancelled';
});

let cancelledQuantity = onlyCancelled.length;

console.log('Tong so don hang Cancelled:', cancelledQuantity);