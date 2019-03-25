import {
    GET_PROFILE,
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

        default:
            return state;
    }
}
