//Dates

myDate = new Date()
// console.log(myDate.toString());


// console.log(myDate.toDateString());

//gives only date like mon jan 06 2025 The toDateString() method returns the date (not the time) of a date object as a string.

// console.log(myDate.toISOString());
/*The toISOString() method returns a date object as a string, using the ISO standard.

The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ */

// console.log(myDate.toJSON());
/*The toJSON() method returns a date object as a string, formatted as a JSON date.

JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ

 */

// console.log(myDate.toLocaleDateString());

/*The toLocaleDateString() method returns the date (not the time) of a date object as a string, using locale conventions.

1/6/2025
 */

// console.log(myDate.toLocaleString());

/*The toLocaleString() method returns a Date object as a string, using locale settings.

The default language depends on the locale setup on your computer.

1/6/2025, 2:09:36 PM
*/


let myTimeStamp = Date.now()

// console.log(myTimeStamp.toString());

// console.log(Math.floor(Date.now()/1000));



/*to get local indian timing  */
// console.log(newDate.toLocaleString('en-In', {timeZone: 'Asia/Kolkata'}));




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());


console.log(newDate.toLocaleString('default', {timeZone:'Asia/kolkata'}))
console.log(newDate.toLocaleString('en-In', {timeZone:'Asia/kolkata'}));


