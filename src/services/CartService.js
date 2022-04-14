import * as API from "@/services/API";

export default {
  async createCart(payload) {
    return await API.apiClient.post(`/cart`, payload);
  },
  async addToCart(payload) {
    return await API.apiClient.post(`/add-to-cart`, payload);
  },
  async getUserCartItems(id) {
    console.log(id);
    return await API.apiClient.get(`/user/${id}/cart`);
  },

  async setCartItemsStatusToInProgress(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-in-progress`, payload);
  },
  async setCartItemsStatusToCancelled(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-cancelled`, payload);
  },
  async setCartItemsStatusToCompleted(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-completed`, payload);
  },
};
