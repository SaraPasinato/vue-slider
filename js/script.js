console.log("HERE",Vue);

Vue.config.devtools=true;



var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })