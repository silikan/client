//get rooms from server
import TaskService from '@/services/TaskService.js'

export const namespaced = true;


export const state = {
	task: {},
	taskItems: [],
};

export const mutations = {
	SET_TASK(state, payload) {
		state.task = payload;
	},
	SET_TASK_ITEMS(state, payload) {
		state.taskItems = payload;
	}

};

export const actions = {
	async createTaskList({ commit }) {
		const cart = await TaskService.createTaskList();
		commit('SET_TASK', cart);
	},
	async addToTaskList({ commit }, payload) {
		let data = {
			user_id: payload.user_id,
		}
		await TaskService.createTaskList(data).then(async (result) => {
			console.log(result.data);
			console.log(payload);

			let sentData = {
				type: payload.type,
				gig_id: payload.gig_id,
				task_id: result.data.id,
				client_id: payload.client_id,
				handyman_id: payload.handyman_id

			}


			commit('SET_TASK', result.data);
			await TaskService.addToTaskList(sentData);
		}).catch(() => {
			console.log('error');
		});

	}
};


export const getters = {
	getTask(state) {
		return state.task;
	}
	,
	getTaskItems(state) {
		return state.taskItems;
	}
};
