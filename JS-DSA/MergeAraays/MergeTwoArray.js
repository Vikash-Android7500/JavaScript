/** 
 * Merge Two Array 
 * function "concat", "...Spread Operator"
 * const merged = [].concat(arr, name);
 * const merged = arr1.push(...arr2);
 * Make two arrays.
 * use two Different Loop to mage lelment
 * */


//Merge Two Array in Logic.
 const mergeArray = [9, 12, 13, 50, 99, 45];
 const array1 = [20, 18, 78, 5, 55, 20, 60, 80]
 const Allarray = [];
 
 for (let i = 0; i < mergeArray.length; i++) {
     Allarray[i] = mergeArray[i];
 }
 for (let i = 0; i < array1.length; i ++) {
     Allarray[mergeArray.length + i] = array1[i];
 }

 console.log(`JS Logic: ${Allarray} \n`);



// concat Method use /////////////////////////////////
const merged = [].concat(mergeArray, array1);
console.log(`Concat Method: ${merged} \n`);


// push Method use
mergeArray.push(...array1);
console.log(`push Method: ${mergeArray}`);