const express=require("express");
const app=express();


let port=8000;


app.listen(port,()=>{
    console.log(`app is listing on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("request received");
//     res.send("this is basic response");
// });

// app.get("/",(req,res)=>{
//     res.send("you contacted root path");

//     })



//     app.get("/apple",(req,res)=>{
//         res.send("you on apple path");
//     })
//     app.get("/banana",(req,res)=>{
//         res.send("you on banana path");
//     })
// //     app.get("*",(req,res)=>{
// //     res.send("this path does not exist");
// // })
// app.post("/",(req,res)=>{
//     res.send("you sent a post request to root");
// });






// app.get("/:username/:id",(req,res)=>{
//     // console.log(req.params);

//     let {username,id}=req.params;
//     res.send(`welcome to the page of @${username} with id ${id}`);
// })


app.get("/serch",(req,res)=>{
    let {q}= req.query;
    if(!q){
        res.send("No serch query");
    }
    res.send(`these are the result for :${q}`)
})