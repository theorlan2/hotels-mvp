<template>
  <div class="container home-container">

    <h5 class="aling-center" >Buscar Disponibilidad</h5>
    <DisponibilidadBusc/>
    <b-container class="cont-list-btns-home" fluid >
      <h5>Mantenimientos</h5>
      <b-row  > 
        <BtnHomeIcons to='/reservas' icon='/img/reservas-icon.png' text='Reservas' />
        <BtnHomeIcons to='/tipos_habitaciones' icon='/img/rooms-icon.png' text='Tipos Habitaciones' />
        <BtnHomeIcons to='/' icon='/img/transport-icon.png' text='Transporte' />        
      </b-row>
    </b-container>
  </div>
</template>

<script> 

import DisponibilidadBusc from '../components/Inicio/DisponibilidadBusc'
import BtnHomeIcons from '../components/Inicio/BtnHomeIcons'

export default {
  components: { 
    DisponibilidadBusc,
    BtnHomeIcons
  }
}
</script>
 