"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const if = 23;
/*
function logger() {
    console.log("My name is Nick");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);





const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// function declaraion
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1995, 'Nick'));

*/

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired)`)
//         return -1;
//     }

// return retirement;
// return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test 1
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(123, 134, 127);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//     } else {
//         console.log('No team wins...');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(46, 23);

// Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Stevene', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Scmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop(); //last
const popped = friends.pop(); // return deleted
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log("You have a friend called Steven");
}
*/

/*
// Coding Exercise 6: CHALLENGE #2
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 & ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);
*/

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Scmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know anout Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

// const challenge = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`;
// console.log(challenge);

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Scmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDL: true,

    // calcAge: function (birthYear) { // method
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDL ? 'a' : 'no'} DL.`
    }
};
// console.log(jonas['calcAge'](1991));

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// 'Jonas is a 46-year old teacher, and he has a DL.

console.log(jonas.getSummary());
*/

// Coding Exercise 7: CHALLENGE #3
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 98,
    height: 1.69,

    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = (john.mass / (john.height * john.height));
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`);
}
*/

// console.log('Lifting weights repetition 1');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);

}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'number') break;
    console.log(jonas[i], typeof jonas[i]);

}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

// function disemvowel(str) {
//   return str
//     .split(" ")
//     .map(function removeVowels(word) {
//       let newWord = "";
//       for (let i = 0; i < word.length; i++)
//         if (
//           word[i].toLowerCase() == "a" ||
//           word[i].toLowerCase() == "e" ||
//           word[i].toLowerCase() == "u" ||
//           word[i].toLowerCase() == "o" ||
//           word[i].toLowerCase() == "i"
//         )
//           newWord = newWord + "";
//         else newWord = newWord + word[i];

//       return newWord;
//     })
//     .join(" ");
// }

// console.log(disemvowel("This website is for losers LOL!"));

// const decodeMorse = function (morseCode) {
//   let morseCodeNew = "";
//   let morseWord = "";
//   let j = 0;
//   let index = morseCode.indexOf("." || "-");
//   morseCode = morseCode.slice(index);
//   let lastIndexDot = morseCode.lastIndexOf(".");
//   let lastIndexDash = morseCode.lastIndexOf("-");
//   if (lastIndexDash > lastIndexDot)
//     morseCode = morseCode.slice(0, lastIndexDash + 1);
//   else morseCode = morseCode.slice(0, lastIndexDot + 1);
//   morseCode - morseCode.toLowerCase();
//   morseCode = morseCode + " ";
//   for (let i = 0; i < morseCode.length; i++) {
//     morseWord = morseWord + morseCode[i];
//     j++;
//     if ((morseCode[i] == " ") & (j == 2)) {
//       morseWord = morseWord.replace(".", "e");
//       morseWord = morseWord.replace("-", "t");
//       morseCodeNew = morseCodeNew + morseWord;
//       morseWord = "";
//       j = 0;
//     } else if ((morseCode[i] == " ") & (j == 3)) {
//       morseWord = morseWord.replace(".-", "a");
//       morseWord = morseWord.replace("..", "i");
//       morseWord = morseWord.replace("--", "m");
//       morseWord = morseWord.replace("-.", "n");
//       morseCodeNew = morseCodeNew + morseWord;
//       morseWord = "";
//       j = 0;
//     } else if ((morseCode[i] == " ") & (j == 4)) {
//       morseWord = morseWord.replace("-..", "d");
//       morseWord = morseWord.replace("--.", "g");
//       morseWord = morseWord.replace("-.-", "k");
//       morseWord = morseWord.replace("---", "o");
//       morseWord = morseWord.replace(".-.", "r");
//       morseWord = morseWord.replace("...", "s");
//       morseWord = morseWord.replace("..-", "u");
//       morseWord = morseWord.replace(".--", "w");
//       morseCodeNew = morseCodeNew + morseWord;
//       morseWord = "";
//       j = 0;
//     } else if ((morseCode[i] == " ") & (j == 5)) {
//       morseWord = morseWord.replace("-...", "b");
//       morseWord = morseWord.replace("-.-.", "c");
//       morseWord = morseWord.replace("..-.", "f");
//       morseWord = morseWord.replace("....", "h");
//       morseWord = morseWord.replace(".---", "j");
//       morseWord = morseWord.replace(".-..", "l");
//       morseWord = morseWord.replace(".--.", "p");
//       morseWord = morseWord.replace("--.-", "q");
//       morseWord = morseWord.replace("...-", "v");
//       morseWord = morseWord.replace("-..-", "x");
//       morseWord = morseWord.replace("-.--", "y");
//       morseWord = morseWord.replace("--..", "z");
//       morseCodeNew = morseCodeNew + morseWord;
//       morseWord = "";
//       j = 0;
//     } else if ((morseCode[i] == " ") & (j == 6)) {
//       morseWord = morseWord.replace(".----", "1");
//       morseWord = morseWord.replace("..---", "2");
//       morseWord = morseWord.replace("...--", "3");
//       morseWord = morseWord.replace("....-", "4");
//       morseWord = morseWord.replace(".....", "5");
//       morseWord = morseWord.replace("-....", "6");
//       morseWord = morseWord.replace("--...", "7");
//       morseWord = morseWord.replace("---..", "8");
//       morseWord = morseWord.replace("----.", "9");
//       morseWord = morseWord.replace("-----", "0");
//       morseWord = morseWord.replace("-.--.", "(");
//       morseCodeNew = morseCodeNew + morseWord;
//       morseWord = "";
//       j = 0;
//     } else if ((morseCode[i] == " ") & (j > 6)) {
//       morseWord = morseWord.replace("...---...", "SOS");
//       morseWord = morseWord.replace("-.-.--", "!");
//       morseWord = morseWord.replace("..--..", "?");
//       morseWord = morseWord.replace("-.--.-", ")");
//       morseWord = morseWord.replace("--..--", ",");
//       morseWord = morseWord.replace(".----.", "'");
//       morseWord = morseWord.replace("-....-", "-");
//       morseWord = morseWord.replace(".-.-.-", ".");
//       morseCodeNew = morseCodeNew + morseWord;
//       morseWord = "";
//       j = 0;
//     }
//   }
//   morseCodeNew = morseCodeNew.replaceAll("   ", "_");
//   morseCodeNew = morseCodeNew.replaceAll(" ", "");
//   morseCodeNew = morseCodeNew.replaceAll("_", " ");
//   return morseCodeNew.toUpperCase();
// };

