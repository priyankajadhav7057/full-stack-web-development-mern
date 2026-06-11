// h1= document.querySelector("h1");
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("Yellow",1000,()=>{
//             changeColor("green",1000,()=>{
//                 changeColor("pink",1000,()=>{

//                 });
//             });
//         });
//     });
//  });


 h1= document.querySelector("h1");
 function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(` color Changed to ${color}`);
            resolve("color changed!");
        },delay);
    });
 }


 async function demo(){
   await changeColor("red",1000);
    await changeColor("green",1000);
     await changeColor("yellow",1000);
      await changeColor("purple",1000);
       await changeColor("blue",1000);
 }
demo();




/* 
// color contnusly change!!!!
let h1 = document.querySelector("h1");

let colors = ["red", "orange", "yellow", "green", "pink"];
let index = 0;

setInterval(() => {
    h1.style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1000);
*/