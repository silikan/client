import * as API from "@/services/API";

export default {
    async createPost(post) {
        return await API.apiClient.post(`/blog/post`, post);
    },
    async getPostById(id) {
        return await API.apiClient.get(`/blog/post/${id}`);
    },
    async getUserPosts(id) {
        return await API.apiClient.get(`/blog/post/user/${id}/post`);
    },
    async getPostsByCategory(title) {
        return await API.apiClient.get(`blog/${title}/post`);
    },
    async PaginatePosts(page) {
        return await API.apiClient.get(`/blog/posts/paginate`, { params: { page } });
    },
    async upload_post_image(formData) {
        return await API.apiClient.post(`/blog/podt/image`, formData);
    },
    async getLink(link) {
        return API.apiClient.get(link);
    },
    async postComment(payload) {
        return await API.apiClient.post(`/blog/post/comment/store`, payload);
    },
    async postReply(payload) {
        return await API.apiClient.post(`/blog/post/comment/reply/store`, payload);
    },
    async postLike(payload) {
        return await API.apiClient.post(`/blog/post/like`, payload);
    },
    async postUnlike(payload) {
        return await API.apiClient.delete(`/blog/post/like`, payload);
    },
};