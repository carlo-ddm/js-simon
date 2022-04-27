// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// **Consigli del giorno:**
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

console.log('TEST');
const container = document.querySelector('.container');
const inizio = document.getElementById('start');
inizio.addEventListener('click',estrazione);

const inputsArray = [];
const gruppo = [];
// F-ESTRAZIONE
function estrazione() {
  gruppo.length = 0;
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    console.log(box);
    container.append(box);
    let nEstratto =  Math.ceil(Math.random() * 100);
    console.log('Singolo numero estratto -->',nEstratto);
    gruppo.push(nEstratto);
    console.log(gruppo);
    box.innerHTML = gruppo[i];
  }
  setTimeout(function(){
    const selectEl = document.querySelectorAll('.box');
    console.log('Array di elementi --> ',selectEl);
    for (i = 0; i < selectEl.length; i++){
      selectEl[i].innerHTML = '';
    }
    
      setTimeout(function() {
        for (i = 0; i < 5; i++){
        const input = parseInt(prompt('Inserisci il ' + numero(i) + ' numero'));
        inputsArray.push(input);
        console.log('risposte: ',inputsArray);
        }
      }, 0)
  }, 5000)
}

function numero(indiceFor) {
  switch(indiceFor) {
    case 0: return 'primo';
    case 1: return 'secondo';
    case 2: return 'terzo';
    case 3: return 'quarto';
    case 4: return 'quinto';
  }
}
