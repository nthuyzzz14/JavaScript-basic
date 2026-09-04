const sentence = 'JavaScript is very interesting !';

// Yeu cau 1 - kiem tra co chua JavaScript va Python khong
const checkJS = sentence.includes('JavaScript');
const checkPython = sentence.includes('Python');
console.log('1 - Is JavaScript in sentence?:',checkJS + '\n1 - Is Python in sentence?:',checkPython);

// yeu cua 2 - tim index cua JavaScript , very , interesting 
const indexOfJS = sentence.indexOf('JavaScript');
const indexOfVery = sentence.indexOf('very');
const indexOfInteresting = sentence.indexOf('interesting');
console.log('2 - index of JS:', indexOfJS)
console.log('2 - index of very:', indexOfVery)
console.log('2 - index of Interesting:', indexOfInteresting);

// yeu cau 3 - tach tu trong sentence thanh 1 mang
const splitSentence = sentence.split(' ');
console.log('3 - Split the sentence:', splitSentence);


// yeu cau 4 - lay ra tung tu trong cau
const slice_01 = sentence.slice(0, 10);
const slice_02 = sentence.slice(11, 13);
const slice_03 = sentence.slice(14, 18);
const slice_04 = sentence.slice(19,34);
console.log('4 - Word of sentence:', slice_01)
console.log('4 - Word of sentence:', slice_02)
console.log('4 - Word of sentence:', slice_03)
console.log('4 - Word of sentence:', slice_04)
