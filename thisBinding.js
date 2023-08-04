let outerObject = {
  Name: "Outer",
  innerObject: {
    Name: "Inner",
    greet: function() {
      console.log(this.Name);
    }
  }
};

outerObject.innerObject.greet(); 

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

let person1 = { name: "Alice" };
let person2 = { name: "Bob" };

greet.call(person1); 
greet.apply(person2); 

let greetPerson1 = greet.bind(person1);
greetPerson1(); 

