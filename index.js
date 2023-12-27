/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let myVariable=100;
// 2.) Change the value of this variable
myVariable=100+40;
console.log("myVariable:",myVariable);

// 3.) Change the data type of this variable
myVariable="hello World";
console.log("myVariable:",myVariable);

// 4.) Create another variable and the one from above to concatenate
myOtherVariable="whats up";
myVariable=myVariable+myOtherVariable;
console.log("myVariable:",myVariable);

// 5.) Use any of the variables above or create new ones and print using string interpolation
myVariable=`This sentence "${myVariable}" was made using string interpolation`;
console.log(myVariable);

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/
// Valid variable names
let myVariable2 = 42;
let userName = "MICHAEL";
let $price = 99.9999999;
let _count = 5;

// Invalid variable names
// let 1stpointer = i+2; // Cannot start with a digit
// let function = "poop"; // Cannot use reserved keyword
// let my-variable =7; // Cannot use hyphens
// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let s = "Sabrina";
let letterI = s.charAt(2);
console.log(letterI); 

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
let teddy = "Teddy";
let unicode3 = teddy.charCodeAt(2);
console.log(unicode3);

// Using fromCharCode() - make it readable for us :). You'll see!
let readableChar = String.fromCharCode(100);//from teddy
console.log(readableChar); 

// Take your first and last name and concat()
let first="michael";
let last ="esparza";
console.log(first+ ' '+ last);
// Create a string and make it return true using startsWith()
let thatnewnew="hey gurl";
console.log(thatnewnew.startsWith("hey"));


// Now use any variable with endsWith() and return false
console.log(thatnewnew.endsWith("hey"));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
console.log("does ozgur include the word upon ?:"+ozgur.includes("upon"));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
console.log("joshes cow is located at:"+joshHadALittleLambOopsCow.indexOf("cow"));
// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace.";
console.log("vanessa is located at "+vanessa.lastIndexOf("Vanessa"));

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log("the length of nowecantTeo : "+noWeCantTeo.length);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!";
let replaced=replaceGokuWithVegeta.replace("Goku","Vegeta");
console.log(replaced);

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4";
let indexOfWifey = joshIsLookingForWifey.search(/wifey/);
console.log(indexOfWifey);


// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza";
console.log(pizzaSentence.slice(6));
console.log(pizzaSentence.slice(6,26));

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0,-21));

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn";
let billarray= splitTheBill.split(",");
console.log(billarray);


// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
let charactersArray = billarray.map(name => name.split(''));
console.log(charactersArray);

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
console.log(angry.toLowerCase());
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
let basicBroGreeting=basicGreeting.substring(1,4);
console.log(basicBroGreeting);

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.substring(0,10));

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.split('@').pop());// pops off the last elemnt in an array made bu the splitting wit @

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let loveHandlesString = "   Extra Love Baby   ";

// Using trim() to remove extra spaces on both ends
let trimmedString = loveHandlesString.trim();

console.log(trimmedString);

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b && a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
 for (let i=0;i<10;i++){
    console.log("Kens room is spinning");
  
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
for (let i=0;i<20;i++){
    console.log("Teos vision is spinning");

}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let loop=20;
while(loop>0){
    console.log("Teo says im sorry");
    loop --;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = { // i know thats right 
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}

for (let key in whateverQueenBeySaid) {
    console.log(whateverQueenBeySaid[key]);
  }
// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for(let youtookmykindnessoutofcontext in lana){
              console.log(lana[youtookmykindnessoutofcontext]);
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for (let element of tia) {
    console.log(element);
  }

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']
perscholas.forEach(function(name) {
    // Inside the function, create a variable with the string "PS"
    let prefix = "PS";
  
    // Print their name in the console concatenated with the variable
    console.log(`${name} ${prefix}`);
  });

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push() add one or more elements too an array and returns thenew length of the array 
// pop() remones the last elenet fron ana rray and returns the new length of th array 
// unshift() Adds one or more elements to the beginning of an array and returns the new length of the array.
// shift()  Removes the first element from an array and returns that element. This method changes the length of the array.
// concat()Combines two or more arrays and returns a new array.
// splice()Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// slice()Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// sort()Sorts the elements of an array in place and returns the sorted array.
// includes()Determines whether an array includes a certain element, returning 
// indexOf() Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// length Returns the number of elements in an array.

let fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
let newfruits=fruits.join(' ');
console.log(newfruits);
// Remove orange
fruits.pop();
console.log(fruits);

// Add strawberry, kiwi, and grapes at the end
fruits.push("strawberry","kiwi","grapes");
console.log(fruits);

// Remove apple
 fruits = fruits.filter(fruit => fruit !== 'apple');

console.log(fruits);
// Add mango at the beginning of the array
fruits.unshift("mango");
console.log(fruits);

// Add lemon, and grapefruit between mango and banana

fruits.splice(1, 0, 'lemon', 'grapefruit');

console.log(fruits);
// Remove banana and strawberry
fruits.splice(1, 2);

console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
let exoticfruits=["Dragon Fruit","Mangosteen","Durian"];
let allfruits= fruits.concat(exoticfruits);
console.log(allfruits);
// Print the last two exotic fruits without altering the newly concatenated array.
console.log(allfruits.slice(allfruits.length-2));

// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort();
console.log(monalissaIsMessy);

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
mirrorMirrorOnTheWall.reverse();
console.log(mirrorMirrorOnTheWall);

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
// Use filter() to eliminate the bad word
const badWord = "badword";
let filteredSentence = RafaelNoBadWords
  .split(' ') // Split the sentence into an array of words
  .filter(word => !word.toLowerCase().includes(badWord.toLowerCase())) // Filter out the bad word
  .join(' '); // Join the filtered words back into a sentence

console.log(filteredSentence);

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231];
let sum = numbersToAddUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
let copiedfruits=[...fruits];
console.log(copiedfruits)
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
let array1 = [1, 2, 3];
let array2 = ['a', 'b', 'c'];
let connectedSpreadArrays = [...array1, ...array2];

console.log(connectedSpreadArrays);

// Using the variable with the newly connected arrays, use spread operator to add something at the end.
let newconnectedSpreadArrays=[...connectedSpreadArrays, "hey girl hey"];
console.log(newconnectedSpreadArrays);

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
newconnectedSpreadArrays=[ "hey girl hey",...newconnectedSpreadArrays];
console.log(newconnectedSpreadArrays);

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]
console.log(donutShop[1][0][1]);
console.log(donutShop[2][0][0][1][0]);

