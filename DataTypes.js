// Data Types
// JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

// Primitive Datatypes
// Primitive datatypes represent single values and are immutable.

// 1. Number: Represents numeric values (integers and decimals).

let n = 42;
let pi = 3.14;
console.log(n);
console.log(pi);

// 2. String: Represents text enclosed in single or double quotes.

let string = "Hello, World!";
console.log(string);
// 3. Boolean: Represents a logical value (true or false).

let bool= true;
console.log(bool);

// 4. Undefined: A variable that has been declared but not assigned a value.

let notAssigned;
console.log(notAssigned);

// 5. Null: Represents an intentional absence of any value.

 let empty = null;
 console.log(empty);
// 6. Symbol: Represents unique and immutable values, often used as object keys.

 let sym = Symbol('unique');
 console.log(sym);
// 7. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.

 let bigNumber = 123456789012345678901234567890n;
 console.log(bigNumber);



//  Non-Primitive Datatypes
// Non-primitive types are objects and can store collections of data or more complex entities.

// 1. Object: Represents key-value pairs.

let student = {
    name: "Priyanka",
    id:11,
    age: 25

};

console.log(student);

// 2. Array: Represents an ordered list of values.

 let a = ["red", "green", "blue"];
 console.log(a);

// 3. Function: Represents reusable blocks of code.

function fun() {
    console.log("GeeksforGeeks");
}
console.log(fun);

console.log(null === undefined);
console.log(5 > 3 > 2);
console.log(NaN === NaN);
console.log(true == 1);
console.log(undefined > 0);
/*
1️⃣ null === undefined → false

Both are empty values.

Different types.

=== checks type + value → so false.

2️⃣ 5 > 3 > 2 → false

5 > 3 → true

true becomes 1

1 > 2 → false

3️⃣ [] === [] → false

Arrays are objects.

Compared by reference (memory).

Different memory → false.

4️⃣ "10" < "9" → true

Strings compare character by character.

"1" is less than "9" → true.

5️⃣ NaN === NaN → false

NaN is not equal to itself.

Use Number.isNaN() to check.

6️⃣ true == 1 → true

== does type conversion.

true becomes 1.

1 == 1 → true.

7️⃣ undefined > 0 → false

undefined becomes NaN.

Any comparison with NaN → false.

8️⃣ "5" === 5 → false

Different types (string vs number).

=== does not convert type.

9️⃣ [1,2] == [1,2] → false

Arrays compared by memory reference.

Different objects → false.

🔟 Infinity > 1000 → true

Infinity is bigger than any number.
 */

//Assignment

let age= 45;
 age= age+4;
console.log(age); 

let hindi=90;
let marathi=80;
let English=100;
let avg= (hindi+marathi+English ) / 3;
console.log(avg);