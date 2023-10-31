// // console.log('start script');
// // function testing1() {
// //   console.log('inside testing1');
// //   setTimeout(() => console.log('inside setTimeout'), 0);
// //   console.log('after setTimout statement');
// // }
// // async function testing2() {
// //   console.log('before calling testing1');
// //   await testing1();
// //   console.log('after calling testing1');
// // }
// // testing2();
// // console.log('end script');





// // // Module 1
// // var Module1 = (function () {
// //     var privateVar = "Module 1";

// //     function getPrivateVar() {
// //         return privateVar;
// //     }

// //     return {
// //         getPrivateVar: getPrivateVar,
// //     };
// // })();

// // // Module 2
// // var Module2 = (function () {
// //     var privateVar = "Module 2";

// //     function getPrivateVar() {
// //         return privateVar;
// //     }

// //     return {
// //         getPrivateVar: getPrivateVar,
// //     };
// // })();

// // console.log(Module1.getPrivateVar()); 
// // console.log(Module2.getPrivateVar()); 




// // const my3 = () => 'my3';
// // function my1() {
// //   console.log('my1');
// // }
// // // const my2 = function () {
// // //   console.log('my2');
// // // };
// // // console.log(my1.prototype); //{}
// // // console.log(my3.prototype); //undefined
// // // console.log(my2.prototype); //{}


// // const errorFunction = () => {
// //   // throw new Error('something went wrong!!!!');
// //   setTimeout(() => {
// //     throw new Error('somethng went wrong!!!');
// //   },0);
// // };
// // console.log('start script execution');
// // async function testingFlow() {
// //   try {
// //     await errorFunction();
// //     console.log('after errorFunction !');
// //   } catch (error) {
// //     console.log(error);
// //   } finally {
// //     console.log('inside finally');
// //   }
// // }
// // testingFlow();
// // console.log('end script execution');

// // let x = 1;
// // if (function f() {}) {
// //   x += typeof f;
  
  
  
  
  

// // }
// // console.log(x);


// function bar() {
//   return foo;
//   foo = 10;
//   function foo() {}
//   var foo = '11';
//   function foo() {}
//   foo = 12;
// }

// console.log(typeof bar()); 



// var a = 1;
// function foo() {
//   console.log(a); 
//   var a = 2;
//   console.log(a); 
// }
// foo();



(function() {
  try {
    throw new Error();
  } catch (x) {
    var x = 1, y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();



var outsideVar = "I'm outside the IIFE";

(function () {
    var insideVar = "I'm inside the IIFE";

    console.log(outsideVar); 
    console.log(insideVar);  
})();

console.log(outsideVar); 
console.log(typeof insideVar); 

