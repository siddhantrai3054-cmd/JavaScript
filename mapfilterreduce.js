// ============================================================
//                 JAVASCRIPT MAP() - FULL NOTES
// ============================================================


// ============================================================
// 1. MAP() KYA HAI?
// ============================================================

// Definition:
// map() ek array method hai jo array ke HAR ELEMENT par
// ek function execute karta hai aur ek NAYA ARRAY return karta hai.
//
// Simple words:
// map() = Har element ko process/transform karo
//         aur new array banao.
//
// Syntax:
//
// array.map((element) => {
//     return newValue;
// });


// ============================================================
// 2. BASIC EXAMPLE
// ============================================================

let numbers = [1, 2, 3, 4, 5];

let result = numbers.map((value) => {
    return value * 2;
});

console.log(result);

// Output:
// [2, 4, 6, 8, 10]


// Yaha "value" kya hai?
//
// value koi special keyword nahi hai.
// Ye sirf ek parameter/variable hai.
//
// map() ek-ek karke array ki value "value" me deta hai:
//
// value = 1
// value = 2
// value = 3
// value = 4
// value = 5
//
// Har baar:
// value * 2


// ============================================================
// 3. MAP() ORIGINAL ARRAY KO CHANGE NAHI KARTA
// ============================================================

let arr = [10, 20, 30];

let newArr = arr.map((value) => {
    return value + 5;
});

console.log("Original:", arr);
console.log("New:", newArr);

// Output:
// Original: [10, 20, 30]
// New:      [15, 25, 35]


// ============================================================
// 4. MAP() WITH INDEX
// ============================================================

// map() callback me 3 parameters mil sakte hain:
//
// 1. element
// 2. index
// 3. array

let names = ["Siddhant", "Rahul", "Aman"];

let output = names.map((name, index) => {
    return index + " : " + name;
});

console.log(output);

// Output:
// ["0 : Siddhant", "1 : Rahul", "2 : Aman"]


// ============================================================
// 5. MAP() WITH STRING
// ============================================================

let students = ["siddhant", "rahul", "aman"];

let upperNames = students.map((name) => {
    return name.toUpperCase();
});

console.log(upperNames);

// Output:
// ["SIDDHANT", "RAHUL", "AMAN"]


// ============================================================
// 6. MAP() - SQUARE OF NUMBERS
// ============================================================

let nums = [2, 3, 4, 5];

let square = nums.map((num) => {
    return num * num;
});

console.log(square);

// Output:
// [4, 9, 16, 25]


// ============================================================
// 7. MAP() - EVEN / ODD
// ============================================================

let numbers2 = [1, 2, 3, 4, 5, 6];

let evenOdd = numbers2.map((num) => {

    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

});

console.log(evenOdd);

// Output:
// ["Odd", "Even", "Odd", "Even", "Odd", "Even"]


// ============================================================
// 8. MAP() WITH OBJECTS
// ============================================================

// Ye bahut important hai.
//
// Jab array ke andar objects hote hain,
// map() ka use karke hum objects ki specific property
// nikal sakte hain.

let studentData = [
    { name: "Siddhant", marks: 85 },
    { name: "Rahul", marks: 75 },
    { name: "Aman", marks: 90 }
];

let studentNames = studentData.map((student) => {
    return student.name;
});

console.log(studentNames);

// Output:
// ["Siddhant", "Rahul", "Aman"]


// ============================================================
// 9. OBJECTS KE MARKS ME 5 ADD KARNA
// ============================================================

let students2 = [
    { name: "Siddhant", marks: 80 },
    { name: "Rahul", marks: 70 },
    { name: "Aman", marks: 90 }
];

let updatedMarks = students2.map((student) => {
    return student.marks + 5;
});

console.log(updatedMarks);

// Output:
// [85, 75, 95]


// ============================================================
// 10. MAP() WITH MULTIPLE PROPERTIES
// ============================================================

let students3 = [
    { name: "Siddhant", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Aman", marks: 91 }
];

let result2 = students3.map((student) => {

    return {
        name: student.name,
        marks: student.marks,
        passed: student.marks >= 40
    };

});

console.log(result2);

// Output:
//
// [
//   { name: "Siddhant", marks: 85, passed: true },
//   { name: "Rahul", marks: 72, passed: true },
//   { name: "Aman", marks: 91, passed: true }
// ]


// ============================================================
// 11. HARD EXAMPLE - STUDENT RESULT
// ============================================================

// Ab thoda difficult example.
//
// Hume students ke:
// name
// marks
// percentage
// pass/fail
// grade
//
// sab calculate karna hai.

let students4 = [
    {
        name: "Siddhant",
        marks: [80, 75, 90, 85, 70]
    },

    {
        name: "Rahul",
        marks: [60, 55, 70, 65, 50]
    },

    {
        name: "Aman",
        marks: [35, 40, 30, 45, 38]
    }
];

let result3 = students4.map((student) => {

    // Total marks
    let total = student.marks.reduce((sum, mark) => {
        return sum + mark;
    }, 0);

    // Percentage
    let percentage = total / student.marks.length;

    // Pass / Fail
    let status;

    if (percentage >= 40) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    // Grade
    let grade;

    if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 60) {
        grade = "B";
    }
    else if (percentage >= 40) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    // New object return
    return {
        name: student.name,
        total: total,
        percentage: percentage,
        status: status,
        grade: grade
    };

});

