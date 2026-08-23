let worker = {
  name: "Dương Anh",
  age: 18,
  address: "Bắc Giang",
  position: {
    role: "support",
    salary: "20 trieu",
    tech: ["dỗi", "khóc", "chửi"],
    good: false,
  },
  quote: "Tao chiu",
};

console.log(worker.name);
console.log(worker.position);
console.log('-------------');

//them email
worker.email = "duonganhcuibap@gmail.com";

//sua tuoi (ghi de)
worker.age = 19;

// xoa quote
delete worker.quote;

for(let key in worker){
  console.log(`${key}: ${worker[key]}`)
}