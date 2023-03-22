/**Write a program that takes a number and 
 * calculates the sum of all numbers from 1 to that number. */
function SumOfNumbers(number) {
     let sum = 0;
     for (let i = 1; i <= number; i++) {
          sum += i;
     }
     return (`Sum of:  ${sum}`);
}

console.log(`
     ${SumOfNumbers(10)} \n 
     ${SumOfNumbers(1)} \n 
     ${SumOfNumbers(5)} \n 
     ${SumOfNumbers(0)} \n 
     ${SumOfNumbers(-5)}
`);
