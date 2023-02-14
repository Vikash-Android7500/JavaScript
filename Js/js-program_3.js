/* String Concat(); **/
let firstName = 'vikash';
let lastName = 'kushwaha';
let message = `😄 ${lastName}, vicky kushwaha`;
console.log(message);


const fName = '😄 Mobile';
const lName = 'SamSung';
console.log(fName.concat(' ', lName, ' Using for "concat" String'));


const hello = 'Hi ';
console.log(hello.concat('vikash', ". Have a nice day."));


/* endsWith() Using for Search String End Position**/
const str1 = 'Ram is a good boy!';
console.log(str1.endsWith('good boy!'));



/* StartWith() Using for Search String Start Position**/
const str2 = 'Ram is a good boy!';
console.log(str1.startsWith('Ram is a'));



/* Replace() using for String change */
let N = 'string';
let M = 'vikash';
console.log
(N.replace('string', 'SamSung galaxy') + M.replace('vikash', 'J7 Prime'))



/** backtacs `` */
let message2 = 
`This 
is 
a 
JavaScript
Code`;
console.log(message2.toUpperCase());



/*** Date Month*/
let date = new Date('20 jan 1995 08:20');
date.setFullYear(2022);
console.log(date);


/*JS Arrays **********************

Adding new Element
Finding Element
Removing Element
Splitting Element
Combining Element
*/

// Adding new Element Array

let number = [1, 2, 3, 4, 5];
number.push(9);
console.log(number);

number.unshift(5); 
console.log(number);

number.splice(2, 0, 'vikash number');
console.log(number);

// Finding Element Array
console.log(number.indexOf(3));
// Array Seaching
console.log(number.includes(5));



// refrences data Using for callbackfunction
let courses = [
    {no:1, naam:'😄vk'},
    {no:2, naam:'😄vicky'},
    {no:2, naam:'😄vikash'}
];

/** Call-Back-Function */  
let cours = courses.find(function(course) {
     return course.naam === '😄vk';
});
console.log(cours);

//Arrow Function => Best Practice
let cours2 = courses.find(courses => courses.naam === '😄vicky');
console.log(cours2);

let cours3 = courses.find(courses => courses.naam === '😄vikash');
console.log(cours3);



/* Remove Element Array  **/
let number_3 = [1,2,3,4,5,6,7];
// beginning
number_3.shift()
// middle
number_3.splice(2,1)
// end
number_3.pop();
console.log(number_3);


/*** Empty Array  */
let number_4 = [1,2,3,4,5];
let number_4_0 = number_4;
console.log('Visible Array: ' + number_4_0);
// Empty 
number_4.length = 0;
console.log('Empty Array: ' + number_4);


/*** Combining Element Array */
let firstA = [1,23,25,45];
let firstB = [2,20,20,40];
let combinnig = firstA.concat(firstB);
console.log(combinnig);

// Select value
let sliced = combinnig.slice(1,5);
console.log(sliced);



/* Spread Operator...  Combining Array*/

let combinnig2 = [...firstA,' A ', ...firstB, ' B'];
console.log('Spread Oprator... ' + combinnig2);


// iterating an Array 
let arr = [10,20,30,40,50];

for(let value of arr) {
    console.log('Array: ' + value);
}

console.log('');

// forEach loop
arr.forEach(number8=> console.log(' forEach ' + number8));



//** joining Array */
let number9 = [10,20,30,40,50];
const joined = number9.join(',');
console.log(joined);



// split() function
let message3 = 'This is my second message';
let parts = message3.split(' ');
console.log(parts);


// sort() function convard to String.
let numbers10 = [5,10,4,40];
numbers10.sort();
console.log(numbers10);



// reverse() function.
let numbers11 = [5,10,4,40];
numbers10.reverse();
console.log(numbers11);


// filter() function Positive Value.
let numbers = [1,2,-1,-4];
let filtered =  numbers.filter(value => value >= 0);
console.log(filtered);



// filter() function Nigative Value.
let numbers23 = [4,6,-5,-8];
let filtered1 =  numbers23.filter(value => value <= 0);
console.log(filtered1);


// map() function
let numbers12 = [7,8,9,10];
console.log(numbers12);

let items = numbers12.map(value => 'student_no ' + value);
console.log(items);


// map()-function object
let number21 = [5,6,-8,-9];
let filtered2 = number21.filter(value => value >= 0);

let item2 = filtered2.map(function(num) {
     return {value: num};
});

console.log(item2);