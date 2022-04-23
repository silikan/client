export const namespaced = true;
import { getError } from "@/utils/helpers";

export const state = {
  users: [],
  gigs: [],
  handymen: [],
  loading: false,
  error: null,
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setRequests(state, requests) {
    state.requests = requests;
  },
  setGigs(state, gigs) {
    state.gigs = gigs;
  },
  setHandymen(state, handymen) {
    state.handymen = handymen;
  },
  setClients(state, clients) {
    state.clients = clients;
  },
  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

export const actions = {
  async getThreeRandomUsers({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.post("/feed/users");
      commit("setUsers", response.data);
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
  async getThreeRandomGigs({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.post("/feed/gigs");
      commit("setGigs", response.data);
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
  async getThreeRandomHandymen({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.post("/feed/handymen");
      commit("setHandymen", response.data);
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
};

export const getters = {
  users: (state) => state.users,
  gigs: (state) => state.gigs,
  handymen: (state) => state.handymen,
  loading: (state) => state.loading,
  error: (state) => state.error,
};
