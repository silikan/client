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
  async setTaskItemsStatusToInProgress(payload) {
    return await API.apiClient.post(`/set-task-item-status-to-in-progress`, payload);
  },
  async setTaskItemsStatusToCancelled(payload) {
    return await API.apiClient.post(`/set-task-item-status-to-cancelled`, payload);
  },
  async setTaskItemsStatusToCompleted(payload) {
    return await API.apiClient.post(`/set-task-item-status-to-completed`, payload);
  },
};
