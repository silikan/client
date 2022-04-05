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
	GigImages: {},

	fetchedGigs: [],
	fetchedGigImages: [],

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
	SET_GIG_IMAGES(state, GigImages) {
		state.GigImages = GigImages;
	}
	,
	SET_FETCHED_GIGS(state, fetchedGigs) {
		state.fetchedGigs = fetchedGigs;
	}
	,

	SET_FETCHED_GIG_IMAGES(state, fetchedGigImages) {
		state.fetchedGigImages = fetchedGigImages;
	}





};

export const actions = {

	async createGig(payload) {

		console.log(payload.state.title)
		let title = payload.state.title;
		let description = payload.state.description;
		let category = payload.state.category;
		let basic = payload.state.basic;
		let standard = payload.state.standard;
		let premium = payload.state.premium;
		let paymentMethod = payload.state.paymentMethod;
		let GigImages = payload.state.GigImages;
		let data = await GigService.createGig({
			title,
			description,
			category,
			basic,
			standard,
			premium,
			paymentMethod
		})
		let gigId = data.data.id;
		await GigService.UploadImage(GigImages, gigId)
	},

	async getGig({ commit }, id) {
		let data = await GigService.getGig(id)
		commit('SET_FETCHED_GIGS', data);

		return data.data
	}
	,
	async getGigImages({ commit }, id) {
		let data = await GigService.getGigImages(id)
		commit('SET_FETCHED_GIG_IMAGES', data);
		return data.data
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
	,

	getFetchedGigs(state) {
		return state.fetchedGigs;
	}
	,

	getFetchedGigImages(state) {
		return state.fetchedGigImages;
	}



};
