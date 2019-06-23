<template>
  <div class="container home-container">
    <div class="text-center">
      <h5>Buscar Disponibilidad</h5>
      <p
        class="text-secondary"
      >Realiza una busqueda rapida de Disponibilidad para una fecha en cualquier hotel.</p>
    </div>
    <DisponibilidadBusc/>
    <b-container class="cont-list-btns-home" fluid>
      <h5>Mantenimientos</h5>
      <b-row>
        <BtnHomeIcons to="/hoteles" icon="/img/hotel-icon.png" text="Hoteles"/>
        <BtnHomeIcons to="/habitaciones" icon="/img/rooms-icon.png" text="Habitaciones"/>
        <BtnHomeIcons to="/transporte" icon="/img/transport-icon.png" text="Transporte"/>
        <BtnHomeIcons to="/reservas" icon="/img/reservas-icon.png" text="Reservas"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>  
import DisponibilidadBusc from '../components/Inicio/DisponibilidadBusc'
import BtnHomeIcons from '../components/Inicio/BtnHomeIcons'

export default {
  head(){
    return {
        title:'HOTELS MVP - Dashboard'
    }
},
  components: { 
    DisponibilidadBusc,
    BtnHomeIcons
  }
}
</script>
 