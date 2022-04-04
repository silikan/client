//get rooms from server
import GigService from '@/services/GigService.js'
export const namespaced = true;


export const state = {
	title: '',
	description: '',
	category: '',
	basic: {},
	standard: {},
	premium: {},
	paymentMethod: '',
	formDataImage: {},

};

export const mutations = {
	SET_TITLE(state, title) {
		state.title = title;
	},
	SET_DESCRIPTION(state, description) {
		state.description = description;
	}


	,
	SET_CATEGORY(state, category) {
		state.category = category;
	}
	,
	SET_BASIC(state, basic) {
		state.basic = basic;
	}
	,
	SET_STANDARD(state, standard) {
		state.standard = standard;
	}
	,
	SET_PREMIUM(state, premium) {
		state.premium = premium;
	},
	SET_PAYMENT_METHOD(state, paymentMethod) {
		state.paymentMethod = paymentMethod;
	},
	SET_FORM_DATA_IMAGE(state, formDataImage) {
		state.formDataImage = formDataImage;
	}





};

export const actions = {

	async createGig(payload) {


		return await GigService.createGig(payload)
	}





};


export const getters = {
	getTitle(state) {
		return state.title;
	}
	,
	getDescription(state) {
		return state.description;
	},
	getCategory(state) {
		return state.category;
	}
	,
	getBasic(state) {
		return state.basic;
	}
	,
	getStandard(state) {
		return state.standard;
	}
	,
	getPremium(state) {
		return state.premium;
	}
	,
	getPaymentMethod(state) {
		return state.paymentMethod;
	}
	,
	getFormDataImage(state) {
		return state.formDataImage;
	}



};
