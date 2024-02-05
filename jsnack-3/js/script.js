// Snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5


// creo due array con un numero di elementi diversi tra loro
const longList = [2, 3, 6, 9, 1];
console.log(longList);

const shortList = [7, 8, 6];
console.log(shortList);


//utilizzo un ciclo do-while per far inserire elementi all'utente fino a quando i due array non hanno lo stesso numeri di elementi
do {

    let userNumber = prompt("Inserisci un numero");

    shortList.push(userNumber);

} while(shortList.length < longList.length);

document.getElementById("result").innerHTML = `primo array: ${longList} <br> secondo array: ${shortList}`;