console.log(result3);


// Expected Output:
//
// [
//   {
//     name: "Siddhant",
//     total: 400,
//     percentage: 80,
//     status: "Pass",
//     grade: "A"
//   },
//
//   {
//     name: "Rahul",
//     total: 300,
//     percentage: 60,
//     status: "Pass",
//     grade: "B"
//   },
//
//   {
//     name: "Aman",
//     total: 188,
//     percentage: 37.6,
//     status: "Fail",
//     grade: "F"
//   }
// ]


// ============================================================
// 12. HARD EXAMPLE - PRODUCT PRICE
// ============================================================

// Products ka price hai.
// Hume:
// 1. GST add karna hai
// 2. Final price calculate karna hai

let products44 = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Mouse", price: 1000 }
];

let finalProducts = products44.map((product) => {

    let gst = product.price * 18 / 100;

    let finalPrice = product.price + gst;

    return {
        name: product.name,
        originalPrice: product.price,
        gst: gst,
        finalPrice: finalPrice
    };

});

console.log(finalProducts);


// Output:
//
// [
//   {
//      name: "Laptop",
//      originalPrice: 50000,
//      gst: 9000,
//      finalPrice: 59000
//   },
//   {
//      name: "Mobile",
//      originalPrice: 20000,
//      gst: 3600,
//      finalPrice: 23600
//   },
//   {
//      name: "Mouse",
//      originalPrice: 1000,
//      gst: 180,
//      finalPrice: 1180
//   }
// ]


// ============================================================
// 13. MAP() WITH CONDITIONAL OPERATOR
// ============================================================

let marks2 = [90, 35, 67, 28, 80];

let status2 = marks2.map((mark) => {

    return mark >= 40 ? "Pass" : "Fail";

});

console.log(status2);

// Output:
// ["Pass", "Fail", "Pass", "Fail", "Pass"]


// ============================================================
// 14. MAP() SHORT SYNTAX
// ============================================================

// Normal syntax:

let numbers3 = [1, 2, 3];

let double = numbers3.map((num) => {
    return num * 2;
});

console.log(double);


// Short syntax:

let double2 = numbers3.map(num => num * 2);

console.log(double2);

// Dono ka output same hai:
//
// [2, 4, 6]


// ============================================================
// 15. MAP() ME RETURN BAHUT IMPORTANT HAI
// ============================================================

let numbers4 = [1, 2, 3];

let test = numbers4.map((num) => {

    num * 2;

});

console.log(test);

// Output:
// [undefined, undefined, undefined]
//
// Kyunki humne return nahi kiya.


// Correct:

let test2 = numbers4.map((num) => {

    return num * 2;

});

console.log(test2);

// Output:
// [2, 4, 6]


// ============================================================
// 16. MAP() vs FOREACH()
// ============================================================

let data = [1, 2, 3];


// map() -> NEW ARRAY return karta hai

let mapResult = data.map((num) => {
    return num * 2;
});

console.log(mapResult);

// [2, 4, 6]


// forEach() -> new array return nahi karta

let forEachResult = data.forEach((num) => {
    console.log(num * 2);
});

console.log(forEachResult);

// Output:
// 2
// 4
// 6
// undefined


// ============================================================
// 17. MAP() vs FILTER()
// ============================================================

// map() = Har element ko transform karta hai.
//
// Example:

let numbers5 = [1, 2, 3, 4, 5];

let doubled = numbers5.map((num) => {
    return num * 2;
});

console.log(doubled);

// [2, 4, 6, 8, 10]


// filter() = Condition ke basis par elements select karta hai.
//
// Example:

let evenNumbers = numbers5.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers);

// [2, 4]


// ============================================================
// 18. MAP() + FILTER() TOGETHER
// ============================================================

// Pehle even numbers nikalo
// Phir unko double karo.

let numbers6 = [1, 2, 3, 4, 5, 6];

let answer = numbers6
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2);

console.log(answer);

// Output:
// [4, 8, 12]


// Flow:
//
// [1,2,3,4,5,6]
//       ↓
// filter even
//       ↓
// [2,4,6]
//       ↓
// map × 2
//       ↓
// [4,8,12]


// ============================================================
// 19. MAP() + FILTER() + REDUCE() - HARD
// ============================================================

// Products me se:
// 1. 1000 se greater price wale products lo
// 2. Unke price me 10% discount lagao
// 3. Sabka total nikalo

let products2 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 1500 }
];

