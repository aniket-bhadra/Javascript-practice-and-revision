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

//console.log(outsideVar); 
//console.log(typeof insideVar); 

///////////////////////



class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Max', 'Golden Retriever');
//dog.speak();




function createFunctions() {
  let funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(function() {
      return i;
    });
  }
  return funcs;
}

//const functions = createFunctions();
//console.log(functions[0]()); // 0
//console.log(functions[1]()); // 1
//console.log(functions[2]()); // 2

///////////////////////////////

// 1. Closure 
let outer = 10;
function closureExample() {
  let inner = 20;
  return function() {
    console.log(outer, inner);
  };
}
//const closureFunc = closureExample();
//closureFunc();  
outer = 30;
//closureFunc();  

// 2. Hoisting with let
//console.log(a);
let a = 5;

// 3. Hoisting with function declarations
//console.log(b());
function b() {
  return "Hoisted!";
}

// 4. `let` vs `var` and temporal dead zone
//console.log(c);
var c = 5;
//console.log(d);
let d = 10;












//////////////////////
class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class SubClass extends MyClass {
  constructor(name, age, profession) {
    super(name, age);
    this.profession = profession;
  }

  greet() {
    super.greet();
    console.log(`I am a ${this.profession}.`);
  }
}

const person = new SubClass("Alice", 30, "Engineer");
person.greet();


////////////////////
console.log([] + []);
console.log({} + []);
console.log([] == ![])
console.log([] == []);
console.log([] == ![] == {});
 console.log(0.1 + 0.2 == 0.3);
console.log(+"10" - 1 == 9);
console.log([1, 2] == [1, 2]);

