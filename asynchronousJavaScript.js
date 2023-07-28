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

console.log("A");
setTimeout(function() {
  console.log("B");
}, 0);
Promise.resolve().then(function() {
  console.log("C");
  setTimeout(function() {
    console.log("D");
  }, 0);
});
console.log("E");