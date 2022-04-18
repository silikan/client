//get rooms from server
import TaskService from "@/services/TaskService.js";
import { getError } from "@/utils/helpers";

export const namespaced = true;

export const state = {
  task: {},
  taskItems: [],
  taskItemData: [],
  taskItem: {},
  error: null,
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
  SET_TASK_ITEM(state, payload) {
    state.taskItem = payload;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  async createTaskList({ commit }) {
    try {
    const task = await TaskService.createTaskList();
    commit("SET_TASK", task);
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async addToTaskList({ commit }, payload) {
    try{
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
          plan: payload.plan,
        };

        commit("SET_TASK", result.data);
        let data = await TaskService.addToTaskList(sentData);

        commit("SET_TASK_ITEM_DATA", data.data);
        return data.data;
      })
      .catch(() => {
        console.log("error");
      });
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async getUserTaskItems({ commit }, id) {
    try {
    const taskItems = await TaskService.getUserTaskItems(id);
    commit("SET_TASK_ITEMS", taskItems);
    console.log(taskItems);
    return taskItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemsStatusToInProgress({ commit }, payload) {
    try {
    let taskItemData = await TaskService.setTaskItemsStatusToInProgress(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemsStatusToCancelled({ commit }, payload) {
    try {
    let taskItemData = await TaskService.setTaskItemsStatusToCancelled(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToCompleted({ commit }, payload) {
    try {
    let taskItemData = await TaskService.setTaskItemStatusToCompleted(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToAccepted({ commit }, payload) {
    try {
    let taskItemData = await TaskService.setTaskItemStatusToAccepted(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToDeclined({ commit }, payload) {
    try {
    let taskItemData = await TaskService.setTaskItemStatusToDeclined(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToPaid({ commit }, payload) {
    try {
    let taskItemData = await TaskService.setTaskItemStatusToPaid(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async getTaskItemById({ commit }, payload) {
    try {
    let id = payload.id;
    const taskItem = await TaskService.getTaskItemById(id);
    commit("SET_TASK_ITEM", taskItem);
    return taskItem.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToConfirmed({ commit }, payload) {
    try {
    let taskItemData = await TaskService.setTaskItemStatusToConfirmed(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
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
  getTaskItem(state) {
    return state.taskItem;
  },
  getError(state) {
    return state.error;
  }
};
