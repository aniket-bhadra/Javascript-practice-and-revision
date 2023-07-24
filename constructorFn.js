// // console.log("working constructorFn.js")

// //add methods that are accessible only for specific instances

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   let working = false;

//   this.run = function () {
//     working = true;
//     console.log("running");
//   };

//   this.working = function () {
//     if (working) {
//       console.log("i am working", this.name, this.age);
//     } else {
//       console.log("Please give me work first");
//     }
//   };
// }

// Person.prototype.drive = function () {
//   console.log("driving");
// };

// const person1 = new Person("Rohit", 35);
// const person2 = new Person("mohit", 25);

// person1.specialTask = function () {
//   console.log("Special task", this.name, this.age);
// };

// person1.run();
// person2.run();

// person1.working();
// person1.drive();

// person2.drive();

// // Accessing the special method
// person1.specialTask(); // Special driving mode for Toyota Camry
// person2.specialTask(); // Error: person2.specialTask is not a function
// console.log(person1);
// console.log(Person.prototype);


//ouput base questions
// function Car() {
//     this.make = "Toyota";
//   }
  
//   Car.prototype.model = "Camry";
  
//   let car1 = new Car();
//   let car2 = new Car();
  
//   console.log(car1.model);

//Constructor Function vs. Class Syntax
// Constructor Function
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new PersonConstructor('riya', 30);

// Class Syntax
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new PersonClass('rohit', 25);