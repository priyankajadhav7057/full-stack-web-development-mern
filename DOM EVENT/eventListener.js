let btns=document.querySelectorAll("button");
console.dir(btns);


for(btn of btns){
    //btn.addEventListener("click",sayHello);
    //btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double clicked me");
    });
}

// for(btn of btns){
//     btn.addEventListener("click",function (){
//     console.log("button clicked");

// });

// }

function sayHello(){
    alert("what is This!");
}

function sayName(){
    alert("what is your problem?");
}

let form = document.querySelector("form");
form.addEventListener("submit", function ( event) {
    event.preventDefault();
    alert("form was submitted");
    // let input = document.querySelector("input");
    // console.log(input.value);
    // console.dir(input);


    //internal value acces using this

    let user=this.elements[0];
    let password=this.elements[1];

    // let user=document.querySelector("#user");
    // let password=document.querySelector("#pass");
    console.log(user.value);
    console.log(password.value);
    alert(`hi ${user.value} ,your password is set to ${password.value}`);
    console.dir(form);
});


let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis = document.querySelector("lis");

div.addEventListener("click", function(){
    console.log("div was clicked");
})


ul.addEventListener("click",function(){
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click",function(){
        console.log("li was clicked");
    });


}