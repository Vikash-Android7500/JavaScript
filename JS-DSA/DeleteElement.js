/**Delete Elements in Araay */

const deleteArray = [10,20,30,60,19,92];
const position = 2;

// Logic Delete Elements
for(let i = position; i < deleteArray.length - 1; i++) {
     deleteArray[i] = deleteArray[i + 1];
}
// Delete Extra Array
deleteArray.length = deleteArray.length - 1;
console.log(deleteArray,"Position", position);



// Programming function splice() in Delete Element
/**
 * deleteArray.splice(0, 1); <<< 
   console.log(deleteArray);
 */


/**
 
const RemoveElement = () => {
     const deleteArray = [10, 20, 30, 60, 19, 92];
     const position = document.getElementById("deletePosition").value;

     for (let i = position; i < deleteArray.length - 1; i++) {
       deleteArray[i] = deleteArray[i+1];
     }
     // Delete Extra Array
     deleteArray.length = deleteArray.length - 1;

     console.log(deleteArray);
}

*/