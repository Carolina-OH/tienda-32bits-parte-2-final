<template>
<div>
     <div class="who">
     <div class="who1">
     <h1>Quiénes somos</h1>
     </div>
     <div class="who2">
     <h3>Somos una empresa dedicada a la venta de videojuegos
      para consolas también para computadores, al mejor precio
      </h3>
      </div>
    </div>
    </div>
</template>

<script>
//import {mapState} from 'vuex';
//import busqueda from '@/views/Presentacion';
export default {
    name: 'component-name',
    props: {
    },
    data: function(){
        return {}
    },
    computed: {
   //       ...mapState(['juegos']),
    },
    methods: {
        // -- Metodos
    },
    components: {
        //busqueda
    },
}
</script>

<style scoped>
    .who{
        text-align:center;
        display:flex;
        flex-direction:column;
        width:400px;
        justify-content:center;
        margin:auto ;
        margin-top:50px;
    
    }

</style>