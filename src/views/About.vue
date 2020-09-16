<template>
  <div class="about">
    <h2>Clientes</h2>
    
    <div class="form-group">
      <div class="input-group">
          <input class="form-control py-2 border-right-0 border" type="text" placeholder="Pesquisar" id="example-search-input" autofocus>
          <span class="input-group-append">
              <div class="input-group-text bg-transparent"><font-awesome-icon icon="search" /></div>
          </span>
      </div>
    </div>

    <div class="">
      <div class="card">
        <div class="card-body pt-2 pb-2">
          <div class="row">
            <div class="col-4">
              <b>Nome</b>
            </div>
            <div class="col-4">
              <b>CPF</b>
            </div>
            <div class="col-4">
              <b>Telefone</b>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-2">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              Ludiane Paranhos Reis
            </div>
            <div class="col-4">
              000.000.000-00
            </div>
            <div class="col-4">
              (69) 90000-0000
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-2">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              Ludiane Paranhos Reis
            </div>
            <div class="col-4">
              000.000.000-00
            </div>
            <div class="col-4">
              (69) 90000-0000
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-2">
        <div class="card-body">
          <div class="row">
            <div class="col-4">
              Ludiane Paranhos Reis
            </div>
            <div class="col-4">
              000.000.000-00
            </div>
            <div class="col-4">
              (69) 90000-0000
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

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
</style>
