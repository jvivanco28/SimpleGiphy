import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from "../../common/UpdateObject";

const initialState = {
    gif: null,
    loading: false,
    error: false
};

const fetchRandomStart = (state) => {
    return updateObject(state, {
        gif: null,
        loading: true,
        error: false
    });
};

const fetchRandomSuccess = (state, action) => {
    return updateObject(state, {
        gif: action.gif,
        loading: false,
        error: false,
    });
};

const fetchRandomFailed = (state) => {
    return updateObject(state, {
            loading: false,
            error: true
        }
    );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_RANDOM_START:
            return fetchRandomStart(state);
        case actionTypes.FETCH_RANDOM_SUCCESS:
            return fetchRandomSuccess(state, action);
        case actionTypes.FETCH_RANDOM_FAILED:
            return fetchRandomFailed(state);
        default:
            return state;
    }
};

export default reducer;