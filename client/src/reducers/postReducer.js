import {
    ADD_POST,
    GET_PROFILES,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE
} from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };

        default:
            return state;
    }
}
