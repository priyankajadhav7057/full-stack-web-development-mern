// let n=5;
// for(let i=0; i<n;i++){
//     console.log("hello ,",i);
// }
// console.log(process.argv);


let args =process.argv;
for(let i=2; i<args.length;i++){
    console.log("hello welcome", args[i]);
}

const  someValue=require("./math");
console.log(someValue.sum(2,9));
console.log(someValue.mul(2,9));
console.log(someValue.sub(2,9));

const arr=require("./Fruits")
console.log(arr);
const figlet= require('figlet');
