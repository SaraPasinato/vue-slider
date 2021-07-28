/*
 ?Descrizione:
  Rifare l'esercizio dello slider come fatto assieme in classe.
 ?Bonus:
  Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
*/
console.log("HERE",Vue);

Vue.config.devtools=true;



var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })