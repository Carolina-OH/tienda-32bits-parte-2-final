<template>
<div>
    
    <h1> TOTAL VENTAS</h1>
    <div class="total">
    <sumatoria :ventas="ventas" :totalSuma="totalSuma"></sumatoria>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import sumatoria from '../components/sumatoria'
export default {
    name: 'presentación',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Juegos','ventas']),
        ...mapGetters(['totalJuegos','JuegosParaVender','ventasRealizadas','totalSuma']),
    },
    methods: {
        // -- Metodos
    },
     components: {
         'sumatoria':sumatoria
     },
}
</script>

<style scoped>
    h1{
        text-align:center;
        margin-top:70px;
        margin-bottom:30px;
    }
     .total{
        text-align:left;
        display:flex;
        flex-direction:column;
        width:800px;
        justify-content:center;
        margin:auto ;
        margin-top:50px;
    
    }
</style>