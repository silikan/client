//get rooms from server
import SearchService from "@/services/SearchService.js";

export const namespaced = true;

export const state = {
  searchResults: [],
};

export const mutations = {
  SET_SEARCH_RESULTS(state, payload) {
    state.searchResults = payload;
  },
};

export const actions = {
  async search({ commit }, search) {
    const searchResults = await SearchService.searchFunction(search);
    commit("SET_SEARCH_RESULTS", searchResults);
    return searchResults.data;
  },
};

export const getters = {
  getSearchResults(state) {
    return state.searchResults;
  },
};
