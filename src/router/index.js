import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: '/letter',
      name: 'letter',
      component: () => import("../views/LetterView.vue"),
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: () => import("../views/PruebaView.vue"),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: '/answer',
      name: 'answer',
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: '/claim',
      name: 'claim',
      component: () => import("../views/Claimview.vue"),
    },
  ],
  
});

export default router;
