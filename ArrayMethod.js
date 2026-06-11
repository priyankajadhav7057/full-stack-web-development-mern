let arr =[1,3,4,5,6,7,8,9,0,7,,65,2,3,4,5,6,7,8,9,0];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);


// forEach metghod
arr.forEach(function(el){
    console.log(el);
});


let student=[{
    name:"A",
    age:23,
    marks:67,
   
},
{
     name:"B",
    age:23,
    marks:97,
  
},
{
     name:"C",
    age:24,
    marks:27,

}]
function print(Info){
    console.log(Info);
}
student.forEach(print);


student.forEach((arr)=>{
    console.log(arr.name +" is mark"+ arr.marks );
    console.log(arr.name.push="asd");
});
console.log(student);
// map method

let num= [1,2,3,4,5,6,7];
let double=num.map((el)=>{
    // console.log(el);
    return el*el;
})
console.log(double);

let gpa=student.map((el)=>{
    return el.marks/10;
});
console.log(gpa);


// Filter
let nums =[2,3,4,5,6,7,8];
let even=nums.filter((num)=>{
  return  num % 2 == 0;
});
 console.log(even);

 // Every method
 let cal=[2,5,6,7,8,9,3];
 let check= cal.every((num)=>{
        return num > 1;

   // return num>1;
 });
 console.log(check);



 // Some method
 let runarr=[2,3,4,5,6,7,8,91,-1,0];
 let come=runarr.some((num)=>{
    return num<1;
 });
 console.log(come);

 //reduce Methiod
 //it is used for calculate array sum
 
 let newarr=[1,2,3,4,5];
 let reducer=newarr.reduce((acc,el)=>{
    return (acc+el);
 });
 console.log(reducer);
 // finding maximum in array

 let array=[1,2,5,67,89,100,35,4,56,99];
 let maximumcheck=array.reduce((max,el)=>{
    
        if(el>max){
            return el;
        }else{
            return max;
        }
    
 });
 console.log(maximumcheck);


 let mul=[10,20,30,40];
 let number= mul.every((el)=>{
    return el%10==0;
 });
 console.log(number);

 //crete a function to find minimum number in array.
 let mini=[2,3,4,6,7,0,1];
 let result= mini.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
 });
 console.log(result);

 //default parameters

 function sum(a=9,b){
    return a+b;
 };
 let k=sum(1);
 console.log(k);

 //spred

 let namedo=[1,2,3,4,5,6,7,8,9];
 console.log(...namedo);
 console.log(..."priyanka");

 let asrr=[1,2,3,4,5,6,7,7];
 let n =[...asrr];
 console.log(n);
 console.log(asrr)
 console.log(n.push(8));
  console.log(n);


//   Spread with object Literals

let data={
    email:"abcd@gmail.com",
    password:"123",
};
let dataCopy={...data,id:12,name:"priyanka"};
console.log(dataCopy);
console.log(data);

function sum(...arg){
    //arguments
    for(let i=0; i<arguments.length;i++){
        console.log("you gave us:", arg[i]);

    }
}

function min(a,b,c,d){
    console.log(arguments);
}


//rest

function sum(...arg){
    return arg.reduce((acc,el)=>{
        return acc+el;
    });
}