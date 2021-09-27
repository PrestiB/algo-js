let rand10 = () => Math.floor(Math.random() * 11);
let multiRand = Array.from(Array(rand10()).keys()); // Returns an array with index from 0 to 10

console.log(multiRand);