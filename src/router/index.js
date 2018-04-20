import Vue from 'vue';
import VueRouter from "vue-router";
import IndexView from "../components/Index"
import HomeView from "../components/pages/Home"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: IndexView,
    children: [
      {
        path: '/',
        component: HomeView
      }
    ]
  }]
})
