<template>
    <b-container fluid="">
        <b-container>
        <h4 class="center" >Reservar</h4>


        </b-container>
    </b-container>
    
</template>

<script>
import * as request from '../request/reservas';

export default {

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
