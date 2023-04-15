/**Write a function called 'createCounter' 
 * that returns a function. The returned function 
 * should increment a counter variable each time it is 
 * called and return the current count. */
function CreateCounter() {
     let count = 0;

     return function () {
          count++;
          return count;
     };
}

const counter = CreateCounter();
console.log(counter());
console.log(counter());
console.log(counter());