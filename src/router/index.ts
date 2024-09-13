import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import isAuthenticatedGuard from '@/modules/landing/auth/guards/is-authenticated.guard';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing
    {
      path: '/',
      name: 'Landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          // Sirve para antes de entrar a la ruta
          beforeEnter:  [
            isAuthenticatedGuard
          ],
          // props: true, // Para marcar que si se mandara una prop
          props: (route) => {
            // console.log({ route });
            const id = +route.params.id;
            return isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    // Auth
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' }, // '/login' otra manera
      component: () => import('@/modules/landing/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/landing/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/landing/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // not found
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
    },
  ],
});

export default router;
