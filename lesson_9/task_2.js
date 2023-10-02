const numbers = [];

numbers.push(1);
numbers.push(2);
numbers.push(3);

numbers.pop();

const newNumbers = [0, ...numbers];

const randomNum = Math.floor(Math.random() * (999 - 99 + 1) + 99);

newNumbers.unshift(randomNum);

console.log(newNumbers);
