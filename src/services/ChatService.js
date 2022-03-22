import * as API from '@/services/API';

export default {
	async CreateRoom(payload) {
		await API.apiClient.post(`/room`, payload);
	},

	async sendMessage(payload) {
		await API.apiClient.post(`/chat`, payload);
	}




};


//http://localhost:8000/api/guest-users/handymen/search/paginate/?search=bentabet&page=2
