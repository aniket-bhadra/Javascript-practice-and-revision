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


//function my(status, callback) {
//  if(status){
 //   callback()
//  }
//}
//function hello(msg,second) {
//  console.log(msg, second)
//}

//my(true, hello.bind(this, "yea good!!", "2nd argugment"))


function my(status, callback) {
  if(status){
    callback()
  }
}
function hello(...args) {
  console.log(args)
}

my(true, hello.bind(this, "yea good!!", "2nd argugment", "third argument", false, [22,55,66,88]))
