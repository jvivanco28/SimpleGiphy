import * as ActionTypes from './ActionTypes';
import axios from '../../rest/axios';
import { ENDPOINT_SEARCH_GIFS } from '../../common/Constants';

export const searchGifs = (queryString) => {
    return dispatch => {

        dispatch(searchStart());

        axios.get(ENDPOINT_SEARCH_GIFS, {
            params: {
                limit: 10,
                q: queryString
            }
        })
            .then(res => {
                return dispatch(searchSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(searchFailed(err));
            });
    };
};

export const searchStart = () => {
    return {
        type: ActionTypes.SEARCH_START,
        error: false,
        loading: true,
        searchResults: [],
    };
};

export const searchSuccess = (searchResults) => {
    return {
        type: ActionTypes.SEARCH_SUCCESS,
        error: false,
        loading: false,
        searchResults,
    };
};

export const searchFailed = (error) => {
    console.log(error);
    return {
        type: ActionTypes.SEARCH_FAILED,
        error: true,
        loading: false,
    };
};
