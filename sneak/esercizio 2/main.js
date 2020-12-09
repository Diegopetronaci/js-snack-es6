//L’utente inserisce due parole in successione, con due
//prompt.Il software stampa prima la parola più corta, poi la
//parola più lunga.

const primaDomanda = prompt("inserisci una parola");
const secondaDomanda = prompt("inserisci un'altra parola");

const ordineParole = (`${primaDomanda.length < secondaDomanda.length ? console.log(primaDomanda, secondaDomanda) : console.log(secondaDomanda, primaDomanda) }`)