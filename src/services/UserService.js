import * as API from '@/services/API';

export default {
  getUser(userId) {
    return API.apiClient.get(`/guest-users/${userId}`);
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
