// async function harry(){
//     throw "some random error";
//     return "helloword!!";
// }
// harry()
// .then((result)=>{
//     console.log("promises was resolved");
//     console.log("result was:",result);

// })
// .catch((err)=>{
//     console.log("promise rejected",err);


// });


function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve(num);

        },1000);
    });
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
 demo();