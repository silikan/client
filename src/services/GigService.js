import * as API from '@/services/API';

export default {
	createGig(payload) {
		return API.apiClient.post(`/gig`, payload);
	},
	UploadImage(payload, gigId) {
		return API.apiClient.post(`/gig/image/${gigId}`, payload, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		});
	}

};
