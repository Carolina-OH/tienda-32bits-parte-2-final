<template>
    <div>
    <div class="filtro">
    <label>Seleccione código de juego</label>
    <input type="text" v-model="search" @change="buscar">
   <!--<select>
    <option v-for="juego in Juegos" :key="juego.codigo" v-text="juego.codigo"></option>
    </select>!-->
    </div>
    <div class="filtro">
    Cantidad de juegos disponibles: {{totalJuegosstock}}
    </div>
    <div class="filtro">
     <ul>
      <li v-for="juego in Juegos" :key="juego.codigo">
          <div class="lista" :style="{background: juego.color}">{{juego.codigo}}|{{juego.nombre}}|{{juego.stock}}|{{juego.precio}}</div>
     </li>
    </ul>
    </div>
    <div>
    
    </div>
    <div>

    </div>
</div>
</template>

<script>
export default {
    name: 'filtro',
        props: {    
        Juegos:{
            type: Array,
            required: true,
        },
        totalJuegosstock: {},
    },
    data: function(){
        
        return {
            search:'',

        }
    },
    // computed: {},
    methods: {
      buscar(){
      this.$emit("buscar",{
        search_codigo:this.search,
      })
      },
    },
    components: {

    },
}
</script>

<style scoped>
        label, button{
        margin-right:20px;
        margin-left:20px
    }
</style>