import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: '',
    clientes: [
      {
        cpf: '00000000001',
        nome: 'Maria da Silva',
        telefone: '(69) 90000-0000'
      }
    ],
    funcionarios: [
      {
        cpf: '00000000000',
        nome: 'Ludiane Paranhos Reis'
      },
      {
        cpf: '00000000032',
        nome: 'Luana'
      }
    ],
    servicos: [],
    agendamentos: [
      {
        id: '1',
        cliente: '02387121252',
        horario: '12:30h',
        funcionario: '00000000000',
        servico: '1'
      },
      {
        id: '2',
        cliente: '00000000001',
        horario: '15h',
        funcionario: '00000000000',
        servico: '1'
      },
      {
        id: '3',
        cliente: '00000000002',
        horario: '18h',
        funcionario: '00000000000',
        servico: '1'
      }
    ]
  },
  mutations: {
    setPageTitle(state, title){
      state.pageTitle = title
    }
  },
  actions: {
  },
  modules: {
  }
})
