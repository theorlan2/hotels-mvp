<template>
<b-container fluid="" class="cont-login" >
    <b-container>
        <b-row>
<b-col class="cont-login-logo" >
    <div class="cont-text">
    <h5>HOTELS MVP</h5>
    <p>Administracion de los Hoteles</p>
    </div>
</b-col>
<b-col>
    <b-form @submit="onSubmit" @reset="onReset"  class="cont-login-form" >
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Clave:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder=""
        ></b-form-input>
      </b-form-group>

  
      <b-button type="reset" class="btn-cancel" variant="danger">Cancelar</b-button>
      <b-button type="submit"  class="btn-entrar" variant="primary">Entrar</b-button>
    </b-form> 
    </b-col>

        </b-row>
        </b-container>

  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
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
        this.form.password = ''

      }
    }
  }
</script>
