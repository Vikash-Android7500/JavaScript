/***Write a function that takes an array 
 * of strings as an argument and
 *  returns a new array with only the 
 * strings that have a length greater than 5. */
function FilterLongStrings(arr) {
     let fileredArr = [];

     for (let i = 0; i < arr.length; i++) {
          if (arr[i].length > 5) {
               fileredArr.push(arr[i]);
          }
     }
     return fileredArr;
}

console.log(FilterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"])); // ['watermelon', 'orange']
console.log(FilterLongStrings(["cat", "dog", "elephant", "giraffe"])); // ['elephant', 'giraffe']
console.log(FilterLongStrings(["car", "bike", "bus", "train"])); // []

console.log(FilterLongStrings(["123456", "123", "123456789"])); // ["123456", "123456789"]

console.log(FilterLongStrings([1,2,3,5,65,-5])); // []