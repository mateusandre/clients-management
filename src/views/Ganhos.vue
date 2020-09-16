<script>
  export default{

  }
</script>

<template>
  <div>

    <div class="container pl-5 mb-5 pr-3 text-white">
      <router-link to="/" class="text-white"><font-awesome-icon icon="arrow-left" /></router-link>
      <h2 class="mt-4"><font-awesome-icon :icon="['far', 'money-bill-alt']" /> Ganhos</h2>
      <small>Aqui estão todos os seus ganhos</small>
    </div>

    <div class="card roundend-body">
      <div class="card-body">
        <h1 class="text-success">R$ 1000,00</h1>
      </div>
    </div>
  </div>
</template>