let totalPrice = products2

    // Step 1: price > 1000
    .filter((product) => {
        return product.price > 1000;
    })

    // Step 2: 10% discount
    .map((product) => {
        return product.price - (product.price * 10 / 100);
    })

    // Step 3: total
    .reduce((total, price) => {
        return total + price;
    }, 0);

console.log(totalPrice);

// Output:
// 64450


// ============================================================
// 20. MAP() KA MAIN FORMULA
// ============================================================

// array
//   ↓
// map()
//   ↓
// element
//   ↓
// operation
//   ↓
// return
//   ↓
// NEW ARRAY


// Example:
//
// [1, 2, 3, 4]
//      ↓
//    map()
//      ↓
// × 2
//      ↓
// [2, 4, 6, 8]


// ============================================================
// IMPORTANT POINTS
// ============================================================

// 1. map() array ke har element par kaam karta hai.
//
// 2. map() ek NEW ARRAY return karta hai.
//
// 3. Original array normally change nahi hota.
//
// 4. map() me return karna important hai.
//
// 5. map() ka callback:
//    (element, index, array)
//
// 6. "element", "value", "num", "amount"
//    koi special keyword nahi hain.
//    Ye sirf parameter ke naam hain.
//
// 7. map() ka main use:
//    Array ke data ko TRANSFORM karna.
//
// 8. map() ka output generally original array
//    ke same length ka hota hai.
//
//
// ============================================================
// ONE LINE MEMORY
// ============================================================

// map() = "Har element ko transform karo
//          aur new array return karo."



// ============================================================
//                 JAVASCRIPT FILTER() - FULL NOTES
// ============================================================


// ============================================================
// 1. FILTER() - DEFINITION
// ============================================================

// Definition:
//
// filter() JavaScript ka ek built-in Array Method hai.
//
// Iska use array ke elements me se un elements ko
// SELECT karne ke liye hota hai jo kisi given CONDITION
// ko satisfy karte hain.
//
// Simple Definition:
//
// filter() ek NEW ARRAY return karta hai jisme sirf
// wahi elements hote hain jinke liye callback function
// TRUE return karta hai.
//
// Simple Words:
//
// filter() = Condition lagao + Matching elements select karo


// ============================================================
// 2. FILTER() - SYNTAX
// ============================================================

// Syntax:
//
// array.filter((element) => {
//     return condition;
// });
//
// Yaha:
//
// array     = jis array par filter lagana hai
// element   = current element
// condition = jis condition ko check karna hai
//
// Condition TRUE  → element new array me aayega
// Condition FALSE → element new array me nahi aayega


// ============================================================
// 3. BASIC EXAMPLE
// ============================================================

let numbers1 = [5, 12, 18, 25, 30, 7];

let selected = numbers1.filter((item) => {
    return item > 15;
});

console.log(selected);

// Output:
// [18, 25, 30]


// Explanation:
//
// item = 5  → 5 > 15  → false ❌
// item = 12 → 12 > 15 → false ❌
// item = 18 → 18 > 15 → true  ✅
// item = 25 → 25 > 15 → true  ✅
// item = 30 → 30 > 15 → true  ✅
// item = 7  → 7 > 15  → false ❌
//
// TRUE wale elements hi new array me aaye.


// ============================================================
// 4. FILTER() ORIGINAL ARRAY KO CHANGE NAHI KARTA
// ============================================================

// Definition:
//
// filter() generally original array ko modify nahi karta.
// Ye ek NEW ARRAY create karke return karta hai.

let data11 = [10, 20, 30, 40];

let result1 = data.filter((value) => {
    return value >= 30;
});

console.log("Original:", data1);
console.log("New:", result1);

// Output:
//
// Original: [10, 20, 30, 40]
// New: [30, 40]


// ============================================================
// 5. EVEN NUMBER FILTER
// ============================================================

// Definition:
//
// Even number wo number hota hai jo 2 se completely
// divide ho jaye.
//
// Condition:
// number % 2 === 0

let values = [11, 22, 33, 44, 55, 66];

let evenValues = values.filter((number) => {
    return number % 2 === 0;
});

console.log(evenValues);

// Output:
// [22, 44, 66]


// ============================================================
// 6. ODD NUMBER FILTER
// ============================================================

// Definition:
//
// Odd number wo number hota hai jo 2 se completely
// divide nahi hota.
//
// Condition:
// number % 2 !== 0

let digits = [10, 15, 21, 28, 33, 40];

let oddValues = digits.filter((number) => {
    return number % 2 !== 0;
});

console.log(oddValues);

// Output:
// [15, 21, 33]


// ============================================================
// 7. MARKS FILTER
// ============================================================

// Definition:
//
// Hum filter() ka use karke condition ke according
// students ke marks select kar sakte hain.

let marks = [35, 80, 45, 90, 60, 20];

let passedMarks = marks.filter((mark) => {
    return mark >= 50;
});

console.log(passedMarks);

// Output:
// [80, 90, 60]


// ============================================================
// 8. OBJECTS KE SAATH FILTER
// ============================================================

