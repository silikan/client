import AdminServices from "../../services/AdminServices";
export const namespaced = true;
function setPaginatedGigs(commit, response) {
  commit("SET_GIGS", response.data.data);
  commit("SET_GIGS_META", response.data.meta);
  commit("SET_GIGS_LINKS", response.data.links);
  commit("SET_GIGS_LOADING", false);
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
};

export const actions = {
  async getAllGigsPaginated({ commit }, page) {
    commit("SET_SEARCH_GIGS_LOADING", true);
    const Gigs = await AdminServices.getAllGigsPaginated(page);
    setPaginatedGigs(commit, Gigs);

    return Gigs.data;
  },
  async getGigLink({ commit }, link) {
    commit("SET_SEARCH_GIGS_LOADING", true);
    const Gigs = await AdminServices.getGigLink(link);
    setPaginatedGigs(commit, Gigs);
    return Gigs.data;
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
};
