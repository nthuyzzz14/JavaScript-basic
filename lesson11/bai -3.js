const email = 'mathanhthuy@gmail.com';

// yeu cau:
// 1 - lay ra username
const userName = email.slice(0, 11);
console.log('Username:', userName);

// 2 - lay ra Domain
const domain = email.slice(12, 23);
console.log('Domain:',domain);

// 3 - lay ra ten mien
const domainName = email.slice(12, 17);
console.log('Domain name:', domainName);

// 4 - lay ra duoi com
const tail = email.substring(22, 18);
console.log('Tail:', tail);

//Yeu cau
// 5 - kiem tra co @ khong
const checkChar = email.includes('@');
console.log('5 - Is @ in email ?', checkChar);

// 6 - Kiem tra duoi 
const checkTail = email.includes('.com');
console.log('6 - Is .com in email ?', checkTail); 

