import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";
//import auth from "@/middleware/auth";
//import admin from "@/middleware/admin";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";
import Signup from "@/views/Signup.view.vue";
import Signin from "@/views/Signin.view.vue";
import ForgotPassword from "@/views/Forgot_Password.view.vue";
import ResetPassword from "@/views/Reset_Password.view.vue";
import Home from "@/views/Home.view.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: { middleware: [guest] },
    component: Home
  },
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
    path: "/signin",
    name: "Signin",
    meta: { middleware: [guest] },
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    meta: { middleware: [guest] },
    component: Signup,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    meta: { middleware: [guest] },
    component: ForgotPassword,
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    meta: { middleware: [guest] },
    component: ResetPassword,
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
