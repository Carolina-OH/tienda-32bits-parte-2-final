<template>
<div>
    <div class="tittle">
    <h1> 32 Bits</h1>
    <h3>Juegos de PC y consolas</h3>
    </div>
    <div class="lista">
     <router-link :to="{name: 'inicio'}">Inicio</router-link> 
     <router-link :to="{name: 'busquedas'}">Búsquedas</router-link> 
     <router-link :to="{name: 'ventas'}">Ventas</router-link> 
     <router-link :to="{name: 'total'}">Total</router-link> 
    </div>
    <transition name="vista">
        <router-view></router-view>
    </transition>

</div>
</template>

<script>
export default {
    name: 'presentación',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
.tittle{
    text-align:center;
    font-size:40px
    }
.lista{
  background-color:black;
  height:100px;
  font-size:40px;
  display:flex;
  align-items:center;
  justify-content:space-around;
}
a{
  color:white;
  text-decoration:none;
}
a:hover{
  color:grey
}
</style>