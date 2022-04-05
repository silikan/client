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



};