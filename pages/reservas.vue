<template>
  <b-container fluid>
    <b-container>
      <div class="cont-title mt-5 mb-3">
        <h4 class="center">Reservas</h4>
        <p class="text-secondary">Podras ver todas las reservas creadas o crear una nueva.</p>
      </div>
      <div class="mb-2 mt-4 text-right">
        <b-button>Nueva Reserva</b-button>
      </div>
    </b-container>
  </b-container>
</template>

<script>
import * as request from '../request/reservas';

export default {
head(){
    return {
        title:'HOTELS MVP - Reservas'
    }
},
created() {
    let vm = this;
    request.get().then(response => {
//        vm.reservas = response.data;
    });
},
data() {
    return {
        reservas:null
    }    
}

}
</script>

<style>

</style>
