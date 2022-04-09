import * as API from "@/services/API";

export default {
  async searchFunction(search) {
    return API.apiClient.get("/search", {
      params: {
        search,
      },
    });
  },
};
