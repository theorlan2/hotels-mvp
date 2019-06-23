<template>
  <b-container fluid>
    <b-container>
      <div class="cont-title mt-5 mb-3">
        <h4 class="center">Mantenimiento de Habitaciones</h4>
        <p
          class="text-secondary"
        >Crea, ve o edita los detalles de los tipos de habitaciones del sistema.</p>
      </div>
      <div class="mb-2 mt-4 text-right">
        <b-button @click="add(  $event.target)">Crear Habitacion</b-button>
      </div>

      <div class="cont-table">
        <b-table striped hover :items="rooms" :fields="fields" ref="table">
          <template slot="actions" slot-scope="row">
            <b-button size="sm" @click="info(row.item, $event.target)" class="mr-1">Detalles</b-button>
            <b-button size="sm" @click="edit(row.item, $event.target)">Editar</b-button>
            <b-button size="sm" variant="danger" @click="remove(row.item, $event.target)">Eliminar</b-button>
          </template>
        </b-table>
      </div>

      <b-modal size="lg" :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
        <b-container>
          <h5>Tipo habitacion: {{ room.name }}</h5>
          <p>
            Id:
            <b>{{ room.id }}</b>
          </p>
          <p>
            Code:
            <b>{{ room.code }}</b>
          </p>
          <p>Imagen:</p>
          <b-container>
            <b-img :src="room.ImageUrl"></b-img>
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
        :slot-scope="room"
      >
        <FormRooms :idModal="editModal.id" :datosRoom="room"/>
      </b-modal>

      <b-modal
        :id="addModal.id"
        :title="addModal.title"
        size="lg"
        ok-only
        hide-footer
        @hide="resetEditModal(addModal)"
      >
        <FormRooms :idModal="addModal.id" :datosRoom="room"/>
      </b-modal>

      <b-modal
        id="confirm-delete-modal"
        title="Estas seguro que lo deseas Eliminar"
        size="lg"
        @hide="resetEditModal(addModal)"
        @ok="deleteH"
      >
        <p>Esta seguro que desea eliminar esta habitacion ?</p>
      </b-modal>
    </b-container>
  </b-container>
</template>

<script>
import * as request from '../request/tipos_habitaciones';
import FormRooms from '../components/habitaciones/FormRooms';

export default {
head(){
    return {
        title:'HOTELS MVP - Habitaciones'
    }
},
created() {
    let vm = this;
    request.get().then(response => {
//         vm.rooms = response.data;
    });
},
components:{
 FormRooms
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
         rooms: [
          { id: 1, code:'001', name: 'Basica', ImageUrl: '' },
          { id: 2, code:'002', name: 'Standar', ImageUrl: '' },
          { id: 3, code:'003', name: 'Full', ImageUrl: '' }, 
        ],
        room:{
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
        this.room = item;
        this.infoModal.title =  'Detalles'
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      edit(item, button) { 
         this.room = item;
        this.editModal.title =  'Editar' 
        this.$root.$emit('bv::show::modal', this.editModal.id, button)
      },
      add(item, button) {
        this.addModal.title =  'Crear Nuevo'
        this.$root.$emit('bv::show::modal', this.addModal.id, button)
      },
      remove(item, button) {
         this.room = item;          
        this.$root.$emit('bv::show::modal', 'confirm-delete-modal', button)
      },
      deleteH(){
          let vm = this;
          _.remove(this.rooms, function(n) {
              if(n.id == vm.room.id){
                  console.log('eee',n.id,vm.room.id)
                  vm.room.id = null;
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
