// Snack 2
// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!


// memorizzo il numero casuale scelto dal computer
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

// scelta utente
let userNumber;

// variabile per il conteggio dei tentativi
let attempts = 0;

// chiedo all'utente di inserire un numero e poi controllo se è troppo alto/basso
do{

    userNumber = prompt("Prova ad indovinare il numero");

    if(isNaN(userNumber) || userNumber.length == 0) {

        alert("Non hai inserito un numero, riprova");

    } else {
        
        if(userNumber > randomNumber) {
            alert("Troppo alto");
        } else if(userNumber < randomNumber){
            alert("Troppo basso");
        }
    
        attempts++;

    }


} while(userNumber != randomNumber);

document.getElementById("result").innerHTML = `Hai indovinato in ${attempts} tentativi`;

