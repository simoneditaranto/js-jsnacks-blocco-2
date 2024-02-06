// Snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let repeat;
// eseguo il programma di continuo finché l'utente non inserisce "-1" per interrompere il programma

while(repeat != "n") {

    // chiedo all'utente di inserire un numero
    let userNumber;

    do{

        userNumber = prompt("Inserisci un numero");

        if(userNumber < 0 || isNaN(userNumber)) {
            alert("Valore inserito non corretto, riprova");
        }

    } while(userNumber < 0 || isNaN(userNumber));

    if(Number(userNumber) % 2 != 0) {
        alert(`Numero inserito (${userNumber}) dispari, quindi stampo il numero: ${Number(userNumber) + 1}`);
    } else {
        alert(`Il numero inserito è ${userNumber} ed è pari`);
    }

    do{

        repeat = prompt("Vuoi continuare? (per uscire inserisci 'n', per continuare inserisci 's')");

    }while(repeat != "n" && repeat != "s");

}

document.getElementById("result").innerHTML = `Fine programma! <br> Hai inserito ${repeat}`;
