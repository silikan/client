//get rooms from server
import CartService from "@/services/CartService.js";
import { getError } from "@/utils/helpers";

export const namespaced = true;

export const state = {
  cart: {},
  cartItems: [],
  cartItemData: [],
  cartItem: {},
  error: null,
};

export const mutations = {
  SET_CART(state, payload) {
    state.cart = payload;
  },
  SET_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
  SET_CART_ITEM_DATA(state, payload) {
    state.cartItemData = payload;
  },
  SET_CART_ITEM(state, payload) {
    state.cartItem = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  }

};

export const actions = {
  async createCart({ commit }) {
    try {
    const cart = await CartService.createCart();
    commit("SET_CART", cart);
    } catch (error) {
      commit("SET_ERROR", error);
    }

  },
  async addToCart({ commit }, payload) {
    try{ 
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
            task_item_id: payload.task_item_id,
            plan: payload.plan,
          };
          console.log(sentData);
          commit("SET_CART", result.data);
          let cartItemData = await CartService.addToCart(sentData);
          console.log(cartItemData.data);
          commit("SET_CART_ITEM_DATA", cartItemData.data);
        })
        .catch((err) => {
          console.log(err);
        });
     } catch (error) {
      commit("SET_ERROR", getError(error));
    }
    
  },

  async getUserCartItems({ commit }, id) {
    try{ 
      const cartItems = await CartService.getUserCartItems(id);
      commit("SET_CART_ITEMS", cartItems.data);
      return cartItems.data;
     } catch (error) {
      commit("SET_ERROR", getError(error));
    }

  },

  async setCartItemStatusToAccepted({ commit }, payload) {
    try{ 
      const cartItems = await CartService.setCartItemStatusToAccepted(payload);
      commit("SET_CART_ITEMS", cartItems.data);
      return cartItems.data;
     } catch (error) {
      commit("SET_ERROR", getError(error));
    }

  },
  async setCartItemStatusToDeclined({ commit }, payload) {
    try{
    const cartItems = await CartService.setCartItemStatusToDeclined(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setCartItemStatusToPaid({ commit }, payload) {
    try{
    const cartItems = await CartService.setCartItemStatusToPaid(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setCartItemStatusToCancelled({ commit }, payload) {
    try{
    const cartItems = await CartService.setCartItemStatusToCancelled(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setCartItemStatusToInProgress({ commit }, payload) {
    try{
    const cartItems = await CartService.setCartItemStatusToInProgress(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setCartItemStatusToCompleted({ commit }, payload) {
    try{
    const cartItems = await CartService.setCartItemStatusToCompleted(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async getCartItemById({ commit }, payload) {
    try{
    let id = payload.id;
    const cartItem = await CartService.getCartItemById(id);
    commit("SET_CART_ITEM", cartItem.data);
    return cartItem.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setCartItemStatusToConfirmed({ commit }, payload) {
    try{
    const cartItem = await CartService.setCartItemStatusToConfirmed(payload);
    commit("SET_CART_ITEM", cartItem.data);
    return cartItem.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
};

export const getters = {
  cart: (state) => state.cart,
  cartItems: (state) => state.cartItems,
  cartItemData: (state) => state.cartItemData,
  cartItem: (state) => state.cartItem,
  getError: (state) => state.error,
};
