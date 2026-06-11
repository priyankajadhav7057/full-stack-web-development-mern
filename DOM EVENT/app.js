let btns= document.querySelectorAll('button');
console.dir(btns);
/* This code for only single button
// btn.onclick=function(){
//     alert("button was clicked");
// }




// function sayHello(){
//     alert("hello");

// }
// btn.onclick=sayHello;
*/

// this code for multiple  button

for(btn of btns){
    btn.onclick=sayHello;
}


function sayHello(){
    alert("hello");

}
// form code


