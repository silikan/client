import * as API from "@/services/API";

export default {
  async getGigsByCategory(title) {
    return await API.apiClient.get(`category/${title}/gigs`);
  },
  async getclientRequestsByCategory(title) {
    return await API.apiClient.get(`category/${title}/requests`);
  },
};
