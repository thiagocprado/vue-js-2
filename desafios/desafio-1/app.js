new Vue({
  el: "#desafio",
  data: {
    nome: "Thiago",
    idade: 20,
    imagem: "http://files.cod3r.com.br/curso-vue/vue.jpg",
  },
  methods: {
    numeroRandomico() {
      return Math.random();
    },

    idadeVezesTres() {
      return this.idade * 3;
    },
  },
});
