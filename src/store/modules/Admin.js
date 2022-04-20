import AdminServices from "../../services/AdminServices";
import { getError } from "@/utils/helpers";

export const namespaced = true;
function setPaginatedGigs(commit, response) {
  commit("SET_GIGS", response.data.data);
  commit("SET_GIGS_META", response.data.meta);
  commit("SET_GIGS_LINKS", response.data.links);
  commit("SET_GIGS_LOADING", false);
}

function setPaginatedUsers(commit, response) {
  console.log(response.data);
  commit("SET_USERS", response.data.data);
  commit("SET_USERS_META", response.data.meta);
  commit("SET_USERS_LINKS", response.data.links);
  commit("SET_USERS_LOADING", false);
}

function setPaginatedClientRequest(commit, response) {
  console.log(response.data);
  commit("SET_CLIENT_REQUEST", response.data.data);
  commit("SET_CLIENT_REQUEST_META", response.data.meta);
  commit("SET_CLIENT_REQUEST_LINKS", response.data.links);
  commit("SET_CLIENT_REQUEST_LOADING", false);
}

export const state = {
  gigs: [],
  gigsMeta: {},
  gigsLinks: {},
  gigsLoading: false,
  users: [],
  usersMeta: {},
  usersLinks: {},
  usersLoading: false,
  error: null,
  clientRequest: [],
  clientRequestMeta: {},
  clientRequestLinks: {},
  clientRequestLoading: false,
};

export const mutations = {
  SET_GIGS(state, gigs) {
    state.gigs = gigs;
  },
  SET_GIGS_META(state, meta) {
    state.gigsMeta = meta;
  },
  SET_GIGS_LINKS(state, links) {
    state.gigsLinks = links;
  },
  SET_GIGS_LOADING(state, loading) {
    state.gigsLoading = loading;
  },
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_USERS_META(state, meta) {
    state.usersMeta = meta;
  },
  SET_USERS_LINKS(state, links) {
    state.usersLinks = links;
  },
  SET_USERS_LOADING(state, loading) {
    state.usersLoading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_CLIENT_REQUEST(state, clientRequest) {
    state.clientRequest = clientRequest;
  },
  SET_CLIENT_REQUEST_META(state, meta) {
    state.clientRequestMeta = meta;
  },
  SET_CLIENT_REQUEST_LINKS(state, links) {
    state.clientRequestLinks = links;
  },
  SET_CLIENT_REQUEST_LOADING(state, loading) {
    state.clientRequestLoading = loading;
  },
};

export const actions = {
  async getAllGigsPaginated({ commit }, page) {
    try {
      commit("SET_GIGS_LOADING", true);
      const Gigs = await AdminServices.getAllGigsPaginated(page);
      setPaginatedGigs(commit, Gigs);
      return Gigs.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_GIGS_LOADING", false);
    }
  },
  async getGigLink({ commit }, link) {
    try {
      commit("SET_GIGS_LOADING", true);
      const Gigs = await AdminServices.getLink(link);
      setPaginatedGigs(commit, Gigs);
      return Gigs.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_GIGS_LOADING", false);
    }
  },

  async getAllUsersPaginated({ commit }, page) {
    try {
      commit("SET_USERS_LOADING", true);
      const Users = await AdminServices.getAllUsersPaginated(page);
      setPaginatedUsers(commit, Users);

      return Users.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },
  async getUserLink({ commit }, link) {
    try {
      commit("SET_USERS_LOADING", true);
      const Users = await AdminServices.getLink(link);
      setPaginatedUsers(commit, Users);
      return Users.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },

  async deleteUser({ commit }, id) {
    try {
      commit("SET_USERS_LOADING", true);
      const response = await AdminServices.deleteUser(id);
      return response;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },
  async deleteGig({ commit }, id) {
    try {
      commit("SET_GIGS_LOADING", true);
      const response = await AdminServices.deleteGig(id);
      return response;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_GIGS_LOADING", false);
    }
  },
  async deleteClientRequest({ commit }, id) {
    try {
      commit("SET_USERS_LOADING", true);
      const response = await AdminServices.deleteClientRequest(id);
      return response;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },

  async getAllTransactions({ commit }, page) {
    try {
      commit("SET_USERS_LOADING", true);
      const Transactions = await AdminServices.getAllTransactions(page);
      return Transactions.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },
  async deleteAllUsers({ commit }) {
    try {
    commit("SET_USERS_LOADING", true);
    const response = await AdminServices.deleteAllUsers();
    return response;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },
  async deleteAllGigs({ commit }) {
    try {
    commit("SET_GIGS_LOADING", true);
    const response = await AdminServices.deleteAllGigs();
    return response;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_GIGS_LOADING", false);
    }
  },
  async deleteAll({ commit }) {
    try {
    commit("SET_USERS_LOADING", true);
    const response = await AdminServices.deleteAll();
    return response;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },
  async deleteAllClientRequests({ commit }) {
    try {
    commit("SET_USERS_LOADING", true);
    const response = await AdminServices.deleteAllClientRequests();
    return response;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_USERS_LOADING", false);
    }
  },
  async getAllClientRequests({ commit }, page) {
    try {
      commit("SET_CLIENT_REQUEST_LOADING", true);
      const ClientRequest = await AdminServices.getAllRequestsPaginated(page);
      setPaginatedClientRequest(commit, ClientRequest);
      return ClientRequest.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_CLIENT_REQUEST_LOADING", false);
    }
  },
  async getClientRequestLink({ commit }, link) {
    try {
      commit("SET_CLIENT_REQUEST_LOADING", true);
      const ClientRequest = await AdminServices.getLink(link);
      setPaginatedClientRequest(commit, ClientRequest);
      return ClientRequest.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_CLIENT_REQUEST_LOADING", false);
    }
  },
};

export const getters = {
  getGigs(state) {
    return state.gigs;
  },
  getGigsMeta(state) {
    return state.gigsMeta;
  },
  getGigsLinks(state) {
    return state.gigsLinks;
  },
  getGigsLoading(state) {
    return state.gigsLoading;
  },
  getUsers(state) {
    return state.users;
  },
  getUsersMeta(state) {
    return state.usersMeta;
  },
  getUsersLinks(state) {
    return state.usersLinks;
  },
  getUsersLoading(state) {
    return state.usersLoading;
  },
  getError(state) {
    return state.error;
  },
  getClientRequest(state) {
    return state.clientRequest;
  },
  getClientRequestMeta(state) {
    return state.clientRequestMeta;
  },
  getClientRequestLinks(state) {
    return state.clientRequestLinks;
  },
  getClientRequestLoading(state) {
    return state.clientRequestLoading;
  },
};
