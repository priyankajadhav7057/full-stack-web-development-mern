/* Variables
A variable is like a container that holds data that can be reused or updated 
later in the program.
 In JavaScript, variables are declared using the keywords var, let, or const.*/

//   1) var keyword
//   Variables
// A variable is like a container that holds data that can be reused or
//  updated later in the program. In JavaScript, 
// variables are declared using the keywords var, let, or const.


var num= 123;
console.log(num);

var num= 67;/// reassigning is allowed
console.log(num);
//output is 123 and 67


// 2 )let keyword: let keyword cannot be re-declared in the same scope.

let n =10;
 n=35;// value can be updated
console.log(n);

// 3. const Keyword
const name="Priyanka";
//name="Priyanka  Gaikwad"// this is not allowed and through error
console.log(name);
