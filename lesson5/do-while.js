//Do while loop
// công việc được thực hiện ít nhất 1 lần dù điều kiện đã sai

let i = 12;
do{
  console.log(`Dem: ${i}`);
  i++;
  // nó vẫn in ra 12 và khi tăng lên điều kiện không còn đúng và dừng vòng lặp
} while (i < 11);