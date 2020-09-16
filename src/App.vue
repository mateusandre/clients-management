<script type="text/javascript">
  import fab from 'vue-fab'
  export default{
    data(){
      return {
        actions: [
          {
              name: 'novoAgendamento',
              icon: 'calendar_today',
              // tooltip: 'Agendar Horário'
          },
          {
              name: 'novoCliente',
              icon: 'mood',
              // tooltip: 'Novo Cliente'
          }
        ],
        funcionarioLogado: null,
        funcionarioSelecionado: null
      }
    },
    components: {
      fab
    },
    watch: {
      data() {
        // alert(value)
      }
    },
    mounted(){
      if (typeof localStorage.funcionarioLogado == 'undefined' && this.$store.state.funcionarios.length > 0)
        this.$bvModal.show('modal-center')
      else
        this.funcionarioLogado = JSON.parse(localStorage.funcionarioLogado)
    },
    methods: {
      novoAgendamento() {
        this.$router.push('/NovoAgendamento').catch(() => {})
      },
      novoCliente() {
        this.$router.push('/NovoCliente').catch(() => {})
      },
      selecionarFuncionario(cpf) {
        this.funcionarioSelecionado = this.$store.state.funcionarios.find(f => f.cpf == cpf)
      },
      salvarFuncionarioEscolhido(){
        localStorage.setItem('funcionarioLogado', JSON.stringify(this.funcionarioSelecionado))
        this.funcionarioLogado = this.funcionarioSelecionado
      }
    }
  }
</script>

<template>
  <div id="app" class="pb-0 mb-0">
    <fab :actions="actions" bg-color="#EF5350" :fixed-tootip="true" @novoAgendamento="novoAgendamento" @novoCliente="novoCliente"></fab>

    <div class="">
      <b-button variant="ouline-dark" class="text-light" id="btn-toggle" style="font-size: 25px;" v-b-toggle.sidebar-backdrop><font-awesome-icon icon="bars" /></b-button>
      <span v-if="funcionarioLogado" class="float-right text-right mr-3 mt-2 text-white">{{ funcionarioLogado.nome }}</span>
    </div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Cílios Business"
      backdrop-variant="dark"
      bg-variant="white"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <hr>

        <nav class="nav flex-column">
          <div class="nav-item">
            <router-link to="/Clientes" class="nav-link">
              <div class="d-flex align-self-center">
                <span>
                  <font-awesome-icon :icon="['far', 'smile']" />
                </span>
                <span>Clientes</span>
              </div>
            </router-link>
          </div>
          <div class="nav-item">
            <router-link to="/Funcionarios" class="nav-link">
              <div class="d-flex align-self-center">
                <span>
                  <font-awesome-icon :icon="['far', 'address-card']" />
                </span>
                <span>Funcionários</span>
              </div>
            </router-link>
          </div>

          <div class="nav-item">
            <router-link to="/Servicos" class="nav-link">
              <div class="d-flex align-self-center">
                <span>
                  <font-awesome-icon icon="tools" />
                </span>
                <span>Serviços</span>
              </div>
            </router-link>
          </div>

          <div class="nav-item">
            <router-link to="/Ganhos" class="nav-link">
              <div class="d-flex align-self-center">
                <span>
                  <font-awesome-icon :icon="['far', 'money-bill-alt']" />
                </span>
                <span>Ganhos</span>
              </div>
            </router-link>
          </div>

        </nav>

      </div>
    </b-sidebar>

    <router-view class="mt-3 home" />

    <b-modal id="modal-center" centered title="Escolher agenda" @ok="salvarFuncionarioEscolhido" hide-header-close no-close-on-esc no-close-on-backdrop ok-only>
      <p class="my-4">Selecione um funcionário para ver a agenda!</p>

      <b-list-group>
       <b-list-group-item button @click="selecionarFuncionario(funcionario.cpf)" v-for="funcionario in $store.state.funcionarios" :key="funcionario.cpf"><b-avatar></b-avatar> {{funcionario.nome}}</b-list-group-item>
     </b-list-group>
    </b-modal>

  </div>
</template>

<style>

@font-face {
font-family: 'Roboto';
  src: url('assets/fonts/Roboto-Light.ttf')  format('truetype');
}

@font-face {
font-family: 'Roboto-Regular';
  src: url('assets/fonts/Roboto-Regular.ttf')  format('truetype');
}

.nav-item{
  margin-top: 10px;
  /* border-bottom: 1px solid #eee; */
}

.nav-item a{
  /* color: #EF5350; */
  color: #555;
  /* font-size: 17px; */
  font-family: 'Roboto-Regular';
}

.nav-item a svg{
  font-size: 22px;
  margin-right: 20px;
  margin-left: -10px;
}

#btn-toggle:focus {
  box-shadow: none!important;
}

body{
  background-color: #fff;
  font-family: 'Roboto'!important;
}

.page-title{
  color: #fff!important;
}

#app{
  background: #f09290!important;
}

.nav-link{
  border-radius: 0!important;
}
.router-link-exact-active{
  color: hotpink!important;
}

.card, .card-body{
  border: none!important;
}

.mes, .mes:focus{
  width: auto!important;
  background-color: transparent!important;
  border: none!important;
  outline: none!important;
  box-shadow: none!important;
}

.mes option{
  color: #000!important;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
