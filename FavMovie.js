const favMovie ="Hindi";
let guess = prompt("Guess my favorite movie!");

while((guess != favMovie) && (guess != "quit")){
    guess =promt("wrong guess. please try again");

}
if(guess == favmovie){
    console.log("Congrats !!");
} else{
    console.log("You quit");
}