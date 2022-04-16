import * as API from "@/services/API";

export default {
  async deleteUser(id) {
    return API.delete(`/admin/delete-user/${id}`);
  },
  deleteGig(id) {
    return API.delete(`/admin/delete-gig/${id}`);
  },
  deleteClientRequest(id) {
    return API.delete(`/admin/delete-request/${id}`);
  },
  deleteAllUsers() {
    return API.delete(`/admin/delete-all-users`);
  },
  deleteAllGigs() {
    return API.delete(`/admin/delete-all-gigs`);
  },
  deleteAllRequests() {
    return API.delete(`/admin/delete-all-requests`);
  },
  deleteAll() {
    return API.delete(`/admin/delete-all`);
  },
  async getAllUsers() {
    return API.get(`/admin/get-all-users`);
  },
  async getAllGigs() {
    return API.get(`/admin/get-all-gigs`);
  },
  async getAllRequests() {
    return API.get(`/admin/get-all-requests`);
  },
  async getAllHandymen() {
    return API.get(`/admin/get-all-handymen`);
  },
  async getAllClients() {
    return API.get(`/admin/get-all-clients`);
  },
  async getAllAdmins() {
    return API.get(`/admin/get-all-admins`);
  },
  async getAllModerators() {
    return API.get(`/admin/get-all-moderators`);
  },
  makeUserAdmin(id) {
    return API.put(`/admin/make-user-admin/${id}`);
  },
  makeUserModerator(id) {
    return API.put(`/admin/make-user-moderator/${id}`);
  },
  makeUserHandyman(id) {
    return API.put(`/admin/make-user-handyman/${id}`);
  },
  getAllUsersPaginated(page) {
    return API.get(`/admin/get-all-users-paginated/${page}`);
  },
  getAllGigsPaginated(page) {
    return API.get(`/admin/get-all-gigs-paginated/${page}`);
  },
  getAllRequestsPaginated(page) {
    return API.get(`/admin/get-all-requests-paginated/${page}`);
  },
  getAllHandymenPaginated(page) {
    return API.get(`/admin/get-all-handymen-paginated/${page}`);
  },
  getAllClientsPaginated(page) {
    return API.get(`/admin/get-all-clients-paginated/${page}`);
  },
  getAllAdminsPaginated(page) {
    return API.get(`/admin/get-all-admins-paginated/${page}`);
  },
  getAllModeratorsPaginated(page) {
    return API.get(`/admin/get-all-moderators-paginated/${page}`);
  },
  async getLink(link) {
    return API.apiClient.get(link);
  },
};
