// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

var mailList = ["mario.rossi@gmail.com", "pincopallo@live.it", "studio.neri@gmail.com", "bianchi64@gmail.com"];
var userMail;
var eventMail;
var msg;



// chiedo all'utente di inserire la propria email

userMail = prompt("Inserisci la tua email per registrarti all'evento");


// se la mail inserita dall'utente risulta essere nella mia lista allora potrà registrarsi all'evento


// finchè la variabile "i" risulta minore della lunghezza dell'array allora esegui il ciclo, dal momento che "i risulterà maggiore allora esci dal ciclo"

// controllo che la mail inserita dall'utente sia presente nella mia lista

// stabilisco che il ciclo viene eseguito finchè la variabile i è minore di 4(lunghezza arrey)
for (var i = 0; i < mailList.length; i++) {
  // assegno la variabile che stabilisce ogni item dell'array
  eventMail = mailList[i];

  // se la mail dell'utente è uguale a quella di un item dell'arrey allora stampa in console che l'utente è registrato
  if (eventMail === userMail) {
    msg = "Mail confermata, sei registrato all'evento!";
    i = mailList.length;
    // altrimenti stampa che non è registrato
  } else {
    msg = "Mail non trovata, non puoi registrarti all'evento";
  }
}


// output
document.getElementById('title').innerHTML = msg;