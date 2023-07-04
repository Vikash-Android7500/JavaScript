/*** Search Element in Array */

const SearchElement = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Search = 8;
let index = undefined;

for (let i = 0; i < SearchElement.length - 1; i++) {
  if (SearchElement[i] === Search) {
    console.log(
      ` Search Array: ${SearchElement[i]} \n Search Position: ${(index = i)}`
    );
  }
}



/*
const Searchelement = () => {
     const SearchElement = [1, 2, 3, 4, 5, 6, 7, 8, 9];
     const Search = document.getElementById("SearchPosition").value;
     let index = undefined;

     for (let i = 0; i < SearchElement.length - 1; i++) {
       if (SearchElement[i] == Search) {
         alert(
           ` Your Search Number: ${SearchElement[i]} \n Index Search Position: ${(index =
             i)}`
         );
       }
     }
}

*/