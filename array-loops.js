// --------------------------
// Opdracht 1
// --------------------------

const names = ["Henk", "Piet", "Fred", "Joop"];
const suffix = "je";

const newNames = names.map(el => el + suffix);
console.log(newNames);


// Verander de waardes van de array dusdanig dat er -"je" achter iedere naam wordt geplakt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]



// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];
const multipliedNumbers = numbers.map(x => x * 3);
console.log(multipliedNumbers);


// Verander de waardes van de array dusdanig dat iedere waarde met 3 vermenigvuldigd wordt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];



// --------------------------
// Opdracht 3
// --------------------------

const figures = [4, 6, 12, 34, 1];
const addedFigures = figures.map(x => x + 3);
console.log(addedFigures);

// Verander de waardes van de array dusdanig dat er 3 bij iedere waarde wordt opgetelt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(figures) geeft: [ 7, 9, 15, 37, 4 ]


