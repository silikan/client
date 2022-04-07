import * as API from '@/services/API';

export default {
	async createCart(payload) {
		return await API.apiClient.post(`/cart`, payload);
	},
	async addToCart(payload) {
		return await API.apiClient.post(`/add-to-cart`, payload);
	}

};
