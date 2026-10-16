// =====================================================
// JAVASCRIPT STRING
// =====================================================


// =====================================================
// 1. STRING
// =====================================================

// Definition:
// String characters/text ka collection hota hai.
// String ko "", '' ya `` (backticks) ke andar likhte hain.

let name = "siddhant";

console.log(name);


// Output:
// siddhant



// =====================================================
// 2. STRING LENGTH
// =====================================================

// Definition:
// .length property string ke andar total characters
// ki count batati hai.

console.log(name.length);


// Output:
// 8
//
// siddhant
// 12345678



// =====================================================
// 3. TEMPLATE LITERAL
// =====================================================

// Definition:
// Template literal string likhne ka modern way hai.
// Iske liye backticks ` ` ka use hota hai.
//
// Template literal ke andar ${variable}
// ka use karke variable ki value directly
// string ke andar insert kar sakte hain.


let s1 = "siddhant";
let s2 = "vivek";

let sentence = `${s1} is a friend of ${s2}`;

console.log(sentence);


// Output:
// siddhant is a friend of vivek



// =====================================================
// 4. NORMAL STRING + VARIABLE
// =====================================================

// Template literal ke bina hum + operator ka
// use karke bhi strings ko combine kar sakte hain.

let sentence2 = s1 + " is a friend of " + s2;

console.log(sentence2);


// Output:
// siddhant is a friend of vivek



// =====================================================
// 5. ESCAPE SEQUENCE - \n
// =====================================================

// Definition:
// \n ek escape sequence hai.
// Iska use new line ke liye hota hai.

let fruit = "banana\napple";

console.log(fruit);


// Output:
//
// banana
// apple



// =====================================================
// 6. ESCAPE SEQUENCE - \t
// =====================================================

// Definition:
// \t tab space create karta hai.

let fruits = "banana\tapple";

console.log(fruits);


// Output:
// banana    apple



// =====================================================
// 7. BACKSLASH
// =====================================================

// Definition:
// \\ ka use actual backslash character
// print karne ke liye hota hai.

let path = "C:\\Users\\Siddhant";

console.log(path);


// Output:
// C:\Users\Siddhant



// =====================================================
// IMPORTANT
// =====================================================

// Tumhare original code me:
//
// let fruit = ` bana \ nna`
//
// Yahan \n ko JavaScript new-line escape sequence
// samajh sakta hai.
//
// Isliye agar tum literally "\n" print karna chahte ho,
// to \\n likhna hoga.

let fruit1 = "bana\\nna";

console.log(fruit1);


// Output:
// bana\nna