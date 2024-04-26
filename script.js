const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
let oddNumbers = [];

arr.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
});

console.log("EVEN NUMBERS:");
evenNumbers.forEach(num => console.log(num));
console.log("ODD NUMBERS:");
oddNumbers.forEach(num => console.log(num));