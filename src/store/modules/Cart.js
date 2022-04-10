//get rooms from server
import CartService from "@/services/CartService.js";

export const namespaced = true;

export const state = {
  cart: {},
  cartItems: [],
};

export const mutations = {
  SET_CART(state, payload) {
    state.cart = payload;
  },
  SET_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

export const actions = {
  async createCart({ commit }) {
    const cart = await CartService.createCart();
    commit("SET_CART", cart);
  },
  async addToCart({ commit }, payload) {
    let data = {
      user_id: payload.user_id,
    };
    console.log(data);
    await CartService.createCart(data)
      .then(async (result) => {
        console.log(result.data);
        console.log(payload);

        let sentData = {
          type: payload.type,
          gig_id: payload.gig_id,
          request_id: payload.request_id,
          cart_id: result.data.id,
          client_id: payload.client_id,
          handyman_id: payload.handyman_id,
        };

        commit("SET_CART", result.data);
        await CartService.addToCart(sentData);
      })
      .catch(() => {
        console.log("error");
      });
  },

  async getUserCartItems({ commit }, id) {
    const cartItems = await CartService.getUserCartItems(id);
    commit("SET_CART_ITEMS", cartItems.data);
    return cartItems.data;
  },
};

export const getters = {
  cart: (state) => state.cart,
  cartItems: (state) => state.cartItems,
};
