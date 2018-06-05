import * as ActionTypes from './ActionTypes';
import axios from '../../rest/axios';
import { ENDPOINT_TRENDING_GIFS } from '../../common/Constants';

export const fetchTrendingGifs = () => {
    return dispatch => {

        dispatch(fetchTrendingStart());

        axios.get(ENDPOINT_TRENDING_GIFS, {
            params: {
                limit: 10,
            }
        })
            .then(res => {
                return dispatch(fetchTrendingSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(fetchTrendingFail(err));
            });
    };
};

export const fetchTrendingStart = () => {
    return {
        type: ActionTypes.FETCH_TRENDING_START,
        error: false,
        loading: true,
        trendingGifs: [],
    };
};

export const fetchTrendingSuccess = (trendingGifs) => {
    return {
        type: ActionTypes.FETCH_TRENDING_SUCCESS,
        error: false,
        loading: false,
        trendingGifs,
    };
};

export const fetchTrendingFail = (error) => {
    console.log(error);
    return {
        type: ActionTypes.FETCH_TRENDING_FAILED,
        error: true,
        loading: false,
    };
};
