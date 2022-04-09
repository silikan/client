import { createStore } from "vuex";
import * as auth from "@/store/modules/Auth";
import * as user from "@/store/modules/User";
import * as handyman from "@/store/modules/Handyman";
import * as Chat from "@/store/modules/Chat";
import * as Loading from "@/store/modules/Loading";
import * as Gig from "@/store/modules/Gig";
import * as Request from "@/store/modules/Request";
import * as Cart from "@/store/modules/Cart";
import * as Task from "@/store/modules/Task";
import * as Search from "@/store/modules/Search";

export default createStore({
  strict: true,

  modules: {
    auth,
    user,
    handyman,
    Chat,
    Loading,
    Gig,
    Request,
    Cart,
    Task,
    Search,
  },
});
