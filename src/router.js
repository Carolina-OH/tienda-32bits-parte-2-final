import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const busquedas = () => import('./views/busquedas.vue')
const ventas = () => import('./views/ventas.vue')
const total = () => import('./views/total.vue')
const NotFound = () => import('./views/NotFound.vue')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [

        {
            path:'/inicio',
            name:'inicio',
            component:Inicio
        },
        {
            path:'/',
            redirect:'/inicio'
        },
        {
            path:'/busquedas',
            name:'busquedas',
            //alias:['/search', '/buscar'],
            component:busquedas
        },    
        {
            path:'/ventas',
            name:'ventas',
            component:ventas
        },    
        {
            path:'/total',
            name:'total',
            component:total
        },
        {
            path:'/*',
            name: 'NotFound',
            component: NotFound
        }         

    ]
})