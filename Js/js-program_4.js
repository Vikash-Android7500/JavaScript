/*** Function */
//function call or invoke
ek();
//function declaration
function ek() {
     let a = 45;
     let b = 12;
     console.log('simple function');
     return a+b;
}



// Name function Assignment 
let stand1 = function() {
     console.log('Function Assignment');
}
stand1();



// Anonymous function Assinment
let stand2 = function() {
    console.log('Anonymous function Assinment');
    
}
let jump = stand2;
jump();


//return function
let x = 1
x = 'a';
console.log('sum  value: ' + x);

function sum(a, b) {
     return a+b;
     
}
console.log('sum: ' + sum(1,2));




// object Arguments
function sum(a, b) {
     let total = 0;
     for(let value of arguments)
     total = total + value;
     return total;
}
console.log('[object Arguments] sum: ' + sum(1,2,3,4,5,6));



//Rest Operator sprces...
function sum2(num, value, ...args) {
     console.log(args);
}
sum2(1,2,3,4,5,6);



// Default Parameters
function interest(p,r,y) {
     return p * r * y /100;
}
console.log(interest(1000, 10, 5));



/* Getter Setter */
//getter -> access properties
//setter -> change or mutate properties

let person = {
     fName: 'vikash',
     lName: 'kushwaha',
     get fullName() {
         return `${person.fName} ${person.lName}`;
     },
     set fullName(value){
          if (typeof value !== String) {
               throw new Error('You have not sent a string ');
          }
          let parts = value.split(' ');
          this.fName = parts[0];
          this.lName = parts[1];
     }
};
//issue read only use for {try catch}
// try {
//      person.fullName = true;
// } catch (e) {
//      alert(e);
// }
// console.log(person.fullName);



/*** Scope varible  'var' dataType को बहार से उपयोग कर सकते है */
{
     var a = 5;
}
console.log(a);




/***array addition for loop */
let arr = [1,2,3,4];
let total2 = 0;
for (let value of arr) {
     total2 = total2 + value;
}
console.log('array addition for loop: ' + total2);




/* reduce function with out for loop */
let arr2 = [1,2,3,4];
let totalSum = arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('array addition reduce function: '.toUpperCase() + totalSum);