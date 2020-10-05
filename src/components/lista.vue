<template>
    <div>
    <h4>Cantidad de Juegos con stock:{{totalJuegosstock}} </h4>
    <ul>
    <li v-for="juego in JuegosParaVender" :key="juego.codigo">
      <div class="lista" :style="{background: juego.color}">{{juego.codigo}}|{{juego.nombre}}|{{juego.stock}}|{{juego.precio}} <button @click="vender(juego)">Vender</button></div>
    </li>
    </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'lista-component',
    props: {
        Juegos:{
            type: Array,
            required: true,
        },
        JuegosParaVender:{
            type:Array,
        },
        totalJuegosstock:{

        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
          ...mapActions(['vender'])
    },
    // components: {},
}
</script>

<style scoped>
    h4{
    margin-top:0;    
    text-align:center;
    }
    .lista{
        display:grid;
        grid-template-columns: 380px 1fr
    }
    button{
        width:50px;
        height:20px;
        border-radius:15px;
        font-size:10px;
    }

</style>