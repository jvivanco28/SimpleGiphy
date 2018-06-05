import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from "../../common/UpdateObject";

const initialState = {
    searchResults: [],
    loading: false,
    error: false
};

const searchStart = (state) => {
    return updateObject(state, {
        searchResults: [],
        loading: true,
        error: false
    });
};

const searchSuccess = (state, action) => {
    return updateObject(state, {
        searchResults: action.searchResults,
        loading: false,
        error: false,
    });
};

const searchFailed = (state) => {
    return updateObject(state, {
            loading: false,
            error: true
        }
    );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_START:
            return searchStart(state);
        case actionTypes.SEARCH_SUCCESS:
            return searchSuccess(state, action);
        case actionTypes.SEARCH_FAILED:
            return searchFailed(state);
        default:
            return state;
    }
};

export default reducer;