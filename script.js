// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// **Consigli del giorno:**
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

console.log('TEST');

const inizio = document.getElementById('start');
const stampa = document.createElement('div');

inizio.addEventListener('click',estrazione);

const gruppo = [];
function estrazione() {
  
  gruppo.length = 0;
  for (let i = 1; i <= 5; i++) {
    let nEstratto = Math.ceil(Math.random() * 10);
    console.log('Singolo numero estratto -->',nEstratto);
    gruppo.push(nEstratto);
  }
  
  console.log(gruppo);
}

// Creare un ciclo for moltiplicare le estrazioni e pushare i risultati in un array