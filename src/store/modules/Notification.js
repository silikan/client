import { getError } from "@/utils/helpers";
import NotificationService from "@/services/HandymanService";

export const namespaced = true;

export const state = {
  Notifications: [],
  loading: false,
  error: null,
};

export const mutations = {
  SET_NOTIFICATIONS(state, notifications) {
    state.Notifications = notifications;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export const actions = {
  async createNotificationRoom({ commit }, payload) {
    try {
      commit("SET_LOADING", true);

      let room = await NotificationService.createNotificationRoom(payload);
      commit("SET_LOADING", false);

      return room;
    } catch (error) {
      commit("SET_LOADING", false);

      commit("SET_ERROR", getError(error));
    }
  },
  async getRoomNotifications({ commit }, payload) {
    try {
      commit("SET_LOADING", true);

      const response = await NotificationService.getRoomNotifications(payload.roomId);
      commit("SET_LOADING", false);

      return response;
    } catch (error) {
      commit("SET_LOADING", false);

      commit("SET_ERROR", getError(error));
    }
  },
  async Sendnotification({ commit }, payload) {
    try {
      commit("SET_LOADING", true);

      let notification = await NotificationService.Sendnotification(payload);
      commit("SET_LOADING", false);

      return notification;
    } catch (error) {
      commit("SET_LOADING", false);

      commit("SET_ERROR", getError(error));
    }
  },
};

export const getters = {};
