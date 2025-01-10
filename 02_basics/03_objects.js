//singleton

//object.create


//object literals


const mySym = Symbol("key1")





const jsUser = {
    name: "hitesh",

    "fullName": "HiteshChoudary",
    [mySym]: "mykey1",

    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser.mySym);

// console.log(typeof mySym);

jsUser.email = "mahesh@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "mahi.com"
// console.log(jsUser);



jsUser.greeting = function(){
    console.log("hello js user");
    
}

jsUser.greetingTwo = function(){
    console.log(`hello js user you're age is, ${this.age}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
