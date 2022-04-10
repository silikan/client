import CategoryService from "@/services/CategoryService";

export const state = {
  gigs: [],
  requests: [],
};

export const mutations = {
  SET_GIGS(state, payload) {
    state.gigs = payload;
  },
  SET_REQUESTS(state, payload) {
    state.requests = payload;
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
};

export const getters = {
  gigs: (state) => state.gigs,
  requests: (state) => state.requests,
};
