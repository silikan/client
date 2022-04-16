import ReviewServices from "@/services/ReviewServices";

export const namespaced = true;

export const state = {
  reviews: [],
  review: {},
  userReviews: [],
  gigReviews: [],
  clientRequestReviews: [],
  comment: "",
  rating: 0,
  type: "",
  gigId: 0,
  requestId: 0,
  clientId: 0,
  handymanId: 0,
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
  SET_COMMENT(state, comment) {
    state.comment = comment;
  },
  SET_RATING(state, rating) {
    state.rating = rating;
  },
  SET_TYPE(state, type) {
    state.type = type;
  },
  SET_GIG_ID(state, gigId) {
    state.gigId = gigId;
  },
  SET_REQUEST_ID(state, requestId) {
    state.requestId = requestId;
  },
  SET_CLIENT_ID(state, clientId) {
    state.clientId = clientId;
  },

  SET_HANDYMAN_ID(state, handymanId) {
    state.handymanId = handymanId;
  },
};

export const actions = {
  async postAReview({ commit }, payload) {
    console.log(payload);
    let parsed = JSON.parse(payload);
    const review = await ReviewServices.postAReview(parsed);
    commit("SET_REVIEW", review);
    return review.data;
  },
  async getUserReviews({ commit }, id) {
    const reviews = await ReviewServices.getUserReviews(id);

    commit("SET_USER_REVIEWS", reviews);
    return reviews.data;
  },
  async getGigReviews({ commit }, id) {
    const reviews = await ReviewServices.getGigReviews(id);
    commit("SET_GIG_REVIEWS", reviews);
    return reviews.data;
  },
  async getClientRequestReviews({ commit }, id) {
    const reviews = await ReviewServices.getClientRequestReviews(id);
    commit("SET_CLIENT_REQUEST_REVIEWS", reviews);
    return reviews.data;
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
/* SQLSTATE[22007]: Invalid datetime format: 1366 Incorrect integer value: 'gig' for column `server`.`ratings`.`type` at row 1 (SQL: insert into `ratings` (`type`, `client_id`, `handyman_id`, `rating`, `comment`, `user_id`, `gig_id`, `updated_at`, `created_at`) values (gig, 2, 1, 4, sqdsqdqsdsq, 1, 1, 2022-04-16 15:35:24, 2022-04-16 15:35:24)) */
