/*
 ?Descrizione:
 * Rifare l'esercizio dello slider come fatto assieme in classe.
 ?Bonus:
  *Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
*/
console.log("HERE", Vue);

Vue.config.devtools = true;


var app = new Vue({
  el: '#app',
  data: {
    t: 0,
    time: 5000,
    current: 0,
    images: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg",
    ]
  },
  methods: {
    decreaseCurrent() {
      this.current = (this.current === 0 ? (this.images.length - 1) : (this.current - 1));
      this.resetPlay();
    },

    increaseCurrent() {
      this.current = (this.current === (this.images.length - 1) ? 0 : this.current + 1);
      this.resetPlay();
    },

    isActive(index) {

      return this.current === index ? "active" : " ";
    },

    setCurrent(index) {
      this.current = index;
      this.resetPlay();
    },

    resetPlay() {
      clearInterval(this.t);
      this.play();
    },

    play() {
      this.t = setInterval(() => {
        this.increaseCurrent();
      }, this.time);
    },
  },
  created() {
    this.play();
  }
});