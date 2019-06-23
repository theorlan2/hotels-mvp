<template>
  <div  class="cont-buscador-disponibilidad" > 
<b-container>
    <b-form @submit="onSubmit" @reset="onReset" >
        <b-row class="row-search-home" > 
          
        <b-col sm="12" md="6" lg="3"  >
                <b-form-group id="group-buscador-disponibilidad-hotel" label="Hotel:" label-for="input-hotel">
       <multiselect v-model="form.hotel" id="input-hotel" placeholder="Seleccionar Hotel" :options="hoteles"></multiselect> 
                </b-form-group>
        </b-col>

        <b-col sm="12" md="6" lg="3" > 
      <b-form-group id="group-buscador-disponibilidad-" label="Desde:" label-for="input-2">
      <flat-pickr class="form-control"
                              :config="pickerConfig.start"
                              v-model="form.dateStart"
                              placeholder="Selecciona"
                              @on-change="onStartChange">
                  </flat-pickr>
      </b-form-group>
        </b-col>

        <b-col sm="12" md="6" lg="3" > 
      <b-form-group id="group-buscador-disponibilidad-" label="Hasta:" label-for="input-2">
     <flat-pickr class="form-control"
                              :config="pickerConfig.end"
                              v-model="form.dateEnd"
                              placeholder="Selecciona"
                              @on-change="onEndChange">
                  </flat-pickr>
      </b-form-group>
        </b-col>

        <b-col sm="12" md="6" lg="3" >
    <b-form-group id="group-buscador-disponibilidad-" label="Tipo de Habitacion:" label-for="input-tipo-habitacion">
       <multiselect v-model="form.tipo_habitacion" id="input-tipo-habitacion"  placeholder="Seleccionar Habitacion" :options="tipos_habitacions"></multiselect> 
                </b-form-group>
        </b-col>
    
    <b-col sm="12" md="6" lg="12" class="text-center" >
      <b-button type="submit"  class="btn-buscar-disponibilidad">Buscar</b-button>

    </b-col>
<!--       <b-button type="reset" variant="danger">Reset</b-button> -->
              </b-row>
    </b-form>
 
</b-container> 
  </div>
</template>

<script>
import Vue from 'vue';
import Multiselect from 'vue-multiselect'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
  
 
  Vue.component('multiselect', Multiselect)

  export default {
    created(){
      // obtener los datos de Hotel y tipo e habitacion
    },
    components:{
        Multiselect,
        flatPickr
    },
    data() {
      return { 
        hoteles: ['Bahia Principe', 'Catalonia Santo Domingo', 'Hard Rock'],
        tipos_habitacions:['Standar', 'Full'],
        form: {
          hotel: null, 
          tipo_habitacion:null,
          dateStart:null,
          dateEnd:null,

        },
        // Configuracion de FLatpicker
        pickerConfig: {
          start: {
            minDate: new Date(),
            maxDate: null
          },
          end: {
            minDate: null
          }
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
       onStartChange(selectedDates, dateStr, instance) {
        this.$set(this.pickerConfig.end, 'minDate', dateStr);
      },
      onEndChange(selectedDates, dateStr, instance) {
        this.$set(this.pickerConfig.start, 'maxDate', dateStr);
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
