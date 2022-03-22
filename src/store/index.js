import { createStore } from 'vuex';
import * as auth from '@/store/modules/Auth';
import * as user from '@/store/modules/User';
import * as handyman from '@/store/modules/Handyman';
import * as Chat from '@/store/modules/Chat';
export default createStore({
  strict: true,

  modules: {
    auth,
    user,
    handyman,
    Chat,
  },
});
