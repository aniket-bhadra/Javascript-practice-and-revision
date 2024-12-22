// function asynchrounusMine(){
//     console.log("before setTimeout")
//     setTimeout(()=>{
//         console.log("this is setTimeout")
//     },1000)
//     console.log("after setTimeout")
// }
// let flag = prompt("enter the char")
// function hello(){
//     console.log("hello from hello function")
// }

// if(flag ==='a'){
//     asynchrounusMine();
//     hello();
// }


//output base questions--
// console.log("A");
// setTimeout(function() {
//   console.log("B");
// }, 0);
// Promise.resolve().then(function() {
//     console.log("C");
//   });
// console.log("D");

// console.log("A");
// setTimeout(function() {
//   console.log("B");
//   Promise.resolve().then(function() {
//     console.log("C");
//   });
// }, 0);
// console.log("D");
//console.log("E");

//////////////////////////////
//setInterval(() => console.log('Tick'), 1000);
//setTimeout(() => clearInterval(this), 5000);

//setTimeout(() => console.log('A'), 0);
//Promise.resolve().then(() => console.log('B'));


setInterval(() => console.log('Hello'), 1000);
setTimeout(() => console.log('World'), 3000);

console.log(1);
setTimeout(() => console.log(2), 0);
setTimeout(() => console.log(3), 0);
console.log(4);
