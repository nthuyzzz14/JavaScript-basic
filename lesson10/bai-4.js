const scores = [8, 7, 9, 6, 10, 5, 9];

//yeu cau 1 - Kiem tra tat ca diem co >= 5 ?
const checkScore = scores.every(score => score >= 5);
console.log('1 - Are all of score >= 5 ? ', checkScore);

// Yeu cau 2 - Tim vi index co value > 8
const foundHigher8 = scores.findIndex(score => score > 8);
console.log('2 - The index of value > 8:', foundHigher8);
