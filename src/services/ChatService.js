import * as API from '@/services/API';


export default {
	async CreateRoom(payload) {
		let data = await API.apiClient.post(`/room`, payload);
		return data;
	},

	async sendMessage(payload) {

		await API.apiClient.post(`/sendmsg`, payload);
	},

	async getRoomUsers(room_id) {
		let data = await API.apiClient.get(`/room/${room_id}/users/`);
		return data;
	},
	async getUserRooms(user_id) {
		let data = await API.apiClient.get(`/user/${user_id}/rooms/`);
		return data;
	}

};


//http://localhost:8000/api/guest-users/handymen/search/paginate/?search=bentabet&page=2
