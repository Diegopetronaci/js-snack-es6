//Crea un array vuoto.Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array.

/* const daRiempire = [];
const dispari = [];

for (let i = 0; i < 6; i++) {
    const numeriUtente = Number(prompt("inserisci un numero"));
    daRiempire.push(numeriUtente);
    if (numeriUtente %2==1) {
        dispari.push(numeriUtente)
    }
}

console.log(daRiempire);
console.log(dispari); */

const daRiempire = [];
const dispari = [];

for (let i = 0; i < 6; i++) {
    const numeriUtente = Number(prompt("inserisci un numero"));
    daRiempire.push(numeriUtente);
    console.log(` ${numeriUtente % 2 == 1 ? dispari.push(numeriUtente): "" }` );
    /* if (numeriUtente % 2 == 1) {
        dispari.push(numeriUtente)
    } */
}

console.log(daRiempire);
console.log(dispari);