// Definition:
//
// Jab array ke andar objects hote hain,
// tab filter() me object ki properties ke basis par
// condition laga sakte hain.
//
// Example:
// student.marks
// student.age
// student.name

let players = [
    { playerName: "Virat", runs: 85 },
    { playerName: "Rohit", runs: 42 },
    { playerName: "Gill", runs: 95 },
    { playerName: "Pant", runs: 30 }
];

let topPlayers = players.filter((player) => {
    return player.runs >= 50;
});

console.log(topPlayers);

// Output:
//
// [
//   { playerName: "Virat", runs: 85 },
//   { playerName: "Gill", runs: 95 }
// ]


// ============================================================
// 9. OBJECT ME player KYA HAI?
// ============================================================

// filter() ek-ek object ko "player" variable me rakhta hai.
//
// First:
//
// player = {
//     playerName: "Virat",
//     runs: 85
// }
//
// Isliye:
//
// player.runs
//
// ka matlab:
//
// current player ke runs.


// ============================================================
// 10. AGE FILTER
// ============================================================

// Definition:
//
// Hum age ke basis par adults ko select kar sakte hain.

let ages = [14, 19, 25, 12, 30, 16];

let adults = ages.filter((age) => {
    return age >= 18;
});

console.log(adults);

// Output:
// [19, 25, 30]


// ============================================================
// 11. STRING FILTER
// ============================================================

// Definition:
//
// Strings ko bhi condition ke basis par filter kar sakte hain.
//
// Example:
// name.length > 5

let cities = ["Delhi", "Bhopal", "Indore", "Pune", "Mumbai"];

let longCities = cities.filter((city) => {
    return city.length > 5;
});

console.log(longCities);

// Output:
// ["Bhopal", "Indore", "Mumbai"]


// ============================================================
// 12. MULTIPLE CONDITIONS - AND (&&)
// ============================================================

// Definition:
//
// && ka matlab hai AND.
//
// AND me dono conditions TRUE honi chahiye.
//
// Example:
//
// marks >= 60
// AND
// age >= 18

let candidates = [
    { name: "Amit", score: 75, age: 21 },
    { name: "Neha", score: 45, age: 22 },
    { name: "Ravi", score: 82, age: 17 },
    { name: "Karan", score: 90, age: 23 }
];

let eligible = candidates.filter((person) => {

    return person.score >= 60 && person.age >= 18;

});

console.log(eligible);

// Output:
//
// [
//   { name: "Amit", score: 75, age: 21 },
//   { name: "Karan", score: 90, age: 23 }
// ]


// ============================================================
// 13. OR (||) KE SAATH FILTER
// ============================================================

// Definition:
//
// || ka matlab OR hota hai.
//
// OR me agar koi bhi ek condition TRUE ho,
// to complete condition TRUE ho sakti hai.

let students44 = [
    { name: "Siddhant", marks: 85, age: 20 },
    { name: "Rahul", marks: 90, age: 17 },
    { name: "Aman", marks: 60, age: 19 }
];

let selectedStudents = students44.filter((student) => {

    return student.marks >= 90 || student.age >= 18;

});

console.log(selectedStudents);

// Output:
//
// [
//   { name: "Siddhant", marks: 85, age: 20 },
//   { name: "Rahul", marks: 90, age: 17 },
//   { name: "Aman", marks: 60, age: 19 }
// ]


// ============================================================
// 14. FILTER() WITH INDEX
// ============================================================

// Definition:
//
// filter() callback me 3 values mil sakti hain:
//
// 1. element → current element
// 2. index   → current element ka index
// 3. array   → original array

let names44 = ["Siddhant", "Rahul", "Aman", "Vivek"];

let lastNames = names44.filter((name, index) => {
    return index >= 2;
});

console.log(lastNames);

// Output:
// ["Aman", "Vivek"]


// ============================================================
// 15. FILTER() + MAP()
// ============================================================

// Definition:
//
// filter() = data SELECT karta hai.
// map()    = data TRANSFORM karta hai.
//
// Pehle filter se passed students nikalo.
// Phir map se sirf unke names nikalo.

let students23 = [
    { name: "Siddhant", marks: 85 },
    { name: "Rahul", marks: 35 },
    { name: "Aman", marks: 72 },
    { name: "Vivek", marks: 25 }
];

let passedNames = students23
    .filter((student) => {
        return student.marks >= 40;
    })
    .map((student) => {
        return student.name;
    });

console.log(passedNames);

// Output:
// ["Siddhant", "Aman"]


// Flow:
//
// Students
//    ↓
// filter marks >= 40
//    ↓
// Siddhant + Aman
//    ↓
// map student.name
//    ↓
// ["Siddhant", "Aman"]


// ============================================================
// 16. FILTER() + MAP() + REDUCE()
// ============================================================

// Definition:
//
// reduce() array ke multiple elements ko combine karke
// generally ek single value return karta hai.
//
// Yaha:
//
// filter → expensive products select
// map    → 20% discount
// reduce → total price

