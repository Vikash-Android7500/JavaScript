/*** Feacher Async js */

// setTimeout( () => {
//    console.log('Thred second');
// }, 3000);

// function sync(){
//      console.log('first');
// }
// sync();




/*** Promises */
let myPromise = new Promise((resolve, reject) =>{
       setTimeout(()=> {
          console.log('order delivery 😄 '.toUpperCase());
       }, 3000);
       resolve(095564200);
       reject(new Error('Error aara hai '));
});

myPromise.then(
     (value) => {
     console.log('Order Delivery Id: ' + value)},
     (error) => { 
     console.log("Recieved an Error reject")
});





/** Promises and CallBack */
var promise = new Promise( (resolve, reject) => {
   const user1 = "vikash kushwaha";
   const user2 = "vikash kushwaha"
   if(user1 === user2) {
        resolve(true);
     } else {
          reject(false);
     }

}, 3000);
      
promise.
    then( () => {
        console.log('Success, You are a Name'.toUpperCase());
    }).
    catch( () =>{
        console.log('Some error has occurred !'.toLowerCase());
    });