// console.log(
//   decodeMorse(
//     "...- .- .-.. ..- . ... ....... --- ..-. ....... --.. . .-. --- ....... .- .-. . ....... .- .-.. .-.. ....... -.-. --- -. ... .. -.. . .-. . -.. ....... - --- ....... -... . ....... . --.- ..- .- .-.."
//   )
// );

// function decodeMorseLetter(letter) {
//   return MORSE_CODE[letter];
// }

// console.log(decodeMorseLetter("Hello World"));

// function filter_list(a) {
//   // Return a new array with the strings filtered out
//   const result = a.filter((n) => typeof n == "number");
//   return result;
// }

// console.log(filter_list([1, "a", 2]));

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

// combine objects
// const objA = { a: 10, b: 20, c: 30 };
// const objB = { a: 3, c: 6, d: 3 };
// const objC = { a: 5, d: 11, e: 8 };
// const objD = { c: 3 };

// function combine(...data) {
//   const result = {};

//   data.forEach((obj) => {
//     for (let [key, value] of Object.entries(obj)) {
//       if (result[key]) {
//         result[key] += value;
//       } else {
//         result[key] = value;
//       }
//     }
//   });
//   return result;
// }

// console.log(combine(objA, objB));

// // check pangram
// function isPangram(string) {
//   let alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   string = string.toLowerCase();
//   for (let i = 0; i < string.length; i++)
//     if (alphabet.includes(string[i])) {
//       let index = alphabet.indexOf(string[i]);
//       alphabet.splice(index, 1);
//     }
//   if (alphabet == "") {
//     console.log("its pangram");
//   } else console.log(alphabet);
// }

// // isPangram("The quick brown fox jumps over the lazy dog.");
// isPangram("Cwm fjord bank glyphs vext quiz is a pangram:");
// // isPangram("The qy dog.");

// filter and sort objcts
// function myLanguages(results) {
//   let result = {};
//   let sort = [];
//   let final = [];
//   for (let [key, value] of Object.entries(results)) {
//     if (value >= 60) {
//       result[key] = value;
//     }
//   }
//   for (let country in result) {
//     sort.push([country, result[country]]);
//   }
//   sort.sort(function (a, b) {
//     return b[1] - a[1];
//   });
//   sort.forEach((x) => final.push(x[0]));
//   return final;
// }

