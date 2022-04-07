import * as API from '@/services/API';

export default {
	async createTaskList(payload) {
		return await API.apiClient.post(`/task`, payload);
	},
	async addToTaskList(payload) {
		return await API.apiClient.post(`/add-to-task-list`, payload);
	}

};
