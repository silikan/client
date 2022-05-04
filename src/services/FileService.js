import * as API from "@/services/API";

export default {
    async uploadFile(payload) {
        await API.apiClient.post(payload.endpoint, payload.file);
    },

    async uploadPostFile(payload) {
        await API.apiClient.post(payload.endpoint, payload);
    },
};