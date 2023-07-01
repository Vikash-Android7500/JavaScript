/**Write a function called 'sumEvenNumbers' 
 * that takes an array of numbers as a 
 * parameter and returns the sum of all even 
 * numbers in the array. */
function sumEvenNumbers(number) {
     let sum = 0;

     for (let i = 0; i < number.length; i++) {
          if (number[i] % 2 === 0) {
               sum += number[i];
          }
     }
     return sum;
}
var numbers = [1,2,3,4,5,6];
console.log(sumEvenNumbers(numbers));