// =====================================================
// JAVASCRIPT ARRAYS
// =====================================================


// =====================================================
// 1. ARRAY
// =====================================================

// Definition:
// Array ek special data structure hai jisme hum
// multiple values ko ek hi variable me store kar sakte hain.
//
// Array me different types ka data bhi store kar sakte hain.
//
// Array ka index 0 se start hota hai.


let marks = [91, 23, 5, 5, 67, 7, false, undefined, "Notallow"];


// =====================================================
// 2. ACCESSING ARRAY ELEMENTS
// =====================================================

// Definition:
// Array ke elements ko index number ki help se
// access karte hain.
//
// Index 0 se start hota hai.


console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);
console.log(marks[8]);


// OUTPUT:
//
// 91
// 23
// 5
// 5
// 67
// 7
// false
// undefined
// Notallow



// =====================================================
// 3. COMPLETE ARRAY PRINT
// =====================================================

console.log(marks);

// OUTPUT:
//
// [91, 23, 5, 5, 67, 7, false, undefined, "Notallow"]



// =====================================================
// 4. TYPE OF ARRAY
// =====================================================

// Definition:
// typeof array ka result JavaScript me "object" hota hai.

console.log(typeof marks);

// OUTPUT:
// object



// =====================================================
// 5. ARRAY LENGTH
// =====================================================

// Definition:
// length property array ke total elements ki
// count batati hai.

console.log(marks.length);

// OUTPUT:
// 9



// =====================================================
// 6. CHANGE ARRAY ELEMENT
// =====================================================

// Array mutable hota hai.
// Matlab hum array ke elements ko change kar sakte hain.

marks[0] = 100;

console.log(marks[0]);

// OUTPUT:
// 100



// =====================================================
// 7. ADD ELEMENT - PUSH()
// =====================================================

// Definition:
// push() array ke END me ek ya multiple elements
// add karta hai.

marks.push(88);

console.log(marks);

// OUTPUT:
// [100, 23, 5, 5, 67, 7, false, undefined, "Notallow", 88]



// =====================================================
// 8. REMOVE LAST ELEMENT - POP()
// =====================================================

// Definition:
// pop() array ke LAST element ko remove karta hai.

marks.pop();

console.log(marks);

// OUTPUT:
// [100, 23, 5, 5, 67, 7, false, undefined, "Notallow"]



// =====================================================
// 9. ADD ELEMENT AT START - UNSHIFT()
// =====================================================

// Definition:
// unshift() array ke START me element add karta hai.

marks.unshift(50);

console.log(marks);

// OUTPUT:
// [50, 100, 23, 5, 5, 67, 7, false, undefined, "Notallow"]



// =====================================================
// 10. REMOVE FIRST ELEMENT - SHIFT()
// =====================================================

// Definition:
// shift() array ke FIRST element ko remove karta hai.

marks.shift();

console.log(marks);

// OUTPUT:
// [100, 23, 5, 5, 67, 7, false, undefined, "Notallow"]



// =====================================================
// 11. INCLUDES()
// =====================================================

// Definition:
// includes() check karta hai ki koi value array me
// present hai ya nahi.
//
// Result: true / false

console.log(marks.includes(67));

// OUTPUT:
// true

console.log(marks.includes(500));

// OUTPUT:
// false



// =====================================================
// 12. INDEXOF()
// =====================================================

// Definition:
// indexOf() kisi element ka index return karta hai.
// Agar element nahi mila to -1 return karta hai.

console.log(marks.indexOf(67));

// OUTPUT:
// 4


console.log(marks.indexOf(500));

// OUTPUT:
// -1



// =====================================================
// 13. JOIN()
// =====================================================

// Definition:
// join() array ke elements ko ek string me convert
// karta hai.

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.join(", "));

// OUTPUT:
// Apple, Mango, Banana



// =====================================================
// 14. SLICE()
// =====================================================

// Definition:
// slice() array ka ek part copy karke new array
// return karta hai.
//
// Original array change nahi hota.

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(1, 4));

// OUTPUT:
// [20, 30, 40]



// =====================================================
// 15. SPLICE()
// =====================================================

// Definition:
// splice() array me elements ko add, remove ya
// replace kar sakta hai.
//
// splice() original array ko change karta hai.

let nums = [10, 20, 30, 40];

nums.splice(1, 1);

console.log(nums);

// OUTPUT:
// [10, 30, 40]



// =====================================================
// 16. FOR LOOP WITH ARRAY
// =====================================================

// Array ke saare elements ko print karna.

let students = ["Siddhant", "Vivek", "Rahul"];

for (let i = 0; i < students.length; i++) {

    console.log(students[i]);

}

// OUTPUT:
//
// Siddhant
// Vivek
// Rahul



// =====================================================
// 17. FOR...OF LOOP
// =====================================================

// Definition:
// for...of loop array ki values ko one by one
// access karta hai.

for (let student of students) {

    console.log(student);

}

// OUTPUT:
//
// Siddhant
// Vivek
// Rahul



// =====================================================
// 18. ARRAY OF OBJECTS
// =====================================================

// Array ke andar objects bhi store kar sakte hain.

let studentData = [
    {
        name: "Siddhant",
        age: 20
    },

    {
        name: "Vivek",
        age: 21
    }
];

console.log(studentData[0].name);
console.log(studentData[1].age);

// OUTPUT:
//
// Siddhant
// 21



// =====================================================
// 19. CHECK ARRAY
// =====================================================

// Definition:
// Array.isArray() check karta hai ki given value
// array hai ya nahi.

console.log(Array.isArray(marks));

// OUTPUT:
// true

console.log(Array.isArray("Siddhant"));

// OUTPUT:
// false



// =====================================================
// 20. REVERSE()
// =====================================================

// Definition:
// reverse() array ke elements ka order reverse karta hai.

let numbers2 = [1, 2, 3, 4, 5];

numbers2.reverse();

console.log(numbers2);

// OUTPUT:
// [5, 4, 3, 2, 1]
// =====================================================
// JAVASCRIPT ARRAY - SORT
// =====================================================


// =====================================================
// 1. sort()
// =====================================================

// Definition:
// sort() array ke elements ko order me arrange karta hai.
//
// IMPORTANT:
// JavaScript ka sort() by default elements ko
// String ki tarah compare karta hai.
//
// Isliye numbers ke liye compare function use karna
// better hota hai.


// Example Array

let num = [44, 55, 66, 55, 33, 55];


// =====================================================
// 2. COMPARE FUNCTION
// =====================================================

// Definition:
// compare function sort() ko batata hai ki
// elements ko kis order me arrange karna hai.
//
// a - b:
// Ascending order
//
// b - a:
// Descending order

let compare = (a, b) => {
    return a - b;
};


// =====================================================
// 3. SORT IN ASCENDING ORDER
// =====================================================

num.sort(compare);

console.log(num);


// OUTPUT:
//
// [33, 44, 55, 55, 55, 66]