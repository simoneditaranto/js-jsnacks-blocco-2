// Snack 1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50


//inizializzo un array vuoto
const numberList = [];

// inizializzo una variabile che tiene conto della somma degli elementi 
let sum = 0;

// utilizzo un ciclo do-while per chiedere all'utente di inserire un numero e controllare poi se la somma degli elemementi è ancora minore di 50
do {

    let userNumber = prompt("Inserisci un numero");
    if(isNaN(userNumber) || userNumber.length == 0) {

        alert("Non hai inserito un numero, riprova");

    } else {

        sum += Number(userNumber);
        numberList.push(userNumber);
        
    }


} while(sum < 50);

// console.log(numberList);
// scrivo nel DOM il mio array
document.getElementById("result").innerHTML = `I numeri che hai inserito sono: ${numberList}`;