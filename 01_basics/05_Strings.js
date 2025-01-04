const name = "hitesh";
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('hitesh-hc')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toString());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
// console.log(gameName.indexOf(3));

console.log(gameName.charAt(5));

const newString = gameName.substring(0, 4)

console.log(newString);


const anotherString = gameName.slice(-8, 5)

console.log(anotherString);

const newStringOne = "    hitesh     "
console.log(newStringOne.trim());




const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));