let products = [
    { name: "Monitor", price: 12000 },
    { name: "Mouse", price: 500 },
    { name: "Chair", price: 8000 },
    { name: "USB", price: 300 }
];

let totalBill = products

    .filter((product) => {
        return product.price > 1000;
    })

    .map((product) => {
        return product.price - (product.price * 20 / 100);
    })

    .reduce((total, price) => {
        return total + price;
    }, 0);

console.log(totalBill);

// Output:
// 16000


// Calculation:
//
// Monitor = 12000 - 20% = 9600
// Chair   =  8000 - 20% = 6400
//
// Total = 9600 + 6400
//       = 16000


// ============================================================
// 17. FILTER() WITH !
// ============================================================

// Definition:
//
// ! ka matlab NOT hota hai.
//
// Ye condition ka opposite result deta hai.

let nums1 = [1, 2, 3, 4, 5, 6];

let oddNumbers = nums1.filter((num) => {
    return !(num % 2 === 0);
});

console.log(oddNumbers);

// Output:
// [1, 3, 5]


// ============================================================
// 18. EMPTY ARRAY RESULT
// ============================================================

// Definition:
//
// Agar koi bhi element condition satisfy nahi karta,
// filter() empty array [] return karta hai.

let numbers23 = [1, 2, 3, 4];

let answer3 = numbers23.filter((num) => {
    return num > 100;
});

console.log(answer3);

// Output:
// []


// ============================================================
// 19. FILTER() VS MAP()
// ============================================================

// Definition:
//
// map():
// Array ke har element ko TRANSFORM karta hai
// aur new array return karta hai.
//
// filter():
// Condition ke basis par elements ko SELECT karta hai
// aur new array return karta hai.


let list = [2, 4, 6, 8, 10];


// MAP

let mapped = list.map((num) => {
    return num + 1;
});

console.log(mapped);

// Output:
// [3, 5, 7, 9, 11]


// FILTER

let filtered = list.filter((num) => {
    return num > 5;
});

console.log(filtered);

// Output:
// [6, 8, 10]


// ============================================================
// 20. FILTER() VS FOREACH()
// ============================================================

// Definition:
//
// forEach() ka main purpose array ke har element par
// koi operation perform karna hai.
//
// filter() ka purpose condition ke basis par
// NEW ARRAY banana hai.


let values2 = [10, 20, 30, 40];


// filter()

let selectedValues = values2.filter((num) => {
    return num >= 30;
});

console.log(selectedValues);

// [30, 40]


// forEach()

values2.forEach((num) => {
    console.log(num);
});

// Output:
// 10
// 20
// 30
// 40


// ============================================================
// 21. FILTER() SHORT SYNTAX
// ============================================================

// Normal syntax:

let scores = [35, 55, 75, 25, 90];

let passed = scores.filter((score) => {
    return score >= 40;
});

console.log(passed);


// Short syntax:

let passed2 = scores.filter(score => score >= 40);

console.log(passed2);

// Dono ka output:
//
// [55, 75, 90]


// ============================================================
// 22. HARD REAL-LIFE EXAMPLE
// ============================================================

// E-commerce website.
//
// Conditions:
//
// 1. Product available hona chahiye
// 2. Price 15000 se kam hona chahiye
// 3. Rating 4 ya usse zyada honi chahiye

let shopItems = [

    {
        productName: "Tablet",
        amount: 12000,
        rating: 4.3,
        available: true
    },

    {
        productName: "Laptop",
        amount: 50000,
        rating: 4.7,
        available: true
    },

    {
        productName: "Earbuds",
        amount: 2500,
        rating: 4.5,
        available: false
    },

    {
        productName: "Smart Watch",
        amount: 7000,
        rating: 4.2,
        available: true
    }

];

let recommended = shopItems.filter((product) => {

    return (
        product.available === true &&
        product.amount < 15000 &&
        product.rating >= 4
    );

});

console.log(recommended);

// Output:
//
// [
//   {
//     productName: "Tablet",
//     amount: 12000,
//     rating: 4.3,
//     available: true
//   },
//
//   {
//     productName: "Smart Watch",
//     amount: 7000,
//     rating: 4.2,
//     available: true
//   }
// ]


// ============================================================
// 23. FILTER() KE CALLBACK PARAMETERS
// ============================================================

// filter() callback ko 3 parameters mil sakte hain:
//
// element → current value
// index   → current value ka index
// array   → original array


let fruits = ["Apple", "Mango", "Banana"];

let check = fruits.filter((fruit, index, array) => {

    console.log("Fruit:", fruit);
    console.log("Index:", index);
    console.log("Array:", array);

    return fruit.length > 5;
});

console.log(check);

// Output:
// ["Banana"]


// ============================================================
// 24. IMPORTANT RULES
// ============================================================