// Anthony wants applecrumble. Print please!
// Tosi wants ihatethis. :) Print!

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const isTeoAPerson = true;

if (isTeoAPerson) {
  console.log('Teo is a person!');
} else {
  console.log('Teo is not a person!');
}

// If Teo is a person, check if he is a male or a female.
const isTeoMale = true;

// Check if Teo is a male.
if (isTeoMale) {
  console.log('You got it right!');
} else {
  console.log('Wrong. Teo is going to remove you from the class.');
}

// If Teo is a male, check if he is hungry.
const isTeoHungry = true;

// Check if Teo is hungry.
if (isTeoHungry) {
  console.log("Let's buy Teo some tacos!");
} else {
  console.log("He doesn't need to eat.");
}

// Anything else, print 'If Teo is not hungry, am I hungry?'
if (!isTeoHungry) {
  console.log('If Teo is not hungry, am I hungry?');
}

// Create an if/else ternary to check if Gustavo is the coolest.
const isGustavoCoolest = true;

const result = isGustavoCoolest ? 'You got that right!' : 'James wants to argue. He says he\'s the best!';
console.log(result);
// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting() {
    console.log('Hello, ma\'amsir!');
  }
  sayGreeting();

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.

function printMyString(inputString) {
    console.log('This is my ' + inputString);
  }
  printMyString(" Don't play with me haha.");
// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(num1, num2, num3) {
    return num1 + num2 + num3;
  }
console.log(add(88,44,22));

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name) {
    switch (name) {
      case 'Teo':
        return '1st rule: You do not talk about Fight Club.';
      case 'Manara':
        return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.';
      case 'Liv':
        return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
      case 'Devin':
        return '4th rule: Only two guys to a fight.';
      default:
        return 'No shirts.';
    }
  }
  
 
  console.log(fightClub('Teo'));
  console.log(fightClub('Manara'));
  console.log(fightClub('Liv'));
  console.log(fightClub('Devin'));
  console.log(fightClub('John'));

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
    console.log('Hello');
  
    // Return an anonymous function
    return function () {
      console.log('Goodbye');
    };
  }
  let goodbye=hello();
  goodbye();
// Create a function expression with your first name as the variable and then print your first and last name
let printFullName = function() {
    let firstName = 'Michael'; 
    let lastName = 'Esparza';  
    console.log(`${firstName} ${lastName}`);
  };
  
  printFullName();

// Create an arrow function that accepts a number and have it return that number doubled
let doubled=(num)=>{
  return num*2;
}
console.log(doubled(88));

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

let human={
    name:"michael",
    age:29,
    location:"boston"    
}
console.log(human);

// Access the name using dot notation
console.log(`humans name is ${human.name}, thier age is ${human.age}, and thier location is ${human.location}`)


// Access the age using square brackets
console.log(human["age"]);

// Use object destructuring to access location
let { location } = human;
console.log(location);

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0]["ability"]);

// Print cut
console.log(bulbasaur.moves[2]);


// Print Bulbahhhh!!!!!
bulbasaur.sound();


// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height=7;
console.log(bulbasaur);

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1;


// Print an array that contains every single properties in bulbasaur
let propertiesArray = Object.keys(bulbasaur);
console.log(propertiesArray);

// Print every single properties one by one in the console
propertiesArray.forEach(property => {
    console.log(property + ':', bulbasaur[property]);
  });

// Print an array that contains every single values in bulbasaur
const valuesArray = Object.values(bulbasaur);
console.log(valuesArray);