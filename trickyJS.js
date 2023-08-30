// // if(true){
// //     let a= 0
// //     for(let i=0; i<5; i++){
// //     console.log(a);
// //     a++
// //     }
  
// //   }
// //   for (let i = 0; i < 5; i++) {
// //     function one (){
// //       console.log(i)
// //     }
// //     one()
// //   }

// //   for (let i = 0; i < 5; i++) {
// //     setTimeout(function () {
// //       console.log(i);
// //     }, 1000);
// //   }

// // const obj = {
// //     value: 42,
// //     getValue: function() {
// //       return this.value;
// //     }
// //   };
  
// //   const getValue = obj.getValue;
// //   const anotherObj = { value: 100, getValue };
  
// //   console.log(anotherObj.getValue());

// //static methods in constructor function & Class base syntax

// // class MathUtils {
// //     static add(a, b) {
// //       return a + b;
// //     }
  
// //     static subtract(a, b) {
// //       return a - b;
// //     }
// //   }
  
// //   console.log(MathUtils.add(5, 3)); 
// //   console.log(MathUtils.subtract(10, 4)); 


// // function MathUtils() {}

// // MathUtils.add = function(a, b) {
// //   return a + b;
// // };

// // MathUtils.subtract = function(a, b) {
// //   return a - b;
// // };

// // console.log(MathUtils.add(5, 3)); 
// // console.log(MathUtils.subtract(10, 4));


// function Persion(name){
//     //private varible and methods restrcited to this function
//     let flag = true
//     function PrintingFlag(){
//       console.log(flag);
//     }
//     //instance specfice properties
//     this.name = name;
//   }
//   //methods and properties shared by all the instances
//   Persion.prototype.walk=() => {
//     console.log("walking")
//   }
  
//   Persion.prototype.sharedVariable = 'shared among all instances'
  
//   //utilizing all functions are js are objects
//   Persion.someProperty = 'Hello';
//   Persion.someMethod = function() {
//     return 'World';
//   };
  
//  // console.log(Persion.someMethod())
//   //console.log(Persion.someProperty)
  
//   //const jon = new Persion("jon")
//   ///console.log(jon.name)
//   //console.log(jon.walk())
//   //console.log(jon.sharedVariable)  
  
  
//   // function hello() {
// //   console.log("age");
// // }
// // hello.prototype.myVarible= "hello"
// // const a = new hello()
// // console.log(a)

// const someObject = { prop: "Some property" };
// console.log(someObject);
// const newPrototype = { foo: "bar" };
// Object.setPrototypeOf(someObject, newPrototype);
// console.log(someObject)



// console.log("Start");

// async function bar() {
//   console.log("Bar start");
//   await new Promise(resolve => setTimeout(resolve, 2000));
//   console.log("Bar end");
// }

// bar();

// console.log("End");



// console.log('start');
// function hello() {
//   console.log('from hello function');
// }
// async function asynchronous() {
//   await hello();
//   console.log("after hello function executing")
// }
// asynchronous()
// setTimeout(()=> {
//   console.log("from setTimeout")
// },0)
// asynchronous()
// console.log('end');



console.log('start');
function hello() {
  console.log('from hello function');
}
async function testingAsync() {
  await hello();
  console.log("after hello function executing")
}
setTimeout(()=> {
  console.log("from setTimeout")
},0)
testingAsync()
testingAsync()
console.log('end');



  
