function hello() {
    console.log(name1); //undefined
  }
  hello()
  var name1 = 10; 

  function hello() {
    console.log(age2); //age2 is not defined: error
  }
  hello()
  let age2 = 10;