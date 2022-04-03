import * as API from '@/services/API';

export default {
	createGig(payload) {
		return API.apiClient.post(`/gig`, payload);
	},

};
