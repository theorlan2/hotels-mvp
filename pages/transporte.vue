<template>
  <b-container fluid>
    <b-container>
      <div class="cont-title mt-5 mb-3">
        <h4 class="center">Mantenimiento de Transportes</h4>
        <p class="text-secondary">Crea, ve o edita los detalles de las opciones de transporte.</p>
      </div>
      <div class="mb-2 mt-4 text-right">
        <b-button @click="add(  $event.target)">Crear Opcion de transporte</b-button>
      </div>

      <div class="cont-table">
        <b-table striped hover :items="hotels" :fields="fields" ref="table">
          <template slot="actions" slot-scope="row">
            <b-button size="sm" class="mr-1">Detalles</b-button>
            <b-button size="sm">Editar</b-button>
            <b-button size="sm" variant="danger">Eliminar</b-button>
          </template>
        </b-table>
      </div>
    </b-container>
  </b-container>
</template>

<script> 

export default {
head(){
    return {
        title:'HOTELS MVP - Transporte'
    }
}, 
components:{
 
},
data() {
    return {
         fields: [
          {
            key: 'id',
            sortable: true
          },
              {
                key: 'code',
                label:'Codigo'
              },
          {
            key: 'name',
            label: 'Nombre',
            sortable: false
          },
          {
           key: 'actions',
           label: 'Acciones' 
           }
         ],
         hotels: [
          { id: 1, code:'001', name: 'Avion', ImageUrl: '' },
          { id: 2, code:'002', name: 'Barco', ImageUrl: '' },
          { id: 3, code:'003', name: 'Guaguas', ImageUrl: '' }, 
        ],
        hotel:{
            id: 0, code:null, name: null, ImageUrl: '' 
        },
        infoModal: {
          id: 'info-modal',
          title: '', 
        },
        editModal: {
          id: 'edit-modal',
          title: '', 
        },
        addModal: {
          id: 'add-modal',
          title: '', 
        }
    }    
},
methods:{ 
}

}
</script>

<style>

</style>
