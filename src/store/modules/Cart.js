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
	async addToCart({ commit }, payload) {

		let data = {
			user_id: payload.user_id,
		}
		console.log(data);
		await CartService.createCart(data).then(async (result) => {
			console.log(result.data);
			console.log(payload);

			let sentData = {
				type: payload.type,
				gig_id: payload.gig_id,
				cart_id: result.data.id,
			}


			commit('SET_CART', result.data);
			await CartService.addToCart(sentData);
		}).catch(() => {
			console.log('error');
		});

	}
};


export const getters = {
	cart: state => state.cart,
	cartItems: state => state.cartItems,
};
