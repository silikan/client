//get rooms from server
import ChatService from '@/services/ChatService';

export const namespaced = true;

export const state = {
	roomUsers: [],
	userRooms: [],
};

export const mutations = {
	SET_ROOM_USERS(state, roomUsers) {
		state.roomUsers = roomUsers;
	},

	SET_USER_ROOMS(state, userRooms) {
		state.userRooms = userRooms;
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
	},
	async getUserRooms({ commit }, id) {
		return await ChatService.getUserRooms(id)
			.then((response) => {
				//set user rooms
				commit('SET_USER_ROOMS', response.data.data);

				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});

	}
};


export const getters = {
	roomUsers: (state) => state.roomUsers,
	userRooms: (state) => state.userRooms,
};
