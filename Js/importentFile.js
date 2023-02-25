/** ...Spread Operator */
let arr = [1,2,3,5,6];

function abrege (a, b, c) {
     return a+b+c/3;
}
let sum = abrege(...arr)
console.log(sum);

//add array
let sum2 = [4,7, ...arr, 67];
console.log(sum2);

//copy array 
let copy0 = [...arr];
console.log(copy0);

//concatinet array
let newarr = [9,8,7,6,5,4,];
let concatinet = [...arr, ...newarr];
console.log(newarr);

// ...Spread Operator using for operator change data
let obj1 = {
     id: '01',
     Name1: 'vikash',
     Address1: 'Pilibhit',
     Stade1: 'up',
     code: 26520
}

let obj2 = {
     ...obj1, Stade1: 
     'uttar pradesh',
     Name1: 'vicky',
     code: 25253
};
console.log(obj2);



/*** Destructuring */
let {Name1, Address1, Stade1} = obj1;
console.log(Name1, Address1, Stade1);



/*** Async js */
// console.log('vikash kushwaha');
// setTimeout( () => {
//    console.log('kushwaha123456789');
// }, 3000);

// console.log('this is fist time');



console.log('\n\n'); //new Line


/** Promises and CallBack */
var promise = new Promise( (resolve, reject) => {
   const user1 = "vikash kushwaha";
   const user2 = "vikash kushwaHA"
   if(user1 === user2) {
       resolve();
   } else {
       reject();
   }
}, 3000);
      
promise.
    then( () => {
        console.log('Success, You are a Name'.toUpperCase());
    }).
    catch( () =>{
        console.log('Some error has occurred !'.toLowerCase());
    });


    



    /*** Map / Not use complication Loop*/
let map1 = [2,3,2,2];
let map_sum = map1.map((value)=>{
    return value/2;
});
console.log('Map: ' + map_sum);




/** Filter */
let filter1 = [1,3,4,5,6, 20,50,60,80,90];
let filter_sum = filter1.filter((value)=>{
    return value > 7;
});
console.log('Filter: ' + filter_sum);





/** Reduce */
let reduce1 = [1,3,4,5,6, 20,50,60,80,90];
let reduce_sum = reduce1.reduce((item1, item2) =>{
     return item1 * item2;
})
console.log('Reduce: ' + reduce_sum);





/*** Triple Equality */
let number1 = 1;
let number2 = '1';
if (number1 === number2) {
     console.log('I am true: ' + number1);
}
else{
     console.log('I am false: "1"');
}


