<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" data-vv-scope="form_rooms">
      <b-form-group
        id="input-group-1"
        label="Code:"
        label-for="input-1"
        description="Codigo de tipo de habitacion"
      >
        <b-form-input
          id="input-1"
          name="code"
          v-validate="'required'"
          v-model="form.code"
          type="text"
          placeholder
        ></b-form-input>

        <b-form-invalid-feedback
          :state="!errors_validate.has('form_rooms.code')"
        >{{ errors_validate.first('form_rooms.code') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          name="name"
          v-validate="'required'"
          type="text"
          placeholder
        ></b-form-input>
        <b-form-invalid-feedback
          :state="!errors_validate.has('form_rooms.name')"
        >{{ errors_validate.first('form_rooms.name') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Imagen:"
        label-for="input-1"
        description="Imagen para el tipo de habitacion"
      >
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Selecionar archivo..."
          drop-placeholder="Soltar archivo aqui..."
        ></b-form-file>
      </b-form-group>
      <div class="mt-3">Archivo selecionado: {{ file ? file.name : '' }}</div>

      <div class="mt-3">
        <b-button @click="closeModal" variant="secondary">Cancelar</b-button>
        <b-button type="submit" variant="primary">Guardar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
      props:['idModal','datosRoom'],
      watch:{
          datosRoom:function(value) {
              console.log(value,'eee');
              this.form = value;
          }
      },
      beforeMount(){
              this.form = this.datosRoom;
      },
    data() {
      return {
          file:null,
        form: {
          code: '',
          name: '',
          ImageUrl: '',
 
        },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
 this.$validator.validateAll("form_rooms").then(result => {
          if (result) { 

           this.$root.$emit('bv::hide::modal', this.idModal)
        }
      });
      },
      onReset(evt) {
        evt.preventDefault() 
        this.form.code = ''
        this.form.name = ''
        this.form.ImageUrl = ''
      },
      closeModal(){
           this.$root.$emit('bv::hide::modal', this.idModal)
      }
    }
  }
</script>