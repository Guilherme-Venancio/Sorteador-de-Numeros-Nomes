import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Numero from '../pages/Numero'
import Nome from '../pages/Nomes'
import Ajuda from '../pages/Ajuda'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'numero',
    path: '/numero',
    component: Numero
},{
    name: 'nome',
    path: '/nome',
    component: Nome
},{
    name: 'ajuda',
    path: '/ajuda',
    component: Ajuda
}]

export default new VueRouter ({
    mode: 'history',
    routes
})
