import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";
/* import auth from "@/middleware/auth";
import admin from "@/middleware/admin"; */
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";
const routes = [
  /*   {
      path: "/",
      name: "home",
      meta: { middleware: [guest] },
      component: () => import( "../views/Home"),
    }, */
  /*  {
     path: "/dashboard",
     name: "dashboard",
     meta: { middleware: [auth] },
     component: () =>
       import( "../views/Dashboard"),
   }, */
  /*   {
      path: "/user",
      name: "user",
      meta: { middleware: [auth] },
      component: () => import( "../views/User"),
    },
    {
      path: "/users",
      name: "users",
      meta: { middleware: [auth, admin] },
      component: () => import( "../views/Users"),
    }, */
  {
    path: "/login",
    name: "login",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Signin.view.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { middleware: [guest] },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Signup.view.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, store };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
