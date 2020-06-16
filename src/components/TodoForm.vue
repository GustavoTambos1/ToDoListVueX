<template>
  <div id="Form">
    <input id="texto" type="text" placeholder="Insira uma Tarefa" v-model="novaTarefa" />
    <button id="botao" @click="adicionarTarefa">Adicionar Tarefa</button>
  </div>
</template>

<script>
export default {
  name: "TodoForm",
  data: function() {
    return {
      novaTarefa: ""
    };
  },
  methods: {
    adicionarTarefa: function() {
      this.$store.commit("adicionarTarefa", { descricao: this.novaTarefa });
    }
  }
};
</script>

<style>
#Form {
  background-color: black;
  width: 500px;
  height: 200px;
  margin: 80px 0px 0px 35%;
  border: 1px black solid;
  border-radius: 20px;
}

#texto {
  margin: 80px 10px 0 27%;
  height: 20px;
  width: 200px;
  border: black 1px solid;
}

#botao {
  background-color: red;
  width: 70px;
  height: 40px;
  color: white;
  outline: none;
  cursor: pointer;
  margin: 0px 5px;
}
</style>