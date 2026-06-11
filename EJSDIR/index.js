const express=require('express');
const app= express();
const port=3000;
 

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
});


app.get("/roledice",(req,res)=>{
    let diceVal =Math.floor(Math.random() * 6)+1;
res.render("roledice.ejs", { diceVal: diceVal });
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});