import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import DigitalView from "@/views/DigitalView.vue";
import GetInvolvedView from "@/views/GetInvolvedView.vue";
import OurNetworkView from "@/views/OurNetworkView.vue";
import InsightsView from "@/views/InsightsView.vue";
import DonateView from "@/views/DonateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/about', name: 'about', component: AboutView},
    {path: '/digital-divide', name: 'digitalDivide', component: DigitalView},
    {path: '/get-involved', name: 'getInvolved', component: GetInvolvedView},
    {path: '/our-network', name: 'ourNetwork', component: OurNetworkView},
    {path: '/insights', name: 'insights', component: InsightsView},
    {path: '/donate', name: 'donate', component: DonateView}
  ]
})

export default router
