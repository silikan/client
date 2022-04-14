import * as API from "@/services/API";

export default {
  async createTaskList(payload) {
    return await API.apiClient.post(`/task`, payload);
  },
  async addToTaskList(payload) {
    return await API.apiClient.post(`/add-to-task-list`, payload);
  },
  async getUserTaskItems(id) {
    return await API.apiClient.get(`/user/${id}/task`);
  },
  async setTaskItemStatusToAccepted(payload) {
    return await API.apiClient.post(`/set-task-item-status-to-accepted`, payload);
  },
  async setTaskItemStatusToDeclined(payload) {
    return await API.apiClient.post(`/set-task-item-status-to-declined`, payload);
  },
  async setTaskItemStatusToPaid(payload) {
    return await API.apiClient.post(`/set-task-item-status-to-paid`, payload);
  },
};
