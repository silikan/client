import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";
import auth from "@/middleware/auth";
// import admin from "@/middleware/admin";
import guest from "@/middleware/guest";
import middlewarePipeline from "@/router/middlewarePipeline";
import Signup from "@/views/Signup.view.vue";
import Signin from "@/views/Signin.view.vue";
import ForgotPassword from "@/views/Forgot_Password.view.vue";
import ResetPassword from "@/views/Reset_Password.view.vue";
import Home from "@/views/Home.view.vue";
import NotFound from "@/views/404NotFound.view.vue";
import Handymen from "@/views/Handymen.view.vue";
import Requests from "@/views/Requests.view.vue";
import Categories from "@/views/Categories.view.vue";
import EditProfile from "@/views/Edit_Profile.view.vue";
import Profile from "@/views/Profile.view.vue";
import VisitProfile from "@/views/Visit_Profile.view.vue";
import AuthEdit from "../components/Profile/Edit/AuthEdit.component.vue";
import AccountEdit from "../components/Profile/Edit/AccountEdit.component.vue";
import ProfileEdit from "../components/Profile/Edit/ProfileEdit.component.vue";
import ChatRoom from "@/views/ChatRoom.view.vue";
import RoomList from "@/views/RoomList.view.vue";
import CreateGig from "@/views/CreateGig.view.vue";
import CreateRequest from "@/views/CreateRequest.view.vue";
import Buying from "@/views/Buying.view.vue";
import Cart from "@/views/Cart.view.vue";
import Task from "@/views/Task.view.vue";
import GigPage from "@/views/GigPage.view.vue";
import RequestPage from "@/views/RequestPage.view.vue";
import Selling from "@/views/Selling.view.vue";
import AboutUs from "@/views/AboutUs.view.vue";
import ContactUs from "@/views/ContactUs.view.vue";
import SearchList from "@/views/SearchList.view.vue";
import GigSearchResultPage from "@/views/GigSearchResultPage.view.vue";
import RequestSearchResultPage from "@/views/RequestSearchResultPage.view.vue";
import HandymenSearchResultPage from "@/views/HandymenSearchResultPage.view.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    meta: { middleware: [guest] },
    component: Home,
  },
  {
    path: "/search/gigs/:query",
    name: "GigSearchResultPage",
    component: GigSearchResultPage,
  },
  {
    path: "/search/requests/:query",
    name: "RequestSearchResultPage",
    meta: { middleware: [auth, guest] },
    component: RequestSearchResultPage,
  },
  {
    path: "/search/handymen/:query",
    name: "HandymenSearchResultPage",
    meta: { middleware: [auth, guest] },
    component: HandymenSearchResultPage,
  },
  {
    path: "/searchlist",
    name: "SearchList",

    component: SearchList,
  },
  {
    path: "/profile",
    name: "Profile",
    meta: { middleware: [auth] },
    component: Profile,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { middleware: [auth] },
  },
  {
    path: "/task",
    name: "Task",
    component: Task,
    meta: { middleware: [auth] },
  },
  {
    path: "/gig/:id",
    name: "GigPage",
    component: GigPage,
    meta: { middleware: [auth, guest] },
  },
  {
    path: "/request/:id",
    name: "RequestPage",
    component: RequestPage,
    meta: { middleware: [auth, guest] },
  },
  {
    path: "/selling",
    name: "Selling",
    component: Selling,
    meta: { middleware: [auth] },
  },

  {
    path: "/edit/",
    name: "EditProfile",
    meta: { middleware: [auth] },
    component: EditProfile,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      {
        path: "auth",
        name: "AuthEdit",

        component: AuthEdit,
      },
      {
        path: "account",
        name: "AccountEdit",

        component: AccountEdit,
      },

      {
        path: "profile",
        name: "ProfileEdit",

        component: ProfileEdit,
      },
      // ...other sub routes
    ],
  },
  {
    path: "/room/:id",
    name: "ChatRoom",

    component: ChatRoom,
    meta: { middleware: [auth] },
  },
  {
    path: "/rooms",
    name: "RoomList",

    component: RoomList,
    meta: { middleware: [auth] },
  },
  {
    path: "/requests",
    name: "Requests",
    meta: { middleware: [auth, guest] },

    component: Requests,
  },
  {
    path: "/user/:id",
    name: "VisitProfile",

    component: VisitProfile,
    meta: { middleware: [auth, guest] },
  },
  {
    path: "/categories",
    name: "Categories",
    meta: { middleware: [auth, guest] },

    component: Categories,
  },
  {
    path: "/handymen",
    name: "Handymen",
    meta: { middleware: [auth, guest] },

    component: Handymen,
  },
  {
    path: "/gig/create",
    name: "CreateGig",
    component: CreateGig,
    meta: { middleware: [auth] },

    /*     meta: { middleware: [auth, guest] },
     */
  },
  {
    path: "/buying",
    name: "Buying",
    component: Buying,
    meta: { middleware: [auth] },
  },

  {
    path: "/request/create",
    name: "CreateRequest",
    component: CreateRequest,
    meta: { middleware: [auth] },

    /*     meta: { middleware: [auth, guest] },
     */
  },
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
  {
    path: "/aboutus",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { middleware: [auth, guest] },

    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const { middleware } = to.meta;
  const context = {
    to,
    from,
    next,
    store,
  };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
