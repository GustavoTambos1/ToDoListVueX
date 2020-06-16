import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
        
    ]
  },
  mutations:{
    adicionarTarefa(state, descricao){
        state.tarefas.push(descricao)
    }
  },
  actions: {
  },
  modules: {
  }
})
