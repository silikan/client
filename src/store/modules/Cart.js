//get rooms from server
import CartService from '@/services/CartService.js'
export const namespaced = true;


export const state = {
	cart: {},
	cartItems: [],
};

export const mutations = {
	SET_CART(state, payload) {
		state.cart = payload;
	},
	SET_CART_ITEMS(state, payload) {
		state.cartItems = payload;
	}

};

export const actions = {
	async createCart({ commit }) {
		const cart = await CartService.createCart();
		commit('SET_CART', cart);
	},
	async addToCart({ commit, dispatch }, payload) {
		dispatch('Gig/createCart').then(() => {
			const cart = await CartService.addToCart(payload);
			commit('SET_CART_ITEMS', cartItems);
		}).catch(() => {
			console.log('error');
		});

	}
};


export const getters = {
	cart: state => state.cart,
	cartItems: state => state.cartItems,
};
