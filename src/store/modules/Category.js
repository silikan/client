import CategoryService from "@/services/CategoryService";
export const namespaced = true;

export const state = {
  gigs: [],
  requests: [],
  categories: [],
};

export const mutations = {
  SET_GIGS(state, payload) {
    state.gigs = payload;
  },
  SET_REQUESTS(state, payload) {
    state.requests = payload;
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload;
  },
};

export const actions = {
  async getGigsByCategory({ commit }, title) {
    const response = await CategoryService.getGigsByCategory(title);
    commit("SET_GIGS", response.data);
    return response.data;
  },
  async getclientRequestsByCategory({ commit }, title) {
    const response = await CategoryService.getclientRequestsByCategory(title);
    commit("SET_REQUESTS", response.data);
    return response.data;
  },
  async getCategories({ commit }) {
    const response = await CategoryService.getCategories();
    console.log(response.data);
    commit("SET_CATEGORIES", response.data);
    return response.data;
  },
};

export const getters = {
  gigs: (state) => state.gigs,
  requests: (state) => state.requests,
  categories: (state) => state.categories,
};
