import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import contact from '@/components/contact.vue'
import about from '@/components/about.vue'
import services from '@/components/services.vue'
import privacy from '@/components/privacy.vue'

import energyindustry from '@/components/energyindustry.vue'
import research from '@/components/research.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/services',
        name: 'services',
        component: services
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    },
     {
        path: '/privacypolicy',
        name: 'privacy',
        component: privacy
    },
    {
        path:'/energyindustry',
        name: 'energyindustry',
        component:energyindustry
    },
    {
        path: '/research',
        name: 'research',
        component: research,
    }


]

const router = createRouter({ history: createWebHistory(), routes })
export default router