// Rule 1:
// filter() ek NEW ARRAY return karta hai.
//
// Rule 2:
// Original array normally change nahi hota.
//
// Rule 3:
// Condition TRUE → element include ✅
//
// Rule 4:
// Condition FALSE → element exclude ❌
//
// Rule 5:
// filter() ka use mainly DATA SELECT karne ke liye hota hai.
//
// Rule 6:
// Objects ke saath property access kar sakte hain:
//
// student.marks
// student.age
// product.price
// product.rating
//
// Rule 7:
// filter() ka result empty bhi ho sakta hai:
//
// []


// ============================================================
// 25. MAP, FILTER, REDUCE - ONE LINE DEFINITIONS
// ============================================================

// map():
// Har element ko transform karke NEW ARRAY banata hai.
//
// filter():
// Condition ke basis par elements SELECT karke
// NEW ARRAY banata hai.
//
// reduce():
// Multiple elements ko combine karke generally
// SINGLE VALUE return karta hai.
//
// forEach():
// Har element par operation perform karta hai,
// normally new array return nahi karta.


// ============================================================
// 26. FILTER() KA MAIN FORMULA
// ============================================================

// Array
//   ↓
// filter()
//   ↓
// Har element ki condition check
//   ↓
// TRUE  → SELECT ✅
// FALSE → REJECT ❌
//   ↓
// NEW ARRAY


// Example:
//
// [10, 20, 30, 40, 50]
//          ↓
//       > 25
//          ↓
// 10 → false ❌
// 20 → false ❌
// 30 → true  ✅
// 40 → true  ✅
// 50 → true  ✅
//          ↓
// [30, 40, 50]


// ============================================================
// FINAL MEMORY TRICK
// ============================================================

// map()    → CHANGE
// filter() → CHOOSE
// reduce() → COMBINE
// forEach  → LOOP


// filter() = "Condition lagao aur jo element
//             condition satisfy kare, usko new
//             array me rakho."




// ============================================================
//              JAVASCRIPT reduce() - FULL NOTES
//              Completely Different Examples
// ============================================================


// ============================================================
// 1. reduce() - DEFINITION
// ============================================================

// Definition:
//
// reduce() JavaScript ka ek built-in Array Method hai.
//
// Iska use array ke multiple elements ko ek-ek karke
// process karke EK FINAL VALUE banane ke liye hota hai.
//
// Simple Words:
//
// reduce() = Multiple values ko combine karke
//            ek final result banana.
//
// Example:
//
// [5, 10, 15, 20]
//       ↓
//    reduce()
//       ↓
//      50


// ============================================================
// 2. SYNTAX
// ============================================================

// Syntax:
//
// array.reduce((accumulator, currentValue) => {
//     return updatedValue;
// }, initialValue);
//
// accumulator  = ab tak ka result
// currentValue = current element
// initialValue = starting value


// ============================================================
// 3. BASIC EXAMPLE - TOTAL DISTANCE
// ============================================================

let travelDistance = [120, 80, 150, 50];

let totalDistance = travelDistance.reduce((runningTotal, distance) => {
    return runningTotal + distance;
}, 0);

console.log(totalDistance);

// Output:
// 400


// Flow:
//
// 0 + 120 = 120
// 120 + 80 = 200
// 200 + 150 = 350
// 350 + 50 = 400


// ============================================================
// 4. ACCUMULATOR KYA HAI?
// ============================================================

// Definition:
//
// Accumulator wo variable hai jo har step ke baad
// updated result ko store karta hai.
//
// Yaha:
//
// runningTotal = accumulator
//
// Starting:
//
// runningTotal = 0
//
// Phir:
//
// 120
// 200
// 350
// 400


// ============================================================
// 5. CURRENT VALUE KYA HAI?
// ============================================================

// Definition:
//
// currentValue array ka current element hota hai.
//
// Yaha:
//
// distance = currentValue
//
// Values:
//
// 120
// 80
// 150
// 50


// ============================================================
// 6. INITIAL VALUE
// ============================================================

// Definition:
//
// Initial value accumulator ki starting value hoti hai.
//
// Yaha:
//
// }, 0);
//
// 0 starting value hai.


// ============================================================
// 7. TOTAL EXPENSE
// ============================================================

let dailyExpense = [250, 120, 80, 300, 150];

let monthlyTotal = dailyExpense.reduce((wallet, spending) => {
    return wallet + spending;
}, 0);

console.log(monthlyTotal);

// Output:
// 900


// ============================================================
// 8. MULTIPLICATION
// ============================================================

// reduce() se multiplication bhi kar sakte hain.
//
// Multiplication ke liye initial value generally 1 hoti hai.

let factors = [2, 3, 4];

let multipliedValue = factors.reduce((answer, factor) => {
    return answer * factor;
}, 1);

console.log(multipliedValue);

// Output:
// 24
//
// 1 × 2 = 2
// 2 × 3 = 6
// 6 × 4 = 24


// ============================================================
// 9. MAXIMUM TEMPERATURE
// ============================================================

let temperatures = [32, 38, 29, 41, 35, 39];

let hottestDay = temperatures.reduce((highest, currentTemp) => {

    if (currentTemp > highest) {
        return currentTemp;
    }

    return highest;

}, temperatures[0]);

