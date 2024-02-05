// Snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5


// creo due array (composto da numeri casuali e diversi tra loro) con un numero di elementi diversi tra loro 
const longList = [];
const shortList = [];

// chiedo all'utente di quanti elementi vuole il primo array (max 10)
let firstChoice;
do{
    // controllo che il numero massimo di elementi non sia superiore a 10 o minore di 1
    firstChoice = prompt("Quanti elementi vuoi nel primo array?");
    if(firstChoice > 10 || firstChoice < 1) {
        alert("Puoi inserire un numero di elementi compreso tra 1 e 10");
    }

} while (firstChoice > 10 || firstChoice < 1);

// genero un array di "firstChoice" numeri casuali
for(let i = 0; i < firstChoice; i++) {

    longList.push(Math.floor(Math.random() * 20 + 1));

}

let secondChoice;
do{
    // controllo che la scelta non sia superiore a quella precedente
    secondChoice = prompt("Quanti elementi vuoi nel secondo array?");
    if(Number(secondChoice) >= Number(firstChoice)) {
        alert("Devi inserire un numero di elementi minore del primo array");
    } else if(Number(secondChoice) < 1) {
        alert("Devi inserire un numero di elementi maggiore di 1");
    }

} while (secondChoice < 1 || Number(secondChoice) >= Number(firstChoice));

// genero un array di "secondChoice" numeri casuali
for(let i = 0; i < secondChoice; i++) {

    shortList.push(Math.floor(Math.random() * 20 + 1));

}

//utilizzo un ciclo do-while per far inserire elementi all'utente fino a quando i due array non hanno lo stesso numero di elementi
do {

    let userNumber = prompt(`Inserisci il ${shortList.length + 1}° numero del secondo array:`);

    shortList.push(userNumber);

} while(shortList.length < longList.length);

document.getElementById("result").innerHTML = `primo array: ${longList} <br> secondo array: ${shortList}`;
