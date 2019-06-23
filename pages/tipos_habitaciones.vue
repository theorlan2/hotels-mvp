<template>
    <b-container fluid="">
        <b-container>
        <h4 class="center" >Tipos de habitaciones</h4>


        </b-container>
    </b-container>    
</template>

<script>
import * as request from '../request/tipos_habitaciones';

export default {

created() {
    let vm = this;
    request.get().then(response => {
//        vm.tipos = response.data;
    });
},
data() {
    return {

    }    
}

}
</script>

<style>

</style>
