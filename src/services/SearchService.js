import * as API from "@/services/API";

export default {
  async searchFunction(search) {
    return API.apiClient.get("/search", {
      params: {
        search,
      },
    });
  },

  async searchGigs(search) {
    return API.apiClient.get("/search/gigs", {
      params: {
        search,
      },
    });
  },
  async searchGigsPaginate(search, page) {
    return API.apiClient.get("/search/gigs", {
      params: {
        search,
        page,
      },
    });
  },
  async searchClientRequest(search) {
    return API.apiClient.get("/search/requests", {
      params: {
        search,
      },
    });
  },

  async searchClientRequestPaginate(search, page) {
    return API.apiClient.get("/search/requests/paginate", {
      params: {
        search,
        page,
      },
    });
  },

  async searchHandymen(search) {
    return API.apiClient.get("/search/handymen", {
      params: {
        search,
      },
    });
  },
  async searchHandymenPaginate(search, page) {
    return API.apiClient.get("/search/handymen/paginate", {
      params: {
        search,
        page,
      },
    });
  },
  paginateHandymen(link) {
    return API.apiClient.get(link);
  },
};
