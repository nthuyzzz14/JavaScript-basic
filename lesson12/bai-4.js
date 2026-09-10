const sentence = '    Javascript là ngôn ngữ rất phổ biến.    ';

const delSpace = sentence.trim();
console.log('Sau khi xoá khoảng trắng:', delSpace);

const switchWord = delSpace.replace('Javascript', 'JavaScript');
console.log('Sau khi sửa từ:',switchWord);