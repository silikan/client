import * as API from "@/services/API";

export default {
  async getThreeRandomUsers() {
    return await API.apiClient.post(`/feed/users`);
  },
  async getThreeRandomGigs() {
    return await API.apiClient.post(`/feed/gigs`);
  },

  async getThreeRandomHandymen() {
    return await API.apiClient.post(`/feed/handymen`);
  },
};
