import * as API from "@/services/API";

export default {
  async createRequest(payload) {
    const response = await API.apiClient.post("/request", payload);

    return response.data;
  },

  async getRequest(id) {
    return await API.apiClient.get(`/request/${id}`);
  },

  async getRequestUser(id) {
    return await API.apiClient.get(`/request/${id}}/user`);
  },

  getUserRequests(id) {
    return API.apiClient.get(`/user/${id}/request`);
  },
  async getClientRequestsPaginate(page) {
    return await API.apiClient.get(`/request/paginate`, {
      params: {
        page,
      },
    });
  },
};
