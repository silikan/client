import * as API from '@/services/API';

export default {

	async createRequest(payload) {

		const response = await API.apiClient.post('/request', payload);

		return response.data;

	}
};
