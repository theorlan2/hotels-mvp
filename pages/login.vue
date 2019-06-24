<template>
  <b-container fluid class="cont-login">
    <b-container>
      <b-row>
        <b-col class="cont-login-logo">
          <div class="cont-text">
            <h5>HOTELS MVP</h5>
            <p>Administracion de los Hoteles</p>
            <div class="cont-btn-in-cont-logo">
              <b-button>Registrarte</b-button>
            </div>
          </div>
        </b-col>
        <b-col>
          <b-form
            @submit="onSubmit"
            @reset="onReset"
            data-vv-scope="form_login"
            class="cont-login-form"
          >
            <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                name="email"
                v-validate="'required|email'"
                placeholder="example@email.com"
              ></b-form-input>
              <b-form-invalid-feedback
                :state="!errors_validate.has('form_login.email')"
              >{{ errors_validate.first('form_login.email') }}</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-2" label="Clave:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                name="clave"
                v-validate="'required'"
              ></b-form-input>
              <b-form-invalid-feedback
                :state="!errors_validate.has('form_login.clave')"
              >{{ errors_validate.first('form_login.clave') }}</b-form-invalid-feedback>
            </b-form-group>
            <div class="cont-btn mt-2 text-center">
              <b-button type="submit" class="btn-entrar">Entrar</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    middleware:'logeado',
  head(){
    return {
        title:'HOTELS MVP - Login'
    }
},  data() {
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
        evt.preventDefault();
        let vm = this;
        this.$validator.validateAll("form_login").then(result => {
          if (result) {
             vm.login( vm.form ); 
        }
      });
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''

      },
     ...mapMutations({
      login:'login'
    }),
    }
  }
</script>
