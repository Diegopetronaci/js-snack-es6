//Il software deve chiedere per 5 volte all’utente di inserire un
//numero.Il programma stampa la somma di tutti i numeri
//inseriti.Esegui questo programma in due versioni, con il for
//e con il while.

/* const numeri = [];

let somma = 0
for (let i = 0; i < 5; i++) {
    const numeriUtente = Number(prompt("inserisci un numero"));
    numeri.push(numeriUtente);
    somma = numeriUtente + somma;
}
console.log(numeri);

console.log(somma); */

const numeri = [];

let somma = 0

let i = 0
while (i < 5) {
    const numeriUtente = Number(prompt("inserisci un numero"));
    numeri.push(numeriUtente);
    somma = numeriUtente + somma;
    i++  
}
console.log(numeri);

console.log(somma);