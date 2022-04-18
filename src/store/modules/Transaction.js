//get rooms from server
import TransactionService from "@/services/TransactionService.js";
import { getError } from "@/utils/helpers";

export const namespaced = true;

export const state = {
  transaction: {},
  taskItemTransactions: [],
  cartItemTransactions: [],
  error: null,
};

export const mutations = {
  SET_TRANSACTION(state, payload) {
    state.transaction = payload;
  },
  SET_TASK_ITEM_TRANSACTIONS(state, payload) {
    state.taskItemTransactions = payload;
  },
  SET_CART_ITEM_TRANSACTIONS(state, payload) {
    state.cartItemTransactions = payload;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  async createTransaction({ commit }, payload) {
    try {
    const transaction = await TransactionService.createTransaction(payload);
    commit("SET_TRANSACTION", transaction);
    return transaction.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async getTaskItemTransactions({ commit }, id) {
    try {
    const taskItemTransactions = await TransactionService.getTaskItemTransactions(id);
    commit("SET_TASK_ITEM_TRANSACTIONS", taskItemTransactions);
    return taskItemTransactions.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async getCartItemTransactions({ commit }, id) {
    try {
    const cartItemTransactions = await TransactionService.getCartItemTransactions(id);
    commit("SET_CART_ITEM_TRANSACTIONS", cartItemTransactions);
    return cartItemTransactions.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTransactionToPaid({ commit }, payload) {
    try {
    const transaction = await TransactionService.setTransactionToPaid(payload);
    commit("SET_TRANSACTION", transaction);
    }catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTransactionToConfirmed({ commit }, payload) {
    try {
    const transaction = await TransactionService.setTransactionToConfirmed(payload);
    commit("SET_TRANSACTION", transaction);
    }catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async setTransactionToCompleted({ commit }, payload) {
    try {
    const transaction = await TransactionService.setTransactionToCompleted(payload);
    commit("SET_TRANSACTION", transaction);
    }catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async getTransactionById({ commit }, id) {
    try { 
    const transaction = await TransactionService.getTransactionById(id);
    commit("SET_TRANSACTION", transaction);
    return transaction.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
};

export const getters = {
  transaction: (state) => state.transaction,
  taskItemTransactions: (state) => state.taskItemTransactions,
  cartItemTransactions: (state) => state.cartItemTransactions,
  getError: (state) => state.error,
};
