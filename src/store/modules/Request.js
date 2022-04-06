//get rooms from server
import RequestService from '@/services/RequestService.js'
export const namespaced = true;


export const state = {
	title: '',
	description: '',
	category: '',
	price: '',
	priceDescription: '',
	paymentMethod: '',
	fetchedRequests: [],
	requestUser: {},
	userRequests: [],

};

export const mutations = {
	SET_TITLE(state, title) {
		state.title = title;
	}
	,
	SET_DESCRIPTION(state, description) {
		state.description = description;
	}

	,
	SET_CATEGORY(state, category) {
		state.category = category;
	}
	,
	SET_PRICE(state, price) {
		state.price = price;
	}
	,
	SET_PRICE_DESCRIPTION(state, priceDescription) {
		state.priceDescription = priceDescription;
	}
	,
	SET_PAYMENT_METHOD(state, paymentMethod) {
		state.paymentMethod = paymentMethod;
	},


	SET_FETCHED_REQUESTS(state, fetchedRequests) {
		state.fetchedGigs = fetchedRequests;
	}
	,


	SET_REQUESTS_USER(state, requestUser) {
		state.gigUser = requestUser;
	},
	SET_USER_REQUESTS(state, userRequests) {
		state.userGigs = userRequests;
	}






};

export const actions = {

	async createRequest(payload) {
		let title = payload.state.title;
		let description = payload.state.description;
		let category = payload.state.category;
		let price = payload.state.price;
		let paymentMethod = JSON.stringify(payload.state.paymentMethod);
		let priceDescription = payload.state.priceDescription;
		await RequestService.createRequest({
			title,
			description,
			category,
			price,
			paymentMethod,
			priceDescription
		})
	},

	async getRequest({ commit }, id) {
		let data = await RequestService.getRequest(id)
		commit('SET_FETCHED_REQUESTS', data);

		return data.data
	}
	,



	async getRequestUser({ commit }, id) {
		let data = await RequestService.getRequestUser(id)
		commit('SET_GIG_USERS', data);
		return data.data
	},
	async getUserRequests({ commit }, id) {
		let data = await RequestService.getUserRequests(id)
		commit('SET_USER_REQUESTS', data.data);
		return data.data
	}



};


export const getters = {
	getTitle(state) {
		return state.title;
	},
	getDescription(state) {
		return state.description;
	}
	,
	getCategory(state) {
		return state.category;
	}
	,
	getPrice(state) {
		return state.price;
	}
	,
	getPriceDescription(state) {
		return state.priceDescription;
	}
	,
	getPaymentMethod(state) {
		return state.paymentMethod;
	}
	,
	getFetchedRequests(state) {
		return state.fetchedRequests;
	}
	,


	getRequestUser(state) {
		return state.requestUser;
	},
	getUserResuests(state) {
		return state.userRequests;
	}


};
