import * as ActionTypes from './ActionTypes';
import axios from '../../rest/axios';
import { ENDPOINT_RANDOM_GIFS } from '../../common/Constants';

export const fetchRandom = () => {
    return dispatch => {

        dispatch(fetchRandomStart());

        axios.get(ENDPOINT_RANDOM_GIFS, {
            params: {
                limit: 1,
            }
        })
            .then(res => {
                console.log(res);
                return dispatch(fetchRandomSuccess(res.data.data));
            })
            .catch(err => {
                dispatch(fetchRandomFail(err));
            });
    };
};

export const fetchRandomStart = () => {
    return {
        type: ActionTypes.FETCH_RANDOM_START,
        error: false,
        loading: true,
        gif: null,
    };
};

export const fetchRandomSuccess = (gif) => {
    console.log('randomSuccess');
    console.log(gif);

    return {
        type: ActionTypes.FETCH_RANDOM_SUCCESS,
        error: false,
        loading: false,
        gif,
    };
};

export const fetchRandomFail = (error) => {
    console.log(error);
    return {
        type: ActionTypes.FETCH_RANDOM_FAILED,
        error: true,
        loading: false,
    };
};
