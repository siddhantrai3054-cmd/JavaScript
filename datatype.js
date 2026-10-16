// ==================================================
//            JAVASCRIPT - DATA TYPES
// ==================================================

// JavaScript me mainly 2 types ke data types hote hain:
//
// 1. Primitive Data Types
// 2. Non-Primitive Data Type (Object)


// ==================================================
//              1. PRIMITIVE DATA TYPES
// ==================================================

// Primitive data types:
// String
// Number
// Boolean
// BigInt
// Undefined
// Null
// Symbol


// --------------------------------------------------
// 1. Null
// --------------------------------------------------

// null ka matlab hai ki variable ke andar
// koi value nahi hai.

let a = null;


// --------------------------------------------------
// 2. Number
// --------------------------------------------------

// Number me integer aur decimal dono store kar sakte hain.

let b = 3225;


// --------------------------------------------------
// 3. Boolean
// --------------------------------------------------

// Boolean ki sirf 2 values hoti hain:
// true  → Yes / Correct
// false → No / Incorrect

let c = true;


// --------------------------------------------------
// 4. BigInt
// --------------------------------------------------

// BigInt ka use bahut bade numbers ko store karne ke liye
// kiya jata hai.

let d = BigInt("98") + BigInt("3");

console.log(d); // Output: 101n


// --------------------------------------------------
// 5. String
// --------------------------------------------------

// String ka use text store karne ke liye hota hai.

let e = "harry";


// --------------------------------------------------
// 6. Symbol
// --------------------------------------------------

// Symbol ek unique value create karta hai.

let f = Symbol("I am a nice symbol");


// --------------------------------------------------
// 7. Undefined
// --------------------------------------------------

// Jab variable declare kiya jata hai,
// lekin usme koi value assign nahi ki jati,
// to uski value undefined hoti hai.

let g;


// ==================================================
//                 PRINT ALL VALUES
// ==================================================

console.log(a, b, c, d, e, f, g);


// ==================================================
//                TYPE CHECK KARNA
// ==================================================

// typeof operator se hum kisi value ka data type
// check kar sakte hain.

console.log(typeof c);

// Output:
// boolean


// ==================================================
//             2. NON-PRIMITIVE DATA TYPE
//                       OBJECT
// ==================================================

// Object ka use multiple values ko
// key-value pair ke form me store karne ke liye hota hai.

const item = {

    // key : value

    "siddhant": true,

    "harry": false,

    "lovish": 67,

    "Rohan": undefined
};


// ==================================================
//              OBJECT KI VALUES ACCESS
// ==================================================

console.log(item.siddhant);
console.log(item.harry);
console.log(item.lovish);
console.log(item.Rohan);


// Bracket notation se bhi access kar sakte hain.

console.log(item["siddhant"]);
console.log(item["lovish"]);


// ==================================================
//                    SUMMARY
// ==================================================

// Primitive Data Types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. BigInt
// 5. Undefined
// 6. Null
// 7. Symbol
//
// Non-Primitive:
//
// 8. Object