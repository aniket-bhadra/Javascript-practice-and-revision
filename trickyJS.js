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

const obj = {
    value: 42,
    getValue: function() {
      return this.value;
    }
  };
  
  const getValue = obj.getValue;
  const anotherObj = { value: 100, getValue };
  
  console.log(anotherObj.getValue());