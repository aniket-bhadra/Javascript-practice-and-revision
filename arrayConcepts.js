let arr = [1, 2, 3, 4, 5];

let mapped = arr.map(x => x * 2);
let filtered = arr.filter(x => x > 2);
let reduced = arr.reduce((acc, x) => acc + x, 0);
let found = arr.find(x => x > 3);
let includes = arr.includes(3);
let sorted = arr.sort((a, b) => b - a);
let reversed = arr.reverse();
let sliced = arr.slice(1, 3);
let spliced = arr.splice(2, 1, 6);
let joined = arr.join("-");
let index = arr.indexOf(4);
let every = arr.every(x => x > 0);
let some = arr.some(x => x < 3);
let flat = arr.flat();
