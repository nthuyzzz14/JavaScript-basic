let sentence = 'JavaScript rất hay. Tôi đang học JavaScript. JavaScript khá dễ.';

const foundWord = sentence.match(/JavaScript/g);


console.log('Số lần xuất hiện JavaScript:', foundWord.length);