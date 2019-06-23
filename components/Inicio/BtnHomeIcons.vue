<template>
<b-col sm="12" md="6" lg="4" class="col-btn-home-icon" >
<div class="cont-btn-home-icon">
    <nuxt-link :to="to" class="link-contenedors" >
<div class="cont-icon">
    <img :src="icon" alt="">
</div> 
<p>{{ text }}</p> 
    </nuxt-link>
</div>

</b-col>
</template>

<script>
export default {
props:['text','icon','to']

}
</script>
 