console.log(hottestDay);

// Output:
// 41


// ============================================================
// 10. MINIMUM TEMPERATURE
// ============================================================

let weatherData = [28, 24, 31, 19, 26, 22];

let coldestDay = weatherData.reduce((lowest, currentTemp) => {

    if (currentTemp < lowest) {
        return currentTemp;
    }

    return lowest;

}, weatherData[0]);

console.log(coldestDay);

// Output:
// 19


// ============================================================
// 11. TOTAL TIME
// ============================================================

// Different activities me kitna time laga?

let activityTime = [45, 30, 60, 25, 40];

let totalTime = activityTime.reduce((minutes, currentTime) => {
    return minutes + currentTime;
}, 0);

console.log(totalTime);

// Output:
// 200 minutes


// ============================================================
// 12. OBJECTS KE SAATH REDUCE()
// ============================================================

// Definition:
//
// Agar array ke andar objects hain,
// to reduce() se kisi property ka total nikal sakte hain.

let invoices = [
    { service: "Internet", charge: 799 },
    { service: "Electricity", charge: 1450 },
    { service: "Water", charge: 450 },
    { service: "Gas", charge: 900 }
];

let totalCharges = invoices.reduce((amountPaid, billItem) => {
    return amountPaid + billItem.charge;
}, 0);

console.log(totalCharges);

// Output:
// 3599


// Flow:
//
// 0 + 799  = 799
// 799 + 1450 = 2249
// 2249 + 450 = 2699
// 2699 + 900 = 3599


// ============================================================
// 13. EMPLOYEE SALARY TOTAL
// ============================================================

let employees = [
    { employee: "Arjun", income: 35000 },
    { employee: "Meera", income: 42000 },
    { employee: "Kabir", income: 38000 }
];

let payroll = employees.reduce((companyCost, worker) => {
    return companyCost + worker.income;
}, 0);

console.log(payroll);

// Output:
// 115000


// ============================================================
// 14. SHOPPING CART - QUANTITY
// ============================================================

// Har product ki quantity aur price hai.

let basket = [
    { product: "Notebook", rate: 80, pieces: 3 },
    { product: "Pen", rate: 20, pieces: 5 },
    { product: "Bag", rate: 900, pieces: 1 }
];

let basketCost = basket.reduce((grandTotal, entry) => {

    let currentCost = entry.rate * entry.pieces;

    return grandTotal + currentCost;

}, 0);

console.log(basketCost);

// Calculation:
//
// Notebook → 80 × 3 = 240
// Pen      → 20 × 5 = 100
// Bag      → 900 × 1 = 900
//
// Total = 1240


// ============================================================
// 15. COUNT ITEMS
// ============================================================

// reduce() ka use counting ke liye bhi kar sakte hain.

let books = [
    "Math",
    "Physics",
    "Chemistry",
    "English",
    "Computer"
];

let bookCount = books.reduce((counter) => {
    return counter + 1;
}, 0);

console.log(bookCount);

// Output:
// 5


// ============================================================
// 16. COUNT POSITIVE NUMBERS
// ============================================================

let measurements = [-5, 12, -3, 8, 20, -10, 7];

let positiveCount = measurements.reduce((counter, number) => {

    if (number > 0) {
        return counter + 1;
    }

    return counter;

}, 0);

console.log(positiveCount);

// Output:
// 4
//
// Positive:
// 12, 8, 20, 7


// ============================================================
// 17. COUNT NEGATIVE NUMBERS
// ============================================================

let readings = [5, -2, 8, -7, -1, 10];

let negativeCount = readings.reduce((counter, value) => {

    if (value < 0) {
        return counter + 1;
    }

    return counter;

}, 0);

console.log(negativeCount);

// Output:
// 3


// ============================================================
// 18. STRING COMBINE
// ============================================================

let words = ["JavaScript", "is", "easy", "to", "learn"];

let sentence = words.reduce((text, word) => {
    return text + " " + word;
}, "");

console.log(sentence);

// Output:
// JavaScript is easy to learn


// ============================================================
// 19. TOTAL POPULATION
// ============================================================

let towns = [
    { place: "Bhopal", population: 1800000 },
    { place: "Indore", population: 2200000 },
    { place: "Sagar", population: 400000 }
];

let totalPopulation = towns.reduce((populationSum, town) => {
    return populationSum + town.population;
}, 0);

console.log(totalPopulation);

// Output:
// 4400000


// ============================================================
// 20. HARD EXAMPLE - FREQUENCY COUNT
// ============================================================

// Definition:
//
// Frequency ka matlab hai koi value kitni baar
// repeat hui hai.

let colors = [
    "red",
    "blue",
    "red",
    "green",
    "blue",
    "red"
];

let colorCount = colors.reduce((counter, color) => {

    if (counter[color]) {
        counter[color] = counter[color] + 1;
    }
    else {
        counter[color] = 1;
    }

    return counter;

}, {});

