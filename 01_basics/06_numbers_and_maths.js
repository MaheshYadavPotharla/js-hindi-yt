const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2));


const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));



//////////////////////******Maths*******//////////////////////////////


// console.log(Math);

// console.log(Math.abs(-4));
/*only changes the  negative value in to positive value but not positive value in to negative 
---- (abs) stands for absolute value  */

// console.log(Math.round(4.4));
// console.log(Math.round(4.6));

/*rounds to the nearest value  */


// console.log(Math.ceil(4.5));
//*rounds to the nearest upper value */

// console.log(Math.floor(4.5));
/*rounds the value to the nearest lower value */


// console.log(Math.sqrt(9));
// console.log(Math.sqrt(81));
/*gives the square root of the value  9 sqrt is 3 16 sqrt is 4  */



// console.log(Math.pow(5, 2));

/*pow = power of x, y       -------x denotes number and y denotes power  */



// console.log(Math.min(9, 5, 8, 4, 3, 1));
/*min finds the minimum value  in a group */


// console.log(Math.max(100, 200, 5000, 456123, 54564566, 54554554555544 ));

// /*max finds the maximum value */




// console.log(Math.random());
/*the random values comes in between 0 - 1 */

// console.log((Math.random()* 10) + 1);
// console.log(Math.floor(Math.random()* 10) + 1);



const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1 )) + min)