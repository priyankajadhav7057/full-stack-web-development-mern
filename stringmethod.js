let msg= "   hello  ";
console.log(msg.trim()); // remove the space from start and end of the string
console.log(msg.trimStart()); // remove the space from start of the string
console.log(msg.trimEnd()); // remove the space from end of the string  
let name="Priyanka";
console.log(name.toUpperCase()); // convert the string to uppercase
console.log(name.toLowerCase()); // convert the string to lowercase
let str="Hello World";
console.log(str.includes("World")); // check if the string includes "World"
let Vishu="I love on my work";
console.log(Vishu.indexOf("my")); // return the index of the first occurrence of "my"
console.log(Vishu.lastIndexOf("my")); // return the index of the last occurrence of "my"
let chain="     hello word  ";
console.log(chain.toUpperCase().trim()); // method chaining     
let s="hello word";
console.log(s.slice(0,5)); // return the part of the string from index 0 to 5
console.log(s.substring(0,5)); // return the part of the string from index 0 to 5
console.log(s.slice(-2)); // return the last 2 characters of the string
console.log(s.length); // return the length of the string
console.log(s.slice("hello","worst")); // return the part of the string from "hello" to "worst"     
let str1="ilovecoding";
console.log(str1.replace("love","do")); // return the part of the string from "love" to "do"
let arr=[2,3,4,5,6,5];
console.log(arr);
console.log(arr.length); // return the length of the array
console.log(typeof arr); // return the type of the array 
let fruits=["apple","banana","orange"];
console.log(fruits);
console.log(fruits.length); // return the length of the array
console.log(typeof fruits); // return the type of the array 
console.log(fruits[0]="lichi"); // change the first element of the array to "lichi"
console.log(fruits);


let students=["aman","priyanka","vishnu"];
console.log(students);
students.push("sachin"); // add "sachin" to the end of the array
console.log(students);
// students.unshift("sachin"); // add "sachin" to the beginning of the array
// console.log(students);
// students.pop(); // remove the last element of the array
// console.log(students);
// students.shift();
// console.log(students); // remove the first element of the array
students.unshift("privishnu"); // remove "aman" from the array
console.log(students);
students.shift(); // remove the first element of the array
console.log(students);
let block=students.shift(); // remove the first element of the array and return it
console.log(block);
console.log(students);

let color=["red","green","blue","pink","yellow","orange","black"];
console.log(color);
color.splice(4); // remove the element at index 4
console.log(color);
color.splice(0,2); // remove the first element of the array
console.log(color);
color.splice(0,1,"white","grey","sky");
console.log(color); // remove the first element of the array and add "white","grey","sky" at index 0