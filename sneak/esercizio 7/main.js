//Stampa le potenze di 2 fino a 1000.


/* const base = 2;
for (let i = 0; i < 1000; i++) {
    
    i = base * i;

    console.log(i);
} */

let risultato = 0;
for (let i = 0; risultato < 1000; i++) {
    risultato = Math.floor(Math.pow(2, i))
    console.log(risultato);
}; 