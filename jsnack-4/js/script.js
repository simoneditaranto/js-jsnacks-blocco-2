// Snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


// chiedo all'utente di inserire un numero
let userNumber;

do{

    userNumber = prompt("Inserisci un numero");

    if(userNumber < 0 || isNaN(userNumber)) {
        alert("Valore inserito non corretto, riprova");
    }

} while(userNumber < 0 || isNaN(userNumber));

if(Number(userNumber) % 2 != 0) {
    document.getElementById("result").innerHTML = `Numero inserito (${userNumber}) dispari, quindi stampo il numero: ${Number(userNumber) + 1}`;
} else {
    document.getElementById("result").innerHTML = `Il numero inserito è ${userNumber} ed è pari`;
}