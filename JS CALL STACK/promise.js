function savetoDb(data){
    return new Promise((success,failure)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            success("success : data was saved to db");
        }
        else{
            failure("failure : data was not saved to db");
        }
    }
);
}
// savetoDb("privishnu");
// console.log(savetoDb);S


savetoDb("privishnu")
.then((result)=>{
    console.log("data saved 1");
    console.log("result promise:",result);
    return savetoDb("helloworld");

})
.then((result )=>{
    console.log("data saved 2");
    console.log("reult promises:",result);
    return savetoDb("hi I am");
})
.then((result )=>{
    console.log("data saved 3");
    console.log("reult promises:",result);
    return savetoDb("what is going on");
})
.catch((error)=>{
    console.log("promises was rejected");
    console.log("error of promise:",error);
})



