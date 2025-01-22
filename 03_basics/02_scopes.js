let a =  300

if (true) {
let a = 10;/*The let keyword is an improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015. These variables has the block scope. It can’t be accessible outside the particular code block ({block}).
The variable is only available inside the block {} where you define it. */

const b = 20; /*The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration. These variables also have the block scope. It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.
const is similar to let, but with one big difference: once you assign a value to a const variable, you can’t change it later. Like let, const is block-scoped. */

var c =30;/*
The var keyword is the oldest way to declare variables in JavaScript. It has a function scope or global scope
If you create a variable outside of a function, you can use it anywhere in your code.
If you create a variable inside a function, you can only use it within that function.*/

// console.log("INNER: ", a);

}
// console.log(a);  
// console.log(b);
// console.log(c);


function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()


if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);
