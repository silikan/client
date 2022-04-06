import * as API from '@/services/API';

export default {
	async createCart() {
		return await API.apiClient.post(`/cart`);
	},
	async addToCart(payload) {
		return await API.apiClient.post(`/add-to-cart`, payload);
	}

};
