const jobs = ["Frontend", "Backend", "DevOps", "FullStack"];
let indexOf = jobs.indexOf("Frontend");

console.log(indexOf); // output: 0

// indexOf(elementDePesquisa, pontoInicial)
// Ponto inicial, é o indice para iniciar a procura desse elemento dentro do array
const fruits = ["Apple", "Orange", "Banana", "Pear"];
let indexOfSearch = fruits.indexOf("Orange", 3);

console.log(indexOfSearch); // output: -1