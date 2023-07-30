// if(true){
//     let a= 0
//     for(let i=0; i<5; i++){
//     console.log(a);
//     a++
//     }
  
//   }
//   for (let i = 0; i < 5; i++) {
//     function one (){
//       console.log(i)
//     }
//     one()
//   }

//   for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }

// const obj = {
//     value: 42,
//     getValue: function() {
//       return this.value;
//     }
//   };
  
//   const getValue = obj.getValue;
//   const anotherObj = { value: 100, getValue };
  
//   console.log(anotherObj.getValue());

//static methods in constructor function & Class base syntax

// class MathUtils {
//     static add(a, b) {
//       return a + b;
//     }
  
//     static subtract(a, b) {
//       return a - b;
//     }
//   }
  
//   console.log(MathUtils.add(5, 3)); 
//   console.log(MathUtils.subtract(10, 4)); 


function MathUtils() {}

MathUtils.add = function(a, b) {
  return a + b;
};

MathUtils.subtract = function(a, b) {
  return a - b;
};

console.log(MathUtils.add(5, 3)); 
console.log(MathUtils.subtract(10, 4));

  