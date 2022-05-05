export const namespaced = true;
import BlogService from "../../services/BlogServices";
import { getError } from "@/utils/helpers";

function setPaginatedPosts(commit, response) {
    commit("SET_POSTS", response.data.data);
    commit("SET_POSTS_META", response.data.meta);
    commit("SET_POSTS_LINKS", response.data.links);
    commit("SET_POSTS_LOADING", false);
}

function setPaginatedComments(commit, response) {
    commit("SET_COMMENTS", response.data.data);
    commit("SET_COMMENTS_META", response.data.meta);
    commit("SET_COMMENTS_LINKS", response.data.links);
    commit("SET_COMMENTS_LOADING", false);
}
export const state = {
    posts: [],
    post: {},
    links: [],
    meta: {},
    loading: false,
    error: null,
    comments: [],
    replies: [],
    likes: [],
    comment_loading: false,
    comment_error: null,
};

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_POSTS_META(state, meta) {
        state.meta = meta;
    },
    SET_POSTS_LINKS(state, links) {
        state.links = links;
    },
    SET_POSTS_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_POST(state, post) {
        state.post = post;
    },
    SET_COMMENTS(state, comments) {
        state.comments = comments;
    },
    SET_REPLIES(state, replies) {
        state.replies = replies;
    },
    SET_LIKES(state, likes) {
        state.likes = likes;
    },
    SET_POSTS_ERROR(state, error) {
        state.error = error;
    },
    SET_COMMENT_LOADING(state, loading) {
        state.comment_loading = loading;
    },
    SET_COMMENT_ERROR(state, error) {
        state.comment_error = error;
    },
};

export const actions = {
    async createPost({ commit }, post) {
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.createPost(post);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },

    async getPostById({ commit }, id) {
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.getPostById(id);
            commit("SET_POST", response.data);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },
    async getUserPosts({ commit }, id) {
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.getUserPosts(id);
            commit("SET_POSTS", response.data);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },
    async getPostsByCategory({ commit }, category) {
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.getPostsByCategory(category);
            commit("SET_POSTS", response.data);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },
    async getAllPostsPaginated({ commit }, page) {
        try {
            commit("SET_POSTS_LOADING", true);
            const posts = await BlogService.PaginatePosts(page);
            setPaginatedPosts(commit, posts);

            return posts.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_POSTS_LOADING", false);
        }
    },

    async getLink({ commit }, link) {
        try {
            commit("SET_POSTS_LOADING", true);
            const posts = await BlogService.getLink(link);
            setPaginatedPosts(commit, posts);
            return posts.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_POSTS_LOADING", true);
        }
    },
    async postComment({ commit }, comment) {
        try {
            const response = await BlogService.postComment(comment);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async postReply({ commit }, reply) {
        try {
            const response = await BlogService.postReply(reply);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async postLike({ commit }, like) {
        try {
            const response = await BlogService.postLike(like);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async getLikes({ commit }, id) {
        try {
            const response = await BlogService.getLikes(id);
            commit("SET_LIKES", response.data);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },

    async getPostCommentsPaginate({ commit }, payload) {
        let page = payload.page;
        let post_id = payload.post_id;
        try {
            commit("SET_COMMENT_LOADING", true);
            const comments = await BlogService.getPostCommentsPaginate(post_id, page);
            setPaginatedComments(commit, comments);
            return comments.data;
        } catch (error) {
            commit("SET_COMMENT_LOADING", false);
            commit("SET_COMMENT_ERROR", getError(error));
        }
    },
    async getCommentsLinks({ commit }, link) {
        try {
            commit("SET_COMMENT_LOADING", true);
            const links = await BlogService.getLink(link);
            commit("SET_COMMENT_LOADING", false);
            return links.data;
        } catch (error) {
            commit("SET_COMMENT_LOADING", false);
            commit("SET_COMMENT_ERROR", getError(error));
        }
    },
};

export const getters = {
    getPosts(state) {
        return state.posts;
    },
    getPost(state) {
        return state.post;
    },
    getLinks(state) {
        return state.links;
    },
    getMeta(state) {
        return state.meta;
    },
    getLoading(state) {
        return state.loading;
    },
    getError(state) {
        return state.error;
    },
    getPaginatedPosts(state) {
        return state.posts;
    },
    getPaginatedPostsMeta(state) {
        return state.meta;
    },
    getPaginatedPostsLinks(state) {
        return state.links;
    },
    getPaginatedPostsLoading(state) {
        return state.loading;
    },
    getPaginatedPostsError(state) {
        return state.error;
    },
    getCommentLoading(state) {
        return state.comment_loading;
    },
    getCommentError(state) {
        return state.comment_error;
    },
    getComments(state) {
        return state.comments;
    },
};