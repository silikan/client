//get rooms from server
import TransactionService from "@/services/TransactionService.js";

export const namespaced = true;

export const state = {
  transaction: {},
  taskItemTransactions: [],
  cartItemTransactions: [],
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
};

export const actions = {
  async createTransaction({ commit }, payload) {
    const transaction = await TransactionService.createTransaction(payload);
    commit("SET_TRANSACTION", transaction);
    return transaction.data;
  },
  async getTaskItemTransactions({ commit }, id) {
    const taskItemTransactions = await TransactionService.getTaskItemTransactions(id);
    commit("SET_TASK_ITEM_TRANSACTIONS", taskItemTransactions);
    return taskItemTransactions.data;
  },
  async getCartItemTransactions({ commit }, id) {
    const cartItemTransactions = await TransactionService.getCartItemTransactions(id);
    commit("SET_CART_ITEM_TRANSACTIONS", cartItemTransactions);
    return cartItemTransactions.data;
  },
  async setTransactionToPaid({ commit }, payload) {
    const transaction = await TransactionService.setTransactionToPaid(payload);
    commit("SET_TRANSACTION", transaction);
  },
  async setTransactionToConfirmed({ commit }, payload) {
    const transaction = await TransactionService.setTransactionToConfirmed(payload);
    commit("SET_TRANSACTION", transaction);
  },
  async setTransactionToCompleted({ commit }, payload) {
    const transaction = await TransactionService.setTransactionToCompleted(payload);
    commit("SET_TRANSACTION", transaction);
  },
  async getTransactionById({ commit }, id) {
    const transaction = await TransactionService.getTransactionById(id);
    commit("SET_TRANSACTION", transaction);
    return transaction.data;
  },
};

export const getters = {
  transaction: (state) => state.transaction,
  taskItemTransactions: (state) => state.taskItemTransactions,
  cartItemTransactions: (state) => state.cartItemTransactions,
};