console.log(colorCount);

// Output:
//
// {
//     red: 3,
//     blue: 2,
//     green: 1
// }


// ============================================================
// 21. HARD EXAMPLE - TOTAL MARKS
// ============================================================

let examResult = [
    { subject: "Math", score: 88 },
    { subject: "Physics", score: 76 },
    { subject: "Chemistry", score: 91 },
    { subject: "English", score: 82 }
];

let scoreTotal = examResult.reduce((totalScore, subjectData) => {
    return totalScore + subjectData.score;
}, 0);

console.log(scoreTotal);

// Output:
// 337


// ============================================================
// 22. HARD EXAMPLE - HIGHEST SALARY
// ============================================================

let staff = [
    { person: "Riya", salary: 45000 },
    { person: "Dev", salary: 62000 },
    { person: "Nikhil", salary: 51000 },
    { person: "Pooja", salary: 70000 }
];

let highestSalary = staff.reduce((highest, member) => {

    if (member.salary > highest.salary) {
        return member;
    }

    return highest;

}, staff[0]);

console.log(highestSalary);

// Output:
//
// {
//     person: "Pooja",
//     salary: 70000
// }


// ============================================================
// 23. FILTER + REDUCE
// ============================================================

// Example:
//
// Pehle sirf positive numbers select karo.
// Phir unka total nikalo.

let readings2 = [-10, 20, -5, 30, 15, -2];

let positiveTotal = readings2

    .filter((reading) => {
        return reading > 0;
    })

    .reduce((sumValue, reading) => {
        return sumValue + reading;
    }, 0);

console.log(positiveTotal);

// Output:
// 65
//
// 20 + 30 + 15 = 65


// ============================================================
// 24. MAP + FILTER + REDUCE
// ============================================================

// Example:
//
// 1. 1000 se zyada wale expenses lo
// 2. Har expense par 5% tax add karo
// 3. Final total nikalo

let expenses = [
    { title: "Rent", amount: 15000 },
    { title: "Food", amount: 800 },
    { title: "Travel", amount: 2500 },
    { title: "Electricity", amount: 1800 }
];

let finalExpense = expenses

    .filter((record) => {
        return record.amount > 1000;
    })

    .map((record) => {
        return record.amount + (record.amount * 5 / 100);
    })

    .reduce((sumAmount, amount) => {
        return sumAmount + amount;
    }, 0);

console.log(finalExpense);

// Calculation:
//
// Rent:
// 15000 + 5% = 15750
//
// Travel:
// 2500 + 5% = 2625
//
// Electricity:
// 1800 + 5% = 1890
//
// Total:
// 15750 + 2625 + 1890
// = 20265


// ============================================================
// 25. REDUCE() CALLBACK KE PARAMETERS
// ============================================================

// reduce() callback me normally 4 parameters ho sakte hain:
//
// 1. accumulator
// 2. currentValue
// 3. currentIndex
// 4. array


let route = [15, 25, 35];

let routeTotal = route.reduce(
    (totalDistance, currentDistance, index, originalArray) => {

        console.log("Index:", index);
        console.log("Current:", currentDistance);
        console.log("Array:", originalArray);

        return totalDistance + currentDistance;

    },
    0
);

console.log("Final:", routeTotal);

// Output:
//
// Index: 0
// Current: 15
// Index: 1
// Current: 25
// Index: 2
// Current: 35
// Final: 75


// ============================================================
// 26. SHORT SYNTAX
// ============================================================

// Normal:

let heights = [10, 20, 30];

let heightTotal = heights.reduce((sum, height) => {
    return sum + height;
}, 0);

console.log(heightTotal);


// Short:

let heightTotal2 = heights.reduce((sum, height) => sum + height, 0);

console.log(heightTotal2);

// Output:
// 60


// ============================================================
// 27. MAP vs FILTER vs REDUCE
// ============================================================

// map():
// Data ko TRANSFORM / CHANGE karta hai.
//
// filter():
// Data ko SELECT / CHOOSE karta hai.
//
// reduce():
// Data ko COMBINE karke FINAL RESULT banata hai.
//
// forEach():
// Har element par operation perform karta hai.


// Example:
//
// map:
// [1,2,3] → [2,4,6]
//
// filter:
// [1,2,3] → [2,3]
//
// reduce:
// [1,2,3] → 6


// ============================================================
// 28. IMPORTANT TERMS
// ============================================================

// accumulator:
// Ab tak ka result.
//
// currentValue:
// Current array element.
//
// initialValue:
// Starting value.
//
// return:
// Updated accumulator.


/*
==============================================================
FINAL MEMORY TRICK
==============================================================

map()    → CHANGE
filter() → SELECT
reduce() → COMBINE
forEach  → LOOP

==============================================================
REDUCE() KI ONE-LINE DEFINITION
==============================================================

reduce() array ke multiple elements ko ek-ek karke
process karta hai aur unhe generally ek final
value/result me convert karta hai.

==============================================================
*/