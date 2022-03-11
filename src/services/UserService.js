import * as API from '@/services/API';

export default {
  async getUser(userId) {
    let data = await API.apiClient.get(`/users/${userId}`);
    return data
  },
  getUsers(page) {
    return API.apiClient.get(`/guest-users/?page=${page}`);
  },
  deleteUser(userId) {
    return API.apiClient.delete(`users/${userId}}`);
  },
  paginateUsers(link) {
    return API.apiClient.get(link);
  },
};
