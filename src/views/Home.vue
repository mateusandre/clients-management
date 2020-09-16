<template>
  <div>
    <div class="container mt-4 pl-5 pr-3 text-white">
      <h2><font-awesome-icon :icon="['far', 'calendar-alt']" /> Agenda </h2>
      <h3 style="text-transform: capitalize">
        {{data | moment('dddd') }}, <small>{{data | moment('DD')}} <span style="text-transform: lowercase">de</span> {{data | moment('MMMM')}}</small>
        <datetime class="mt-n5" input-style="opacity: 0;" v-model="data"></datetime>
      </h3>
    </div>

    <div class="card mt-5 roundend-body">
      <div class="card-body">
        <div class="list-unstyled">
          <b-media style="border-bottom: 1px solid #ddd;" v-for="agendamento in $store.state.agendamentos" :key="agendamento.id">
            <template v-slot:aside>
              <address class="mt-3">15H</address>
            </template>
            <div class="alert alert-light">
              <font-awesome-icon icon="thumbtack" class="float-right ml-4" />
              <h5 class="mt-0 mb-1">Ludiane Paranhos Reis da silva sauro dos santos</h5>
              <small class="text-muted"><strong>Serviço:</strong> Fio a fio</small>
              <div> </div>
              <!-- <hr> -->
              <p class="m-0">
                <a href="tel:5551234567" class="btn btn-primary mt-3"><font-awesome-icon icon="phone" class="mr-3" />Ligar</a>
              </p>
            </div>
          </b-media>
        </div>

      </div>
    </div>



  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      funcionarioSelecionado: null,
      data: null,
    }
  },
  components: {
    // HelloWorld
  },
  created(){
    this.data = this.$dateTimeNow
  },
  methods: {

  }
}
</script>

<style media="screen">
  input{
    outline: none !important;
    /* border-color: initial; */
    box-shadow: none!important;
  }

  input:focus ~ .input-group-append > .input-group-text{
    border-left: none!important;
  }

  input:focus, input:focus ~ .input-group-append > .input-group-text{
    border-width: 2px!important;
    border-color: #000!important;
  }

  address{
    position: relative;
    /* font-weight: 600; */
    color: #EF5350;
    border-bottom: 3px solid #f09290;
  }

  .vdatetime-popup__header{
    background-color: #EF5350!important;
  }
/*
  address::after{
    content: '';
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    height: 20px;
    border-top: 4px solid #ddd;
    border-bottom: 4px solid #ddd;
  } */

</style>
