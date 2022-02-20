import { createStore } from "vuex";
import * as auth from "@/store/modules/Auth";
import * as user from "@/store/modules/User";
export default createStore({
  strict: true,

  modules: {
    auth,
    user,
  },
});
