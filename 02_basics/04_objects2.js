// // const tinderUser = new Object() ---- singleton object


const tinderUser = {} //---- non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


// console.log( tinderUser);

const regularUser = {

    email: "some@gmail.com",

    fullname: {
        userfullname: {
            firstName: "hitesh",
            lastname: "choudary"

        }
    }
    
}

// console.log(regularUser.fullname.firstName.lastname);



const obj1 = {1: "a", 2: "b", }
const obj2 = {3: "a", 4: "b", }

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}  //best method

// console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));



