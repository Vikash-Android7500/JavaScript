/* Insert Element in Array 
const arr = [60,30,10,67,40];
const newElement = 90;
const position = 3;

for (let i = arr.length-1; i >= 0; i--) {
     console.log("Element Array  " + arr[i]);
     if (i >= position) {
          arr[i+1] = arr[i]

          if (i === position) {
               arr[i] = newElement;
          }
     }
     
}
console.log(arr);
*/

const InsertElement = () => {
     const arr = [60, 30, 10, 67, 40];
     const position = document.getElementById("position").value;
     const newElement = document.getElementById("newelement").value;
     

     for (let i = arr.length - 1; i >= 0; i--) {
       if (i >= position) {
         arr[i + 1] = arr[i];

         if (i >= position) {
           arr[i] = newElement;
         }
       }
     }
     alert(`Insert Element: ${arr}`);
}