// function hello(){
//     console.log("hello! WelCome My Home!!!");
// }
// hello();

// function dice(){
//     let diceThrough=Math.floor(Math.random()*6)+1;
//     console.log(diceThrough);
// }
// dice();

function add(a,b){
    let sum= a+b;
    console.log(sum);
}
add(5,7);

function PrintInfo(name,age,marks){
    console.log(` name is ${name} and  age is ${age} and marks is ${marks}`);
}
PrintInfo("priyanka",23,56.78);


function avgOfThreeNum(a,b,c){
    let Avg=parseInt((a+b+c)/3);
    console.log(Avg);
}
avgOfThreeNum(1,4,6.5);

console.log("Table of N")

function Table(n){
    for(let i =n; i<=n*10;i+=n){
        console.log(i);
    }

}
Table(5);


function sum(x,y){
    return x+y;
}
//sum(5,7);
console.log(sum(3,7));  



function isAdult(age){
    if(age>=18){
        return "adult";

    }
    else{
        return "not adult";
    }

}
let check= isAdult(13);
console.log(check);




function outerFun(){
    let x=7;
    let y=9;
    function innerFun(){
        console.log(x);
        console.log(y);
    }
    innerFun();
}
//console.log(outerFun());

const mul=(a,b)=>(
    a*b
);
console.log(mul(5,4));
const cube=(n)=>(
    n*n*n
);
console.log(cube(3));



console.log("Hi ! How are You ?");
setTimeout(()=>{
    console.log("Hi Priyanka and Vishnu");
},4000);
console.log("WelCome to my Home!!!");

console.log("hi");

// setInterval(()=>{
//     console.log("how are you?");
// }, 2000);
// console.log("hello!")

let id=setInterval(()=>{
    console.log("Vishu");
}, 2000);
let id2=setInterval(()=>{
    console.log("Privishnu");
}, 4000);

console.log(clearInterval(id2));