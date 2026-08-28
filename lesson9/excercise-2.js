let students = [
  {
    id: 1,
    name: "Thuy",
    age: 19,
    score: 8.9,
  },

  {
    id: 2,
    name: "Manh",
    age: 18,
    score: 5.6,
  },

  {
    id: 3,
    name: "Quang",
    age: 17,
    score: 7.8,
  },

  {
    id: 4,
    name: "Huy",
    age: 19,
    score: 6.7,
  },

  {
    id: 5,
    name: "Tien",
    age: 76,
    score: 8.4,
  },
];

//Yeu cau 1 - Tim sinh vien co id = 3
let findThird = students.find((student) => student.id === 3);
console.log('Sinh vien co id = 3: ', findThird);

// Yeu cau 2 : Loc ra nhung sinh vien co diem >= 8
let newScore = students.filter((student) => student.score >= 8);
console.log('Sinh vien co diem >= 8: ', newScore);

// Yeu cau 3 - Tạo 1 mảng chỉ chứa tên của tất cả sinh viên
let onlyName = students.map((student) => student.name);
console.log('Ten tat ca sinh vien: ', onlyName);

// Yeu cau 4 - Tính tổng điểm của tất cả sinh viên
let sumScore = students.reduce((total,student) => {
  return total + student.score; 
},0);
console.log('Sum of those scores =', sumScore);

// Yeu cau 5 - Tính điểm trung bình 
let aveScore = sumScore / students.length;
console.log('Diem trung binh =', aveScore);
