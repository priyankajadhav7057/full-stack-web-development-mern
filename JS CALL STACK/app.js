function one (){
    return 1;
}
function two(){
    return one() + one();
}
function three() {
    let ans =two()+ one();
console.log(ans);
}

three();
console.log("this is output");



setTimeout( function(){
    console.log("priyanka");

},900);
console.log("hello! hi!!!");