// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

var mailList = ["mario.rossi@gmail.com", "pincopallo@live.it", "studio.neri@gmail.com", "bianchi64@gmail.com"];
var userMail;
var eventMail;



// chiedo all'utente di inserire la propria email

userMail = prompt("Inserisci la tua email per registrarti all'evento");


// se la mail inserita dall'utente risulta essere nella mia lista allora potrà registrarsi all'evento


// finchè la variabile "i" risulta minore della lunghezza dell'array allora esegui il ciclo, dal momento che "i risulterà maggiore allora esci dal ciclo"

// controllo che la mail inserita dall'utente sia presente nella mia lista

for (var i = 0; i < mailList.length; i++) {
  eventMail = mailList[i];
  if (userMail === eventMail) {
    console.log("hai vinto");
  } else {
    console.log("hai perso");
  }
}