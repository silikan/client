import AdminServices from "../../services/AdminServices";
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
/* function setPaginatedUsers(commit, response) {
  commit("SET_ADMIN_USERS", response.data.data);
  commit("SET_ADMIN_USERS_META", response.data.meta);
  commit("SET_ADMIN_USERS_LINKS", response.data.links);
  commit("SET_ADMIN_USERS_LOADING", false);
}

function setPaginatedClientRequest(commit, response) {
  commit("SET_ADMIN_CLIENT_REQUEST", response.data.data);
  commit("SET_ADMIN_CLIENT_REQUEST_META", response.data.meta);
  commit("SET_ADMIN_CLIENT_REQUEST_LINKS", response.data.links);
  commit("SET_ADMIN_CLIENT_REQUEST_LOADING", false);
} */

export const state = {
  gigs: [],
  gigsMeta: {},
  gigsLinks: {},
  gigsLoading: false,
  users: [],
  usersMeta: {},
  usersLinks: {},
  usersLoading: false,
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
};

export const actions = {
  async getAllGigsPaginated({ commit }, page) {
    commit("SET_GIGS_LOADING", true);
    const Gigs = await AdminServices.getAllGigsPaginated(page);
    setPaginatedGigs(commit, Gigs);

    return Gigs.data;
  },
  async getGigLink({ commit }, link) {
    commit("SET_GIGS_LOADING", true);
    const Gigs = await AdminServices.getLink(link);
    setPaginatedGigs(commit, Gigs);
    return Gigs.data;
  },

  async getAllUsersPaginated({ commit }, page) {
    commit("SET_USERS_LOADING", true);
    const Users = await AdminServices.getAllUsersPaginated(page);
    setPaginatedUsers(commit, Users);

    return Users.data;
  },
  async getUserLink({ commit }, link) {
    commit("SET_USERS_LOADING", true);
    const Users = await AdminServices.getLink(link);
    setPaginatedUsers(commit, Users);
    return Users.data;
  },

  async deleteUser({ commit }, id) {
    commit("SET_USERS_LOADING", true);
    const response = await AdminServices.deleteUser(id);
    return response;
  },
  async deleteGig({ commit }, id) {
    commit("SET_GIGS_LOADING", true);
    const response = await AdminServices.deleteGig(id);
    return response;
  },
  async deleteClientRequest({ commit }, id) {
    commit("SET_USERS_LOADING", true);
    const response = await AdminServices.deleteClientRequest(id);
    return response;
  },

  async getAllTransactions({ commit }, page) {
    commit("SET_USERS_LOADING", true);
    const Transactions = await AdminServices.getAllTransactions(page);
    return Transactions.data;
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
};
