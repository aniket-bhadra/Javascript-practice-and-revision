console.log('start script');
function testing1() {
  console.log('inside testing1');
  setTimeout(() => console.log('inside setTimeout'), 0);
  console.log('after setTimout statement');
}
async function testing2() {
  console.log('before calling testing1');
  await testing1();
  console.log('after calling testing1');
}
testing2();
console.log('end script');





// Module 1
var Module1 = (function () {
    var privateVar = "Module 1";

    function getPrivateVar() {
        return privateVar;
    }

    return {
        getPrivateVar: getPrivateVar,
    };
})();

// Module 2
var Module2 = (function () {
    var privateVar = "Module 2";

    function getPrivateVar() {
        return privateVar;
    }

    return {
        getPrivateVar: getPrivateVar,
    };
})();

console.log(Module1.getPrivateVar()); 
console.log(Module2.getPrivateVar()); 


