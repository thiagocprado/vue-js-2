new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    exibirAlerta() {
      alert("alerta exibido");
    },
    alterarValor(event) {
      this.valor = event.target.value;
    },
  },
});
