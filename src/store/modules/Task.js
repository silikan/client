//get rooms from server
import TaskService from "@/services/TaskService.js";

export const namespaced = true;

export const state = {
  task: {},
  taskItems: [],
  taskItemData: [],
};

export const mutations = {
  SET_TASK(state, payload) {
    state.task = payload;
  },
  SET_TASK_ITEMS(state, payload) {
    state.taskItems = payload;
  },
  SET_TASK_ITEM_DATA(state, payload) {
    state.taskItemData = payload;
  },
};

export const actions = {
  async createTaskList({ commit }) {
    const task = await TaskService.createTaskList();
    commit("SET_TASK", task);
  },
  async addToTaskList({ commit }, payload) {
    let data = {
      user_id: payload.user_id,
    };
    await TaskService.createTaskList(data)
      .then(async (result) => {
        console.log(result.data);
        console.log(payload);

        let sentData = {
          type: payload.type,
          gig_id: payload.gig_id,
          task_id: result.data.id,
          request_id: payload.request_id,
          client_id: payload.client_id,
          handyman_id: payload.handyman_id,
          cart_item_id: payload.cart_item_id,
        };

        commit("SET_TASK", result.data);
        let data = await TaskService.addToTaskList(sentData);

        commit("SET_TASK_ITEM_DATA", data.data);
        return data.data;
      })
      .catch(() => {
        console.log("error");
      });
  },
  async getUserTaskItems({ commit }, id) {
    const taskItems = await TaskService.getUserTaskItems(id);
    commit("SET_TASK_ITEMS", taskItems);
    return taskItems.data;
  },
};

export const getters = {
  getTask(state) {
    return state.task;
  },
  getTaskItems(state) {
    return state.taskItems;
  },
  getTaskItemData(state) {
    return state.taskItemData;
  },
};
