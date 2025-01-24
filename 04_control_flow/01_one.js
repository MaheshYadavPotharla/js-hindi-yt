// if (2 === "2") {
//     console.log("executed");
// }
// else{
//     console.log("not executed");
    
// }


// const temparature = 411255455

// if (temparature < 50) {
//     console.log("less than 50");
    
// }
// else {console.log("temparature is above 50")}




// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// // console.log(`User power: ${power}`);


//implicit scope

const balance = 1000

// if (balance > 500)  console.log("test");

 
// if (balance < 500) {
//     console.log("less than 500");
    
// } else if(balance < 750) {
//     console.log("less than 750");
    
// }else  {
//     console.log("less than 1200");
    
// }



const userLoggedIn = true

const debitCard = false

if (userLoggedIn && debitCard) {
    
    console.log("you are allowed to buy courses");
    
}else {"you are not allowed to buy any courses"}



const loggedInFromGoogle = true

const loggedInFromEmail = false

if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("userLoggedIn");
    
}
