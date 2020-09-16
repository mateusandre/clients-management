<script>
  export default{

  }
</script>

<template>
  <div>

    <div class="container pl-5 mb-5 pr-3 text-white">
      <router-link to="/" class="text-white"><font-awesome-icon icon="arrow-left" /></router-link>
      <h2 class="mt-4"><font-awesome-icon :icon="['fas', 'tools']" /> Serviços</h2>
      <small>Aqui estão listados todos os serviços fornecidos</small>
    </div>

    <div class="card roundend-body">
      <div class="card-body">
        <div class="form-group">
          <input type="text" class="form-control" name="" value="">
        </div>

        <div class="card">
      <div class="card-body pt-2 pb-2">
        <div class="row">
          <div class="col">
            <b>Nome</b>
          </div>
          <div class="col">
            <b>Preço</b>
          </div>
        </div>
      </div>
    </div>

        <div class="card mt-2" v-for="servico in $store.state.servicos" :key="servico.cpf">
          <div class="card-body">
            <div class="row">
              <div class="col">
                {{servico.nome}}
              </div>
              <div class="col">
                {{servico.preco}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
