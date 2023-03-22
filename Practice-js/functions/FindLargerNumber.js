function FindLargerNumber(Number1, Number2) {
     if (Number1 > Number2) {
          return (`Number1: ${Number1}`);
     }
     else {
          return `Number2: ${Number2}`
     }
}
console.log(`THis value is: ${FindLargerNumber(5, 9)}`);