// console.log(
//   myLanguages({
//     Greek: 87,
//     Russian: 2,
//     Chinese: 75,
//     Slovenian: 55,
//     Danish: 98,
//     Dutch: 81,
//   })
// );

// ESHE FILTER OBJECTS
// function pluck(objs, name) {
//   let result = [];
//   objs.forEach((obj) => {
//     for (let [key, value] of Object.entries(obj)) {
//       if (key == name) {
//         result.push(value);
//       }
//     }
//     if (!(name in obj)) {
//       result.push(undefined);
//     }
//   });
//   return result;
// }
// console.log(pluck([{ a: 1, b: 3 }, { a: 2, c: 2 }, { a: 2 }], "b"));

// const whosOnline = (friends) => {
//   let online = [];
//   let offline = [];
//   let away = [];
//   let final = {};
//   friends.forEach((friend) => {
//     if ((friend.status == "online") & (friend.lastActivity <= 10)) {
//       online.push(friend.username);
//     } else if ((friend.status == "online") & (friend.lastActivity > 10)) {
//       away.push(friend.username);
//     } else {
//       offline.push(friend.username);
//     }
//   });
//   if (online != "") {
//     final["online"] = online;
//   }
//   if (offline != "") {
//     final["offline"] = offline;
//   }
//   if (away != "") {
//     final["away"] = away;
//   }
//   return final;
// };

// console.log(
//   whosOnline([
//     {
//       username: "David",
//       status: "online",
//       lastActivity: 10,
//     },
//     {
//       username: "Lucy",
//       status: "offline",
//       lastActivity: 22,
//     },
//     {
//       username: "Bob",
//       status: "online",
//       lastActivity: 104,
//     },
//   ])
// );

// RETURN KATA FOR MARKETING TEAM
// function generateHashtag(str) {
//   const sym = "#";
//   let final = str
//     .split(" ")
//     .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
//     .join("");
//   if ((final != "") & (final.length < 140)) {
//     final = sym + final;
//   } else final = false;
//   return final;
// }
// console.log(generateHashtag(" Hello there thanks for trying my Kata"));

// Multiples of 3 or 5
// function solution(number) {
//   let count = 0;
//   for (let i = 1; i < number; i++) if (i % 3 == 0 || i % 5 == 0) count += i;
//   return count;
// }

// console.log(solution(100));

// Bit Counting
// var countBits = function (n) {
//   let sum = 0;
//   let chislo = n.toString(2);
//   chislo = chislo + "";
//   for (let i = 0; i < chislo.length; i++) sum += Number(chislo[i]);
//   return sum;
// };

// var countBits = (n) => n.toString(2).split("0").join("").length;

// console.log(countBits(50));

// MATH
// function findNb(m) {
//   let n = 0;
//   while (m > 0) {
//     m = m - Math.pow(1 + n, 3);
//     n = n + 1;
//   }
//   if (m == 0) return n;
//   else return -1;
// }

// console.log(findNb(1071235));
// KAAAAAAAAAAAAAAAAAAAAAAAAAK TI ETO DFELAESH???? 7 MIN EACH TASK

// vot piramidka vygladit kak v primere))
// function towerBuilder(nFloors) {
//   let numStars = 2 * nFloors - 1;
//   let tower = [];
//   let numSpace = 0;
//   while (numStars > 0) {
//     tower =
//       '"' +
//       " ".repeat(numSpace) +
//       "*".repeat(numStars) +
//       " ".repeat(numSpace) +
//       '"' +
//       "," +
//       "\n" +
//       tower;
//     numStars -= 2;
//     numSpace++;
//   }
//   return tower.slice(0, -2);
// }

// console.log(towerBuilder(10));

// let prize = Number(
//   prompt("Set the value by selecting a number between 0 and 10")
// );

// let output = `My selection: ${prize}`;

// switch (prize) {
//   case 4:
//     console.log("NEOCH");
//     break;
//   case 5:
//     console.log("POIDET");
//     break;
//   default:
//     console.log("PRIZE NET");
//     break;
// }

// console.log(output);

// ROCK PAPER SCISSORS GAME
// const rps = ["Rock", "Paper", "Scissors"];

// let comp = Math.random() * 2;

