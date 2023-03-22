/* JS basic Program. */

// Network requst our background runnig.
console.log('Namaste Love Babber sir');

// Fix value jese java me final keyword
     // const number = 12;
     // number = 13;
     // console.log(number + " fix value");

// Variables.

// Integer int
let Number_1 = 50;
let Number_2 = 40;
let count = Number_1 + Number_2;
console.log(count + " All Count");

// float 
let item_0 = 10.0;
let item_1 = 4.5;
let pack = item_0 - item_1;
console.log(pack + " subtraction items");

// Boolean
let Age = 25;
let Age_2 = 21;
let chack = Age > Age_2;  //this line >
console.log(chack + " you Age");

let Age_0 = 25;
let Age_1 = 21;
let chack_all = Age_0 < Age_1;  //this line <
console.log(chack_all + " you Age");

// String
let F_Name = "vikash ";
let L_Name = "kushwaha";
let add = F_Name + L_Name;
console.log("Your Name: " + add);

// null
let N = null;
let M = " kushwaha";
let data = N + M;
console.log("your data " + data);

//Dynamic Typing
let Number_0 = 20;
Number_0 = "vikash";
console.log(Number_0);

// Ternary Operator.
let age = 20;
let status = (age >= 25) ? "Yes Vote" : "No Vote";
console.log("Your Resulat: " + status);

/*Start Logical Operator
     ADN && सब सही होनी चाहिए
     OR || एक भी सही होगी तो भी चलेगा
     NOT ! सच को झूठ झूठ को सच
*/   

let book_1 = 50;
let book_2 = 20;

//  ADN && सब सही होनी चाहिए
if (book_1 < book_2 && book_1 > book_2) {
     console.log("book Right AND" + book_1);
} 
else{
     console.log("invalide &&");
}

//  OR || एक भी सही होगी तो भी चलेगा
if (book_1 < book_2 || book_1 > book_2) {
     console.log("book Right OR");
} 
else{
     console.log("invalide ||");
}

//   NOT ! सच को झूठ झूठ को सच
if (book_1 < book_2 != book_1 > book_2) {
     console.log("book Right NOT");
} 
else{
     console.log("invalide !");
}



/* Bitwise Operator
   AND &
   OR  |
*/

/* Comparison
  >
  <
  >=
  <=
  ===
  !==
*/




/* Control Statements
  if-else
  Switch case
*/

let marks = 98;

if (marks == 9) {
     console.log("fail A");
}
else if (marks == 85){
     console.log("fail B");
}
else if (marks == 75){
     console.log("fail C");
}
else if (marks == 55) {
     console.log("fail D");
}
else if (marks == 98) {
     console.log("pass! E")
}
else{
     console.log("invalide");
}


let box = 1;

switch(box < 5) {
    case 1: console.log("box 1");
    break;
    case 2: console.log("box 2");
    break;
    case 3: console.log("box 3");
    break;
    default: console.log("Empaty");
}

/* for Loop 
   While Loop
   do while Loop
   Loop is a Repetition Task
*/   
console.log("\n -----For Loop------- \n")
for (let A = 0; A < 5; A = A + 1){
     console.log(A + " vikash");
     console.log("_______________");
} 


// 5 in Table for loop
console.log("\n -----Five in Table------- \n")
let table = 5;

for (let T = 1; T <= 10; ++T){
     console.log("___________________");
     console.log(table + " x " + T + " = " + table * T);
}


// While loop
console.log("\n ----While loop-------------- \n");
let Torex = 0;

while (Torex <= 5) {
     console.log(Torex + " Number");
     console.log("_______________");
     Torex++;
}


// do while loop
console.log("\n ----Do While loop-------------- \n");
let syrup = 0;

do{
     console.log(syrup + " Container");
     console.log("_______________");
     syrup++;
}
while(syrup < 5);




const x = 5;
const y = 6;
console.log(`The sum of xanda{y} is ${x + y}.`);


let X = 0;
for (let index = 0; index < 5; index++) {
    X +=index;
}
console.log(X);