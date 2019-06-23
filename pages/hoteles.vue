<template>
  <b-container fluid>
    <b-container>
      <div class="cont-title mt-5 mb-3">
        <h4 class="center">Mantenimiento de Hoteles</h4>
        <p class="text-secondary">Crea, ve o edita los detalles de los Hoteles en el sistema.</p>
      </div>
      <div class="mb-2 mt-4 text-right">
        <b-button @click="add(  $event.target)">Crear Hotel</b-button>
      </div>

      <div class="cont-table">
        <b-table striped hover :items="hotels" :fields="fields" ref="table">
          <template slot="actions" slot-scope="row">
            <b-button size="sm" @click="info(row.item, $event.target)" class="mr-1">Detalles</b-button>
            <b-button size="sm" @click="edit(row.item, $event.target)">Editar</b-button>
            <b-button size="sm" variant="danger" @click="remove(row.item, $event.target)">Eliminar</b-button>
          </template>
        </b-table>
      </div>

      <b-modal size="lg" :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
        <b-container>
          <h5>Hotel: {{ hotel.name }}</h5>
          <p>
            Id:
            <b>{{ hotel.id }}</b>
          </p>
          <p>
            Codigo:
            <b>{{ hotel.code }}</b>
          </p>
          <p>Imagen:</p>
          <b-container>
            <b-img :src="hotel.ImageUrl"></b-img>
          </b-container>
        </b-container>
      </b-modal>

      <b-modal
        :id="editModal.id"
        :title="editModal.title"
        size="lg"
        ok-only
        @hide="resetEditModal(editModal)"
        hide-footer
        :slot-scope="hotel"
      >
        <FormHotel :idModal="editModal.id" :datosHotel="hotel"/>
      </b-modal>

      <b-modal
        :id="addModal.id"
        :title="addModal.title"
        size="lg"
        ok-only
        hide-footer
        @hide="resetEditModal(addModal)"
      >
        <FormHotel :idModal="addModal.id" :datosHotel="hotel"/>
      </b-modal>

      <b-modal
        id="confirm-delete-modal"
        title="Estas seguro que lo deseas Eliminar"
        size="lg"
        @hide="resetEditModal(addModal)"
        @ok="deleteH"
      >
        <p>Esta seguro que desea eliminar este hotel?</p>
      </b-modal>
    </b-container>
  </b-container>
</template>

<script>
import * as request from '../request/tipos_habitaciones';
import FormHotel from '../components/hoteles/FormHotel';

export default {
head(){
    return {
        title:'HOTELS MVP - Habitaciones'
    }
},
created() {
    let vm = this;
    request.get().then(response => {
//         vm.hotels = response.data;
    });
},
components:{
 FormHotel
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
          { id: 1, code:'001', name: 'Catalonia Santo Domingo', ImageUrl: '' },
          { id: 2, code:'002', name: 'Hard Rock', ImageUrl: '' },
          { id: 3, code:'003', name: 'Barceló Santo Domingo', ImageUrl: '' }, 
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
      info(item, button) {
        this.hotel = item;
        this.infoModal.title =  'Detalles'
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      edit(item, button) { 
         this.hotel = item;
        this.editModal.title =  'Editar' 
        this.$root.$emit('bv::show::modal', this.editModal.id, button)
      },
      add(item, button) {
        this.addModal.title =  'Crear Nuevo'
        this.$root.$emit('bv::show::modal', this.addModal.id, button)
      },
      remove(item, button) {
         this.hotel = item;          
        this.$root.$emit('bv::show::modal', 'confirm-delete-modal', button)
      },
      deleteH(){
          let vm = this;
          _.remove(this.hotels, function(n) {
              if(n.id == vm.hotel.id){
                  console.log('eee',n.id,vm.hotel.id)
                  vm.hotel.id = null;
                  return true;
              }
            });
            this.$refs.table.refresh(); 
      },
      resetEditModal(){
        this.editModal.title = ''
        this.editModal.content = ''
      },
      resetInfoModal(){
        this.infoModal.title = ''
        this.infoModal.content = ''
      }

}

}
</script>

<style>

</style>
