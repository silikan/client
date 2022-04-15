import ReviewServices from "../services/ReviewServices";
export const namespaced = true;

export const state = {
  reviews: [],
  review: {},
  userReviews: [],
  gigReviews: [],
  clientRequestReviews: [],
};

export const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews;
  },
  SET_REVIEW(state, review) {
    state.review = review;
  },
  SET_USER_REVIEWS(state, reviews) {
    state.userReviews = reviews;
  },
  SET_GIG_REVIEWS(state, reviews) {
    state.gigReviews = reviews;
  },
};

export const actions = {
  async postAReview({ commit }, payload) {
    const review = await ReviewServices.postAReview(payload);
    commit("SET_REVIEW", review);
    return review.data;
  },
  async getUserReviews({ commit }, id) {
    const reviews = await ReviewServices.getUserReviews(id);

    commit("SET_USER_REVIEWS", reviews);
    return review.data;
  },
  async getGigReviews({ commit }, id) {
    const reviews = await ReviewServices.getGigReviews(id);
    commit("SET_GIG_REVIEWS", reviews);
    return review.data;
  },
  async getClientRequestReviews({ commit }, id) {
    const reviews = await ReviewServices.getClientRequestReviews(id);
    commit("SET_CLIENT_REQUEST_REVIEWS", reviews);
    return review.data;
  },
};

export const getters = {
  getReviews(state) {
    return state.reviews;
  },
  getReview(state) {
    return state.review;
  },
  getUserReviews(state) {
    return state.userReviews;
  },
  getGigReviews(state) {
    return state.gigReviews;
  },
  getClientRequestReviews(state) {
    return state.clientRequestReviews;
  },
};
