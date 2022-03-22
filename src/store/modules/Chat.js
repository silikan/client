//get rooms from server
import ChatService from '@/services/ChatService';

export const namespaced = true;

export const state = {
	roomUsers: [],
};

export const mutations = {
	SET_ROOM_USERS(state, roomUsers) {
		state.roomUsers = roomUsers;
	}
};

export const actions = {
	async getRoomUsers({ commit }, id) {
		return await ChatService.getRoomUsers(id)
			.then((response) => {
				commit('SET_ROOM_USERS', response.data.data);
				return response;
			})
			.catch((error) => {
				console.log(error);
			});
	}
};


export const getters = {
	roomUsers: (state) => state.roomUsers,
};
