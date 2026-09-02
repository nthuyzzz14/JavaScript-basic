const students = [
  'an',
  'binh',
  'cuong',
  'dung',
  'ha',
];

// yeu cau - Xoa 'Cuong' va 'Dung' sau do them 'Nam' 'Lan' thay the
const spliceStudent = students.splice(2, 2, 'nam', 'lan');
console.log('After splice student:', spliceStudent);
console.log('After splice and add student:',students);