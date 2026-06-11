/*
JavaScript operators are symbols or keywords used to perform operations on values and variables. They are the building blocks of JavaScript expressions and can manipulate data in various ways.*/

/*
Here is your very short and simple version 👇

1️⃣ Arithmetic Operators

Used for math.
+ add | - subtract | * multiply | / divide */

const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);
/*
2️⃣ Assignment Operators */

let n = 10;
n += 5;
n *= 2;
console.log(n);
/*
Assign values.
= assign
+= add & assign
*= multiply & assign
*/
//3️⃣ Comparison Operators


/*
Compare values → return true/false
> greater
=== strict equal (type + value)
Others: <, <=, >=, !==

4️⃣ Logical Operators

Used with boolean values
&& AND (both true)
|| OR (one true)
! NOT (reverse value)

5️⃣ Bitwise Operators

Work on binary numbers
& AND
| OR
^ XOR
~ NOT

6️⃣ Ternary Operator

Short if-else
condition ? value1 : value2
*/

const age =18;
const status = age>=18? "Adult" : "Minor";
console.log(status);
/*

7️⃣ Comma Operator (,)

Runs expressions left → right
Returns last value
*/
let n1, n2
const res = (n1 = 1, n2 = 2, n1 + n2);
console.log(res);
/*
8️⃣ Unary Operators

Work on one value
++ increase
-- decrease
typeof check type

9️⃣ Relational Operators

Check relationship
in property exists
instanceof checks object type

🔟 BigInt Operators

Used for very large numbers
Add n after number
Example: 10n + 20n

1️⃣1️⃣ String Operators

Join strings
+ concatenate
+= append

1️⃣2️⃣ Optional Chaining (?.)

Safely access object property
Prevents error if property not found */