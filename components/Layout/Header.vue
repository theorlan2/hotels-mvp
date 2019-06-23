<template>
  <b-navbar toggleable="lg" type="dark" class="header-top">
      <b-container>
    <b-navbar-brand href="#">
      Hotels MVP
      </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Inicio</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      <b-navbar-nav right v-if="!isLogIn && pageIn != 'login'" >
        <b-nav-item  class="btn-login-header" to="/login">LOGIN</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav right v-if="pageIn == 'login'" >
        <b-nav-item  class="btn-login-header" to="/">INICIO</b-nav-item>
      </b-navbar-nav>


        <b-nav-item-dropdown right v-if="isLogIn">
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>Usuario</em></template>
          <b-dropdown-item to="/administrator">Administrador</b-dropdown-item>
          <b-dropdown-item  >Salid</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
          </b-container>
  </b-navbar>
</template>

<script>
export default {
 props:['pageIn'],
 data() {
  return {
    isLogIn:false,
  }  
}
}
</script>

<style>

</style>
