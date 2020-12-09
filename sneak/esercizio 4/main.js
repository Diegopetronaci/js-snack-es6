//In un array sono contenuti i nomi degli invitati alla festa del
//grande Gatsby, chiedi all’utente il suo nome e comunicagli se
//può partecipare o no alla festa.

//////////////forma lunga /////////////////////////

/* var listaInvitati = ["Diego", "Federica", "Nicco", "Luigi", "Giada", "Chiara", "Lucia"];
console.log(listaInvitati);

var nomeUtente = prompt("Come ti chiami??");

var permesso = false;
for (var i = 0; i < listaInvitati.length; i++) {

    if (nomeUtente == listaInvitati[i]) {
        var permesso = true;
    }

};

if (permesso == true) {
    console.log("Benvenuto");
} else {
    console.log("Stop");
}; */

/////////////////forma corta/////////////////

const listaInvitati = ["Diego", "Nicco", "Andrea", "Alessandro", "Antonio"];
console.log(listaInvitati);

const domanda = prompt("come ti chiami?");


let permesso = false;
for (let i = 0; i < listaInvitati.length; i++) {

    console.log(${domanda == listaInvitati[i] ? "entra alla festa" : "non sei in lista"});
    
}



