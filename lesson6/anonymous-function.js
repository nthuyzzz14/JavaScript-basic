//Anonymous function
// Hàm ẩn danh là hàm không có tên , thường được sử dụng đẻ làm đối số của hàm khác
//VD: các hàm xử lý sự kiện, các hàm gọi lại (call back)


setTimeout(function () {
  // có nghĩa là setTimeout sẽ gọi hàm sau 2 giây
  console.log("hàm sẽ được gọi sau 2 giay và in ra đoạn message này !!");
}, 4000);

