import * as API from "@/services/API";

export default {
  async Sendnotification(payload) {
    return await API.apiClient.post("/notification", payload.data);
  },
  async createNotificationRoom() {
    return await API.apiClient.post("/notification/room");
  },
  async getRoomNotifications(id) {
    return await API.apiClient.get(`/notification/room/${id}`);
  },
};
