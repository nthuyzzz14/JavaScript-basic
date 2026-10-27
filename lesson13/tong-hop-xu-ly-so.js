const raw = "255.6789";
const count = 4095;
const ratio = 0.000456789;
const limit = 9007199254740992;
const invalid = "hello";

// yeu cau 1:
const floatRaw = Number(raw);
console.log("1. Raw: ", floatRaw.toFixed(2));

// yau cau 2:
const hexCount = count.toString(16);
console.log("2. Count: ", hexCount);

// yeu cau 3:
console.log("3. Ratio: ", ratio.toPrecision(3));
console.log("3. Kieu du lieu: ", typeof ratio);

// yeu cau 4:
console.log(
  "4. (limit) có phải số nguyên an toàn: ",
  Number.isSafeInteger(limit),
);

// yeu cau 5:
const numberInvalid = Number(invalid);
console.log("5. (invalid) là NaN? ", isNaN(numberInvalid));
