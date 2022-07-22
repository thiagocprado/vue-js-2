new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  computed: {
    resultado() {
      return this.valor == 37
        ? "valor igual a 37"
        : this.valor > 37
        ? "valor maior que 37"
        : "valor menor que 37";
    },
  },
  watch: {
    valor() {
      setTimeout(() => {
        this.valor = 0;
      }, 5000);
    },
  },
});
