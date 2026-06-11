// let i=0;
// for(let i=1; i<=5;i++){
//     console.log(i);
// }
// for(let i=1; i<=50;i++){
//     if(i%2==0){
//         console.log("Even Number:"+i);
//     }
//     else{
//         console.log("Odd Number:"+i);
//     }
// }
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }
// for(let j=15; j>=1; j=j-2){
//     console.log(j);
// }



// for(let i=0; i<=10; i=i+2){
//     console.log(i);
// }
// for(let j=1; j<=10; j++){
//     console.log(j*5);
// }



// for(let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++)
//         {
//         console.log(j);
//     }
// }

let i=1;
while(i<=5){
    if(i==4){
        break;
    }
    console.log(i);
    i++;

}

let fruits =["Mango","banana", "Apple","Orange","stwabery"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }
fruits.push("PineApple");
fruits.unshift("Papaya");
console.log(fruits);
