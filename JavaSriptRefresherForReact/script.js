// Variables: We can declare variables in JS with three keywords i.e: var, let & const

var a = 10;
var a = 67;
// console.log(a);// 67

let b = 13;
// console.log(b);// 13

const c = 25;
// c = 24; this will cause error
// console.log(c);// 25

//================><====================\\

// Datatypes:> two types:> primitives & non-primitives

// primitives: Number, string, bolean, null ,undefined, symbol, bigint

// Non-primitive: Objects, Arrays, functions

//================><====================\\

// Funtions: 
// function hello(){ // function decleration
//     return "hello world";
// }

// const hello = function(){ // function expression
//     return "hello world";
// }

const hello = ()=> "hello wro"; // Arrow function

// console.log(hello());

//================><====================\\

//Objects:

let employ = {
    name: "Abdal",
    age: 23,
    func : function myFunc(number){
        console.log("the number is: " + number)
    }
}

// console.log();
employ.func(7)

// document.addEventListener("click",()=>{
//     confirm('clicked');
// })

let array = ["Abdal",23,true];

// let [name, ...rest] = array;

// console.log(name);
// console.log(rest);

let obj = {
    name : "Abdalhu",
    age : 23,
    isYoung: " "
}

let {name,age,isYoung = false} = obj;

console.log(name,age, isYoung);





