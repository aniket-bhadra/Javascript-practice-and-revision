// function hello() {
//     console.log(name1); //undefined
//   }
//   hello()
//   var name1 = 10; 

//   function hello() {
//     console.log(age2); //age2 is not defined: error
//   }
//   hello()
//   let age2 = 10;

//synchronous flow--


// let numbers = 0;
// function hello() {
//   numbers = 25;
//    console.log(`numbers is ${numbers}`)
//   return numbers;
// }

// function testing(){
//   const value = hello()
//   console.log(`value is ${value}`)
// }

// testing()
//console.log('finished');

//------
//ouput--numbers is 25
//value is 25
//finished

//asynchronous flow----

let numbers = 0;
function hello() {
  numbers = 25;
  console.log(`numbers is ${numbers}`);
  return numbers;
}

async function testing() {
  const value = await hello();
  console.log(`value is ${value}`);
}

testing();
console.log('finished');

//--------
//output--
// numbers is 25
// finished
// value is 25



function greet(person) {
  if (person === { name: "rio" }) {
    console.log("Hello, rio!");
  } else {
    console.log("Hello, Stranger!");
  }
}
greet({ name: "rio" });

function greet(person) {
  if (person == { name: "rio" }) {
    console.log("Hello, rio!");
  } else {
    console.log("Hello, Stranger!");
  }
}
greet({ name: "rio" });



let x = 1;
if (function f() {}) {
  x += typeof f;
}
console.log(x);


console.log([] + []);










console.log('script start');

// function hello() {
//   console.log('hello');
//   return new Promise((resolve, reject)=> {
//     reject("error")
//   })
// }

// async function testingBehavior() {
//   try {
//     await hello();
//   } catch (error) {
//     console.log(error);
//   }
// }
// testingBehavior();
// console.log('script end');


