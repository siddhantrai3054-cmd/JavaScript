// =====================================================
// JAVASCRIPT STRING METHODS
// =====================================================


// String
let name = "siddhant";


// =====================================================
// 1. toUpperCase()
// =====================================================

// Definition:
// toUpperCase() string ke saare characters ko
// CAPITAL LETTERS me convert karta hai.

console.log(name.toUpperCase());

// Output:
// SIDDHANT



// =====================================================
// 2. toLowerCase()
// =====================================================

// Definition:
// toLowerCase() string ke saare characters ko
// small letters me convert karta hai.

console.log(name.toLowerCase());

// Output:
// siddhant



// =====================================================
// 3. slice()
// =====================================================

// Definition:
// slice() string ke kisi particular part ko
// extract/cut karke return karta hai.
//
// Syntax:
// string.slice(start, end)
//
// start → jahan se start karna hai
// end   → jahan tak jana hai
// end index include nahi hota.


console.log(name.slice(2, 4));

// Output:
// dd


// Index:
// s i d d h a n t
// 0 1 2 3 4 5 6 7
//
// slice(2, 4)
// index 2 se start
// index 4 se pehle tak
//
// Result = "dd"



console.log(name.slice(2));

// Output:
// ddhant

// slice(2)
// index 2 se lekar string ke end tak.



// =====================================================
// 4. replace()
// =====================================================

// Definition:
// replace() string ke andar kisi particular
// text ko kisi naye text se replace karta hai.
//
// Syntax:
// string.replace(oldValue, newValue)


console.log(name.replace("sidd", "medd"));

// Output:
// medd hant
//
// Actually:
// "siddhant"
//    ↓
// "meddhant"


// =====================================================
// IMPORTANT
// =====================================================

// Tumne likha:
//
// name.slica(2,4)
//
// Ye WRONG hai.
//
// Correct:
//
// name.slice(2,4)



// =====================================================
// COMPLETE OUTPUT
// =====================================================

// SIDDHANT
// siddhant
// dd
// ddhant
// meddhant


// =====================================================
// JAVASCRIPT STRING METHODS
// =====================================================

let name = "Siddhant Rai";


// =====================================================
// 1. length
// =====================================================

// Definition:
// length property string ke total characters ki
// count batati hai.

console.log(name.length);

// Output:
// 12



// =====================================================
// 2. toUpperCase()
// =====================================================

// Definition:
// String ko CAPITAL LETTERS me convert karta hai.

console.log(name.toUpperCase());

// Output:
// SIDDHANT RAI



// =====================================================
// 3. toLowerCase()
// =====================================================

// Definition:
// String ko small letters me convert karta hai.

console.log(name.toLowerCase());

// Output:
// siddhant rai



// =====================================================
// 4. slice()
// =====================================================

// Definition:
// String ka ek particular part nikalta hai.
//
// Syntax:
// slice(start, end)

console.log(name.slice(0, 8));

// Output:
// Siddhant


console.log(name.slice(9));

// Output:
// Rai



// =====================================================
// 5. replace()
// =====================================================

// Definition:
// String ke kisi text ko dusre text se replace karta hai.

console.log(name.replace("Siddhant", "Rahul"));

// Output:
// Rahul Rai



// =====================================================
// 6. concat()
// =====================================================

// Definition:
// Do ya do se zyada strings ko combine karta hai.

let firstName = "Siddhant";
let lastName = "Rai";

console.log(firstName.concat(" ", lastName));

// Output:
// Siddhant Rai



// =====================================================
// 7. trim()
// =====================================================

// Definition:
// String ke starting aur ending ke extra spaces
// ko remove karta hai.

let text = "   Hello World   ";

console.log(text.trim());

// Output:
// Hello World



// =====================================================
// 8. trimStart()
// =====================================================

// Definition:
// Sirf starting ke extra spaces remove karta hai.

console.log(text.trimStart());

// Output:
// Hello World   



// =====================================================
// 9. trimEnd()
// =====================================================

// Definition:
// Sirf ending ke extra spaces remove karta hai.

console.log(text.trimEnd());

// Output:
//    Hello World



// =====================================================
// 10. charAt()
// =====================================================

// Definition:
// Kisi particular index par present character
// ko return karta hai.

console.log(name.charAt(0));

// Output:
// S


console.log(name.charAt(3));

// Output:
// d



// =====================================================
// 11. charCodeAt()
// =====================================================

// Definition:
// Kisi character ka Unicode value return karta hai.

console.log(name.charCodeAt(0));

// Output:
// 83



// =====================================================
// 12. includes()
// =====================================================

// Definition:
// Check karta hai ki string ke andar particular
// text present hai ya nahi.
//
// Result: true / false

console.log(name.includes("Siddhant"));

// Output:
// true


console.log(name.includes("Rahul"));

// Output:
// false



// =====================================================
// 13. startsWith()
// =====================================================

// Definition:
// Check karta hai ki string kisi particular
// text se start hoti hai ya nahi.

console.log(name.startsWith("Sidd"));

// Output:
// true



// =====================================================
// 14. endsWith()
// =====================================================

// Definition:
// Check karta hai ki string kisi particular
// text par end hoti hai ya nahi.

console.log(name.endsWith("Rai"));

// Output:
// true



// =====================================================
// 15. indexOf()
// =====================================================

// Definition:
// String me kisi text/character ka first index
// batata hai.

console.log(name.indexOf("d"));

// Output:
// 2



// =====================================================
// 16. lastIndexOf()
// =====================================================

// Definition:
// String me kisi character/text ka last occurrence
// ka index batata hai.

let word = "banana";

console.log(word.lastIndexOf("a"));

// Output:
// 5



// =====================================================
// 17. repeat()
// =====================================================

// Definition:
// String ko given number of times repeat karta hai.

console.log("Hi ".repeat(3));

// Output:
// Hi Hi Hi



// =====================================================
// 18. split()
// =====================================================

// Definition:
// String ko array me convert karta hai.

let fruits = "Apple,Mango,Banana";

console.log(fruits.split(","));

// Output:
// [ 'Apple', 'Mango', 'Banana' ]



// =====================================================
// 19. startsWith()
// =====================================================

console.log("JavaScript".startsWith("Java"));

// Output:
// true



// =====================================================
// 20. endsWith()
// =====================================================

console.log("JavaScript".endsWith("Script"));

// Output:
// true