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
     current:0,
     images:[
       "img/image1.jpg",
       "img/image2.jpg",
       "img/image3.jpg",
       "img/image4.jpg",
     ],
    },
    methods:{
      isActive(index){
        return this.current===index ? "active": " ";
      }
    }
  });