// comp = Math.round(comp);

// let compS = rps[comp];

// let player = Number(prompt("Vvedite chislo ot 1 do 3")) - 1;
// let playerS = rps[player];

// let results = [compS, playerS];

// console.log(`Computer choose ${results[0]} \nPlayer choose ${results[1]}`);

// if (results[0] == results[1]) {
//   console.log("TIE");
// } else if ((compS == "Rock") & (playerS == "Scissors")) {
//   console.log("COMPUTER WIN");
// } else if ((compS == "Rock") & (playerS == "Paper")) {
//   console.log("HUMAN WIN");
// } else if ((compS == "Paper") & (playerS == "Scissors")) {
//   console.log("HUMAN WIN");
// } else if ((compS == "Paper") & (playerS == "Rock")) {
//   console.log("COMPUTER WIN");
// } else if ((compS == "Scissors") & (playerS == "Paper")) {
//   console.log("COMPUTER WIN");
// } else if ((compS == "Scissors") & (playerS == "Rock")) {
//   console.log("HUMAN WIN");
// }

// let max = 5;
// let rand = Math.floor(Math.random() * max) + 1;
// let check = false;
// let userG = 0;

// while (check == false) {
//   userG = prompt("Predpoloshite chislo ot 1 do 5");
//   if (userG == rand) {
//     check = true;
//     console.log("ygadal");
//   } else console.log("neygadal");
// }

// // RGB To Hex Conversion

// //1 VERSION
// function rgb(r, g, b) {
//   if (r > 255) {
//     r = 255;
//   } else if (r < 0) r = 0;
//   if (g > 255) {
//     g = 255;
//   } else if (g < 0) g = 0;
//   if (b > 255) {
//     b = 255;
//   } else if (b < 0) b = 0;
//   let red = r.toString(16).padStart(2, "0") + "";
//   let green = g.toString(16).padStart(2, "0") + "";
//   let blue = b.toString(16).padStart(2, "0") + "";
//   let color = red + green + blue;
//   return color.toUpperCase();
// }

// // 2 VERSION
// function rgb(r, g, b) {
//   let trim = function (col) {
//     if (col > 255) {
//       col = 255;
//     } else if (col < 0) col = 0;
//     return col;
//   };
//   r = trim(r);
//   g = trim(g);
//   b = trim(b);
//   let to16 = function (color) {
//     return color.toString(16).padStart(2, "0") + "";
//   };
//   let color = to16(r) + to16(g) + to16(b);
//   return color.toUpperCase();
// }

// console.log(rgb(-243, 35, -500));

// STRING ALL MUTATIONS
// IDEA RANDOMIT POKA NE DYBET OPREDELENNOE KOLICHESTVO I STOPIT PO TAIMNIGY

// VERSION 1

// function permutations(string) {
//   let length = string.length;
//   let count = 0;
//   let newStrings = [];
//   let newStr = "";
//   let num = 0;
//   let sym = "";
//   function factorial(n) {
//     return n != 1 ? n * factorial(n - 1) : 1;
//   }
//   while (newStrings.length < factorial(length)) {
//     for (let i = 0; i < string.length; i++) {
//       num = Math.floor(Math.random() * length);
//       sym = string[num];
//       newStr = newStr + sym;
//     }
//     count++;
//     if (newStrings.includes(newStr)) {
//     } else newStrings.push(newStr);
//     newStr = "";
//   }
//   return newStrings;
// }

// console.log(permutations("ab"));

// Version 2

