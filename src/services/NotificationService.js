import * as API from "@/services/API";

export default {
  async Sendnotification(payload) {
    await API.apiClient.post("/notification", payload.data);
  },
  async createNotificationRoom() {
    await API.apiClient.post("/notification/room");
  },
  async getRoomNotifications(id) {
    await API.apiClient.get(`/notification/room/${id}` + payload.roomId);
  },
};
