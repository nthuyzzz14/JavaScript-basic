let scores = [45, 78, 92, 56, 34, 88, 67, 95, 49, 73];

// yeu cau 1 : lọc và in ra điểm >= 60
console.log('First request');
let higherSixty = scores.filter((score) => {
  return score >= 60;
});
console.log(`All of score >= 60 = ${higherSixty}`);

console.log('-----------------------');

//yeu cau 2: Tạo mảng mới trong đó mỗi điemr được cộng thêm 6 vd: 45 -> 50
console.log('Second request');
let plusFive = scores.map((score) => {
  return score + 5;
});
console.log(`Scores after plus five = ${plusFive}`);
console.log('-----------------------');

//yeu cau 4: Tính điểm trung bình của danh sách sau khi cộng điểm
console.log('Third request');
let aveScores = higherSixty.reduce((init, score) => {
  return init + score;
},0) / higherSixty.length;
console.log(`Diem trung binh: ${aveScores}`);
