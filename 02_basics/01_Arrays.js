//array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "batman", "superman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
/*The push() method of Array instances adds the specified elements to the end of an array
 and returns the new length of the array */

// myArr.pop()

/*The pop() method of Array instances removes the last element from an array and returns that element.
 This method changes the length of the array.
 If you call pop() on an empty array, it returns undefined. */

//  myArr.unshift(9)
 
 /*The unshift() method of Array instances adds the specified elements to the
 beginning of an array and returns the new length of the array. */
 
 myArr.shift()
//  console.log(myArr);
 /*The shift() method of Array instances removes the first element from an array and returns that removed element.
  This method changes the length of the array.*/

//   console.log(myArr.includes(0));

/*The includes() method of Array instances determines whether an array includes a certain value among its entries,
returning true or false as appropriate */

//   console.log(myArr2.indexOf(2));

  /*The indexOf() method of Array instances returns the first index at which a given element can be found in the array,
   or -1 if it is not present.*/


   const newArr = myArr.join()
  //  console.log(myArr);

  //  console.log(typeof newArr);

   /*The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
     separated by commas or a specified separator string. 
   If the array has only one item, then that item will be returned without using the separator.*/



   //slice, splice

   console.log("A ", myArr);

   const myn1 = myArr.slice(1, 3)

   console.log(myn1);
   
   console.log("B ", myArr);

   const myn2 = myArr.splice(1, 3)
   console.log("C ", myArr);
   console.log(myn2);
   

   
   