

// =====================================================
// JAVASCRIPT LOOPS
// =====================================================


// =====================================================
// 1. FOR LOOP
// =====================================================

// Definition:
// for loop ka use code ko baar-baar execute karne ke
// liye hota hai, jab repetitions ka idea ho.

console.log("===== FOR LOOP =====");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5



// =====================================================
// 2. WHILE LOOP
// =====================================================

// Definition:
// while loop tab tak execute hota hai jab tak
// condition true hoti hai.

console.log("===== WHILE LOOP =====");

let a = 1;

while (a <= 5) {
    console.log(a);

    a++;
}

// Output:
// 1
// 2
// 3
// 4
// 5



// =====================================================
// 3. DO-WHILE LOOP
// =====================================================

// Definition:
// do-while loop mein code kam se kam ek baar
// execute hota hai.

console.log("===== DO-WHILE LOOP =====");

let b = 1;

do {
    console.log(b);

    b++;
} while (b <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5



// =====================================================
// 4. FOR...OF LOOP
// =====================================================

// Definition:
// for...of loop iterable ki values ko
// ek-ek karke access karta hai.

console.log("===== FOR...OF LOOP =====");

let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// Apple
// Mango
// Banana



// =====================================================
// 5. FOR...IN LOOP
// =====================================================

// Definition:
// for...in loop object ki keys/properties ko
// ek-ek karke access karta hai.

console.log("===== FOR...IN LOOP =====");

let student = {
    name: "Siddhant",
    age: 20,
    branch: "CSE"
};

for (let key in student) {
    console.log(key, "=", student[key]);
}

// Output:
// name = Siddhant
// age = 20
// branch = CSE



// =====================================================
// 6. NESTED LOOP
// =====================================================

// Definition:
// Ek loop ke andar doosra loop ho,
// to use nested loop kehte hain.

console.log("===== NESTED LOOP =====");

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }
}

// Output:
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3



// =====================================================
// 7. BREAK
// =====================================================

// Definition:
// break loop ko turant stop karta hai.

console.log("===== BREAK =====");

for (let i = 1; i <= 10; i++) {

    if (i == 5) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4



// =====================================================
// 8. CONTINUE
// =====================================================

// Definition:
// continue current iteration ko skip karta hai
// aur next iteration par chala jata hai.

console.log("===== CONTINUE =====");

for (let i = 1; i <= 5; i++) {

    if (i == 3) {
        continue;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5