/*
function permutations(string) {
  let length = string.length;
  let count = 0;
  let newStrings = [];
  let newStr = "";
  let num = 0;
  let sym = "";
  let tempStr = string;
  let newStr1 = "";
  let stop = false;
  function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
  }
  async function process() {
    while (newStrings.length < factorial(length) && !stop) {
      for (let i = 0; i < string.length; i++) {
        num = Math.floor(Math.random() * tempStr.length);
        sym = tempStr[num];
        newStr = newStr + sym;
        newStr1 = tempStr.split("");
        newStr1.splice(num, 1);
        newStr1 = newStr1.join("");
        tempStr = newStr1;
      }
      tempStr = string;
      count++;
      if (newStrings.includes(newStr)) {
      } else newStrings.push(newStr);
      newStr = "";
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  // Start the process and stop it after 3 seconds
  setTimeout(function () {
    stop = true; // Stop the loop after 3 seconds
  }, 5000);

  process(); // Start the loop
  return newStrings;
}

console.log(permutations("ab"));

// Version 3

function permutations(string) {
  let max = 0;
  let count = 0;
  let newStrings = [];
  let newStr = "";
  let num = 0;
  let sym = "";
  let tempStr = string;
  let newStr1 = "";
  let obj = {};
  let originalLength = string.length;

  function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
  }

  function numUniqSymb(str) {
    let result = {};
    let sym = "";
    let value = 0;
    let key = "";
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
      sym = str[i];
      value++;
      if (result[sym]) {
        result[sym] += value;
        value = 0;
      } else {
        result[sym] = value;
        value = 0;
      }
    }
    return result;
  }

  function fac(obj) {
    let zn = 1;
    for (let [key, value] of Object.entries(obj)) {
      zn = zn * factorial(value);
    }
    return factorial(originalLength) / zn;
  }

  obj = numUniqSymb(string);

  max = fac(obj);

  while (newStrings.length < max) {
    for (let i = 0; i < string.length; i++) {
      num = Math.floor(Math.random() * tempStr.length);
      sym = tempStr[num];
      newStr = newStr + sym;
      newStr1 = tempStr.split("");
      newStr1.splice(num, 1);
      newStr1 = newStr1.join("");
      tempStr = newStr1;
    }
    tempStr = string;
    count++;
    if (newStrings.includes(newStr)) {
    } else newStrings.push(newStr);
    newStr = "";
  }
  return newStrings;
}

console.log(permutations("aabb"));
*/

// function rot13(message) {
//   // message = message.toLowerCase();
//   const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
//   const alphabetCapital = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//   let newMessage = "";
//   let nomer = 0;
//   let nomerCapital = 0;
//   let newNomer = 0;
//   let newNomerCapital = 0;
//   for (let i = 0; i < message.length; i++) {
//     nomer = alphabet.indexOf(message[i]);
//     nomerCapital = alphabetCapital.indexOf(message[i]);
//     if (nomer <= 12 && nomer >= 0) {
//       newNomer = nomer + 13;
//       newMessage += alphabet[newNomer];
//       nomer = -1;
//     } else if (nomer > 12) {
//       newNomer = nomer - 13;
//       newMessage += alphabet[newNomer];
//       nomer = -1;
//     } else if (nomerCapital <= 12 && nomerCapital >= 0) {
//       newNomerCapital = nomerCapital + 13;
//       newMessage += alphabetCapital[newNomerCapital];
//       nomerCapital = -1;
//     } else if (nomerCapital > 12) {
//       newNomerCapital = nomerCapital - 13;
//       newMessage += alphabetCapital[newNomerCapital];
//       nomerCapital = -1;
//     } else newMessage += message[i];
//   }
//   return newMessage;
// }

// console.log(rot13(".3MSdc7dh")); // grfg

// CRESTIKI NOLIKI
/*
function isSolved(board) {
  // TODO: Check if the board is solved!
  let line1 = board[0];
  let line2 = board[1];
  let line3 = board[2];
  const isIt1 = (currentValue) => currentValue == 1;
  const isIt2 = (currentValue) => currentValue == 2;
  if (line1.every(isIt1) || line2.every(isIt1) || line3.every(isIt1)) return 1;
  if (line1.every(isIt2) || line2.every(isIt2) || line3.every(isIt2)) return 2;
  for (let i = 0; i < 2; i++)
    if (
      (line1[i] == line2[i] && line1[i] == line3[i]) ||
      (line1[0] == line2[1] && line1[0] == line3[2]) ||
      (line1[2] == line2[1] && line1[2] == line3[0])
    )
      if (line1[i] == 1) return 1;
      else if (line1[i] == 2) return 2;
      else return -1;
  if (line1.includes(0) || line2.includes(0) || line3.includes(0)) return -1;
  else return 0;
}

let test = [
  [1, 1, 1],
  [2, 2, 2],
  [2, 1, 2],
];

console.log(isSolved(test));

// top solution from codewars
// chatgpt cant explain properly
function isSolved(board) {
  board = board.join("-").replace(/,/g, "");
  if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if (/0/.test(board)) return -1;
  return 0;
}

board = [
  [0, 1, 2],
  [1, 2, 0],
  [2, 1, 1],
];
*/
