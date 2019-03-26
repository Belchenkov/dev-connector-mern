import {
    ADD_POST,
    GET_POSTS,
    GET_PROFILES,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE, POST_LOADING
} from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };

        default:
            return state;
    }
}
