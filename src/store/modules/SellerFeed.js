export const namespaced = true;
import { getError } from "@/utils/helpers";

export const state = {
  users: [],
  requests: [],
  clients: [],
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
  async getThreeRandomRequests({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.post("/feed/requests");
      commit("setRequests", response.data);
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
  async getThreeRandomClients({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.post("/feed/clients");
      commit("setClients", response.data);
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
};

export const getters = {
  users: (state) => state.users,
  requests: (state) => state.requests,
  clients: (state) => state.clients,
  loading: (state) => state.loading,
  error: (state) => state.error,
};
