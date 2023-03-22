function ChackNumbers(number) {
     if (number > 0) {
          return (`Number is Positive: ${number}`);
     } 
     else if (number < 0){
          return (`Number is Negative: ${number}`);
     }
     else{
          return (`Number is zero: ${number}`);
     }
}

console.log(`
     ${ChackNumbers(10)} 
     \n ${ChackNumbers(-5)}
      \n ${ChackNumbers(0)} 
      \n ${ChackNumbers(1)}
       \n ${ChackNumbers(-1)} 
`);