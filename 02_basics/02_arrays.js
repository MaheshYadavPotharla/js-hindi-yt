const marvelHeroes = ["thor", "ironman", "spiderman"]

const dcHeroes = ["superman", "flash", "spiderman", "batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);

const newAgeHeroes = marvelHeroes.concat(dcHeroes)

// console.log(newAgeHeroes);


const allnewAgeHeroes = [...dcHeroes, ...marvelHeroes]

// console.log(allnewAgeHeroes);

const anotherArray = [1, 2, 3, 4, 5, [6, 7, 8, ] [10, 11]]

const real_another_array = anotherArray.flat(Infinity)

// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));


let score1 = 300

let score2 = 400

let score3 = 500


console.log(Array.of(score1, score2, score3));


