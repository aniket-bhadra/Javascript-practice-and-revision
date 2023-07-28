function asynchrounusMine(){
    console.log("before setTimeout")
    setTimeout(()=>{
        console.log("this is setTimeout")
    },1000)
    console.log("after setTimeout")
}
let flag = prompt("enter the char")
function hello(){
    console.log("hello from hello function")
}

if(flag ==='a'){
    asynchrounusMine();
    hello();
}
