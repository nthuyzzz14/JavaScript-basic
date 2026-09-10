let sentence = 'Xin chào Thuỷ , hôm nay Thuỷ có đi học không ?';

// Yeu cau 2 - thay 'Thuỷ' to 'Nam ' dùng replace dùng regex và flag g
const changeWord = sentence.replace(/Thuỷ/g, 'Nam');
console.log('after replace the word:', changeWord);