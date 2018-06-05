import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from "../../common/UpdateObject";

const initialState = {
    trendingGifs: [],
    loading: false,
    error: false
};

const fetchTrendingStart = (state) => {
    return updateObject(state, {
        trendingGifs: [],
        loading: true,
        error: false
    });
};

const fetchTrendingSuccess = (state, action) => {

    return updateObject(state, {
        trendingGifs: action.trendingGifs,
        loading: false,
        error: false,
    });
};

const fetchTrendingFailed = (state) => {
    return updateObject(state, {
            loading: false,
            error: true
        }
    );
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_TRENDING_START:
            return fetchTrendingStart(state);
        case actionTypes.FETCH_TRENDING_SUCCESS:
            return fetchTrendingSuccess(state, action);
        case actionTypes.FETCH_TRENDING_FAILED:
            return fetchTrendingFailed(state);
        default:
            return state;
    }
};

export default reducer;