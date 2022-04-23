import * as API from "@/services/API";

export default {
  async getThreeRandomUsers() {
    return await API.apiClient.post(`/feed/users`);
  },

  async getThreeRandomClientRequests() {
    return await API.apiClient.post(`/feed/requests`);
  },

  async getThreeRandomClients() {
    return await API.apiClient.post(`/feed/clients`);
  },
};
