<template>
  <div id="todoList">
      <div class="tarefasCaixas" v-for="(todoList, index) in tarefas" :key="index">
        {{todoList.descricao}}
      </div>
  </div>
</template>

<script>
export default {
    name:"TodoList",
    computed:{
        tarefas(){
            return this.$store.state.tarefas
        }
    }
}
</script>

<style>
    #todoList{
        background-color: black;
        overflow: auto;
        width: 500px;
        height: 200px;
        border: black 1px solid;
        border-radius: 20px;
        margin: 10px 0px 0px 35%;
        display: flex;
        flex-wrap: wrap;
    }

    .tarefasCaixas{
        width: (tarefas);
        background-color: red;
        margin: 5px 20px 0 10px;
        text-align: center;
        height: 50px;
        border: 2px solid black;
        line-height: 50px;
        cursor: pointer;
        color: white; 
        overflow: hidden; /* esconde uma parte do texto dentro da caixa*/
    }
</style>