

// let age = 25;
// age = "twentyFive";

// console.log(age);


//  Data types

// Primitive data types
// 1. Number (It contains any number)
    // let age = 25;
    // let temp = -25;
    // let price = 50.50;

// 2. String (String is textual Data it is always in single or double quotes "")
    // let name = "Tilak";

// 3. Boolean (It can be true or false)
    // let isLoggedIn = true;
    // let hasPermission = false;

// 4. Undefined (If value is not assigned it is undefined)
    // let age;
    // console.log(age);

// 5. BigInt

// 6. Symbol (Unique)


// Structural type

// 1.Object 
    // 1.1 Function
        // Non Data Structure
        // callable
    // 1.2 Arrays (Any type of datatype can be stored in an array in JavaScript)
        // Collection of values
        // const num [2, 3, 4, "Javascript", { name: "Tilak"}];
    // 1.3 Maps
    // 1.4 Set 
    // 1.5 Date


// Structural Root
    // 1 Null (Empty Value)


// Operators (There are 10 types of operators)

/* Assignment operators
    Comparison operators
    Arithmetic operators
    Bitwise operators
    Logical operators
    String operators
    Conditional operators
    Comma operators
    Unary operators
    Relational operators  */

// Assignment Operator

// let x = 10;
// let y;
// y = x;
// console.log(y);

    // Compound Operators

    // let x = 10;
    // let y = 20;

    // x = x + y;

    // x += y;  // x = x + y;
    // x -= y;  // x = x - y;
    // x /= y;  // x = x / y;
    // x *= y;  // x = x * y;


    // console.log(x);

// Arithmetic Operators

// +
// -
// /
// *

    // let x = 10;

    // // x = x + 1;
    // // x += 1;
    // // x++;    // Increment Operator
    // // x--;    // Decrement Operator
    // x ** 2;    // Exponentiation Operator    

    // console.log(x);

// Logical Operators (Mostly used for Boolean)

    // 1. Logical AND &&
        // let happy = true && true;  // it will give true output if both sides are equal else it wil give false
        // console.log(happy);

        // const isLoggedIn = true;
        // const hasPermission = true;

        // if (isLoggedIn && hasPermission) {
        //     //then the code will run if it matches the condition
        //     // for example deleting something or posting something
        // }

        // If the values are not boolean it will return the value of the right side


    // 2. Logical OR || (It will return true if the right side doesnt match)
        // const happy = true || false;
        // console.log(happy);

    // 3. Logical NOT ! (It will make true into false and false into true basically reversing the value)

        // const happy = true;
        // const animal = "cat"; (if used on string it will make it false)
        // console.log(!happy);

// Conditional Operators (Ternary Operators)

    // const userRole = "admin";
    // if (userRole === "admin") {
    //     console.log("You are an admin");
    // }
    // else {
    //     console.log("You are not an admin");
    // }
        // same can be written as
    // condition ? "" : "";

    // const userRole = "admin";
    // userRole === "admin" ? console.log("You are an admin") : console.log("You are not an admin");

// Comparison Operator (It returns Boolean values True or False)

    // Equal (==)
    // Not equal (!=)
    // Strict equal (===)
    // Strict not equal (!==
    // Greater than (>)
    // Greater than or equal (>=)
    // Less than (<)
    // Less tha or equal (<=)

    // console.log(4 == 4);
    // console.log(4 != 4);
    // console.log(4 === "4"); //datatype should be same (coercion is not done)

    // console.log(5 > 4);
    // console.log(5 < 4);
    // console.log(5 >= 4);
    // console.log(5 <= 4);
    // console.log(5 != 4);

    // console.log(3 + 10 * 2); // 23 is answer
    // console.log((3 + 10) * 2); // 26 is answer because of grouping // google operator precedence javascript 

    // console.log(3 > 2 && 2 > 1)

    // console.log(3 > 2 > 1);
    // console.log(true > 1); // answer will be false because associavity is left to right for > 


