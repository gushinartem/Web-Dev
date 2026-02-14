
"use strict";

// Hello world!

// alert("hello world!");

// //

// // Variables

// let admin;
// let name;
// name = "John";
// admin = name;

// alert(admin);


// let earth;
// let currentUser;
// // just for birthday



// // Data Types

// let name2 = "Ilya";
// alert(`hello ${1}`);
// alert(`hello ${"name"}`);
// alert(`hello ${name2}`);


// //

// // Interaction: alert, prompt, confirm

// let name3 = prompt("What's your name?" , "dick");
// alert(name3);


// //


// // Basic Operators

// // a = 2 , b = 2, c= 2, d = 1
// // x= 5
// // 
// // 10
// // -1
// // 1
// // 2
// // 6
// // 9px
// // $45
// // 2
// // Nan
// //     -9   5
// // -14
// // 1
// // Nan
// // -2


// let a = prompt("first number?" , 1);
// let b = prompt("second number?" , 2);
// alert(+a + +b);





// // Comparisons

// // true
// // false
// // true
// // true
// // false
// // false
// // false


// //Conditional branching

// //yes
// let answer = prompt("What is the offical name of JavaScript?" , "");
// if (answer == "ECMAScript") {
//     alert("Right!");
// }
// else{
//     alert("You don't know? ECMAScript!");
// }



// let num = prompt("Enter a number:" , 0);
// if(num > 0){
//     alert(1);
// }
// else if(num < 0){
//     alert(-1);
// }
// else{
//     alert(0);
// }




//Logical operators

// 2
// 1 , 2
// null
// 1 , undefined
// 3

let age = prompt("How old are you?" , 18);
if(age >= 14 && age <= 90){
    alert("You are old enough to enter!");
}

if(age < 14 || age > 90){
    alert("You are not old enough or too old to enter!");
}
if(!(age >= 14) && !(age <= 90)){
    alert("You are old enough to enter!");
}



let log = prompt("Enter login:" , "");
if(log == 'Admin'){
    let pass = prompt("Enter password:" , "");
    if(pass == 'TheMaster'){
        alert("Welcome!");
    }
    else if(pass == '' || pass == null){
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}
else if(log == '' || log == null){
    alert("Canceled");
}
else{
    alert("I don't know you");
}


// Loops

// 1 .3 2 1
// 2 . 1 2 3 4 5 
// 1 2 3 4

for(let i = 2;i<10;i+=2){
    alert(i);
}


let i = 0;
while(i<3){
    alert(`number ${i}`);
    i++;
}


while(1){
    let num = prompt("Enter the number", "");
    if((num>100) || (num == null)) break;
    alert("Input again");
}


if(browser == "edge"){
   alert("you’ve got the edge");
}
else if(browser == "chrome" || browser == "firefox" || browser == "safari" || browser == "opera"){
    alert("okay we support these browsers too");
}
else{
    alert("we hope that this page looks ok");
}

switch(a){
    case 0:
        alert(0);
     case 1:
         alert(1); 
      case 2:
      case 3:
           alert("2 ,3");
     default:
          alert("default");
}


// Functions


// no


result = (age > 18) ? true : confirm("Did your parents allow you?");

function min(a,b){
    return (a<b) ? a : b;
}

function pow(x , n){
    for(let i  =1;i<n;i++){
        x *= x;
    }
    return x;
}

let ask = (question , yes , no) =>{
    (confirm(question)) ? yes() : no();
}

ask("Do you agree?" , () => alert("You agreed.") , () => alert("You canceled the execution."));



//


// Objects

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


function isEmpty(obj){
    if(Object.keys(obj).length == 0){
        return true;
    }
    return false;
}


let sum = 0;
let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
};
for(let key in salaries){
    sum += salaries[key];
}


function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
}


// Numbers

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

alert( Math.round(6.35 * 10) / 10 );

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);


let i2 = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );


//Strings


function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") );


function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}



// Map and Set 


function unique(arr) {
  return Array.from(new Set(arr));
}
let map = new Map();

map.set();


let map2 = new Map();

map.set("name", "John");

let keys = Array.from(map2.keys());

keys.push("more");


//Object value , keys

let salaries2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};



function sumSalaries(salaries){
    return Object.values(salaries).reduce((sum , val) => sum + val , 0);
}
console.log(sumSalaries(salaries2));

function count(user){
    return Object.keys(user).length;
}
let user = {
    name: "John",
    age: 30
};


//Destructuring assignment

let {name , age: age2 , isAdmin = false} = user;


function topSalary(salaries){
    let max = 500;
    let n = null;
    for(let [key,value] in Object.entries(salaries)){
        if(value > max) max = value;n = key;
    }
    return n;
}
