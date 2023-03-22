/**Write a program that takes a number and prints
 *  the multiplication table for that number. */
function MultiplicationTable(number) {
     for (let i = 1; i <= 10; i++) {
          let result = number * i;
          console.log(`${number} x ${i} = ${result} \n`);
     }
}
MultiplicationTable(5);

console.log(`============Tan Table: \n`);
//new Table
function TanTable(number) {
     for (let tan = 1; tan <= 10; tan++) {
          let result2 = number * tan;
          console.log(`${number} x ${tan} = ${result2}`);
     }
}
TanTable(10);