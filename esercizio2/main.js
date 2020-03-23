// Gioco dei dadi, chi fa di più vince.

var userN, pcN;

// stabilisco il lancio dell'utente

userN = Math.floor(Math.random() * 6 + 1);


// stabilisco il lancio del pc

pcN = Math.floor(Math.random() * 6 + 1);


// output del lancio più alto

if (userN > pcN) {
  document.getElementById('title').innerHTML = "Hai fatto: " + userN + " mentre il Pc ha fatto: " + pcN + "." + " Complimenti, hai vinto!";
} else if (userN < pcN) {
  document.getElementById('title').innerHTML = "Hai fatto: " + userN + " mentre il Pc ha fatto: " + pcN + "." + " Mi dispiace, hai perso!";
} else {
  document.getElementById('title').innerHTML = "Hai fatto " + userN + " come il Pc." + " Il risultato è un pareggio!";
}