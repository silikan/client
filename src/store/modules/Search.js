//get rooms from server
import SearchService from "@/services/SearchService.js";

function setPaginatedSeachGigs(commit, response) {
  commit("SET_SEARCH_GIGS", response.data.data);
  commit("SET_SEARCH_GIGS_META", response.data.meta);
  commit("SET_SEARCH_GIGS_LINKS", response.data.links);
  commit("SET_SEARCH_GIGS_LOADING", false);
}
function setPaginatedSearchHandymen(commit, response) {
  commit("SET_SEARCH_HANDYMEN", response.data.data);
  commit("SET_SEARCH_HANDYMEN_META", response.data.meta);
  commit("SET_SEARCH_HANDYMEN_LINKS", response.data.links);
  commit("SET_SEARCH_HANDYMEN_LOADING", false);
}

function setPaginatedSearchClientRequest(commit, response) {
  commit("SET_SEARCH_CLIENT_REQUEST", response.data.data);
  commit("SET_SEARCH_CLIENT_REQUEST_META", response.data.meta);
  commit("SET_SEARCH_CLIENT_REQUEST_LINKS", response.data.links);
  commit("SET_SEARCH_CLIENT_REQUEST_LOADING", false);
}

export const namespaced = true;

export const state = {
  searchResults: [],
  searchGigs: [],
  searchGigsMeta: null,
  searchGigsLinks: null,
  searchGigsLoading: false,
  searchHandymen: [],
  searchHandymenMeta: null,
  searchHandymenLinks: null,
  searchHandymenLoading: false,
  searchClientRequest: [],
  searchClientRequestMeta: null,
  searchClientRequestLinks: null,
  searchClientRequestLoading: false,
};

export const mutations = {
  SET_SEARCH_RESULTS(state, payload) {
    state.searchResults = payload;
  },
  SET_SEARCH_GIGS(state, payload) {
    state.searchGigs = payload;
  },
  SET_SEARCH_GIGS_META(state, payload) {
    state.searchGigsMeta = payload;
  },

  SET_SEARCH_GIGS_LINKS(state, payload) {
    state.searchGigsLinks = payload;
  },
  SET_SEARCH_GIGS_LOADING(state, payload) {
    state.searchGigsLoading = payload;
  },
  SET_SEARCH_HANDYMEN(state, payload) {
    state.searchHandymen = payload;
  },
  SET_SEARCH_HANDYMEN_META(state, payload) {
    state.searchHandymenMeta = payload;
  },
  SET_SEARCH_HANDYMEN_LINKS(state, payload) {
    state.searchHandymenLinks = payload;
  },
  SET_SEARCH_HANDYMEN_LOADING(state, payload) {
    state.searchHandymenLoading = payload;
  },
  SET_SEARCH_CLIENT_REQUEST(state, payload) {
    state.searchClientRequest = payload;
  },
  SET_SEARCH_CLIENT_REQUEST_META(state, payload) {
    state.searchClientRequestMeta = payload;
  },
  SET_SEARCH_CLIENT_REQUEST_LINKS(state, payload) {
    state.searchClientRequestLinks = payload;
  },
  SET_SEARCH_CLIENT_REQUEST_LOADING(state, payload) {
    state.searchClientRequestLoading = payload;
  },
};

export const actions = {
  async search({ commit }, search) {
    const searchResults = await SearchService.searchFunction(search);
    commit("SET_SEARCH_RESULTS", searchResults);
    return searchResults.data;
  },
  async searchGigsPaginate({ commit }, search) {
    commit("SET_SEARCH_GIGS_LOADING", true);
    const searchGigs = await SearchService.searchGigsPaginate(search);
    setPaginatedSeachGigs(commit, searchGigs);
    return searchGigs.data;
  },
  async paginateGigs({ commit }, search) {
    commit("SET_SEARCH_GIGS_LOADING", true);
    const searchGigs = await SearchService.paginateGigs(search);
    setPaginatedSeachGigs(commit, searchGigs);
    return searchGigs.data;
  },
  async searchHandymenPaginate({ commit }, search) {
    commit("SET_SEARCH_HANDYMEN_LOADING", true);
    const searchHandymen = await SearchService.searchHandymenPaginate(search);
    setPaginatedSearchHandymen(commit, searchHandymen);
    return searchHandymen.data;
  },
  async paginateHandymen({ commit }, search) {
    commit("SET_SEARCH_HANDYMEN_LOADING", true);
    const searchHandymen = await SearchService.paginateHandymen(search);
    setPaginatedSearchHandymen(commit, searchHandymen);
    return searchHandymen.data;
  },
  async searchClientRequestPaginate({ commit }, search) {
    commit("SET_SEARCH_CLIENT_REQUEST_LOADING", true);
    const searchClientRequest = await SearchService.searchClientRequestPaginate(search);
    setPaginatedSearchClientRequest(commit, searchClientRequest);
    return searchClientRequest.data;
  },
  async paginateClientRequest({ commit }, search) {
    commit("SET_SEARCH_CLIENT_REQUEST_LOADING", true);
    const searchClientRequest = await SearchService.paginateClientRequest(search);
    setPaginatedSearchClientRequest(commit, searchClientRequest);
    return searchClientRequest.data;
  },
};

export const getters = {
  getSearchResults(state) {
    return state.searchResults;
  },
};
