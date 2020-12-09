//Stampa il cubo dei primi N numeri, dove N è un numero
//indicato dall’utente.

const n = prompt("inserisci un numero");

const valoreBase = 2;

///non fa quello richiesto
/* somma = 1;
for (let i = 0; i < n; i++) {
    somma = somma * valoreBase
    
    console.log(somma);
}; */


for (let i = 0; i < n; i++) {
    
    risultato = i * i * i ;
    console.log(risultato);
};