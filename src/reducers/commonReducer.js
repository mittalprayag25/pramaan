import * as types from '../actions/authTypes';

const commonInitialState = {
    url: '',
    airports: '',
    isError: false,
    message: undefined
};

export const common = (state = commonInitialState, action) => {
    switch (action.type) {
        case types.CLEAR_URL:
            return {
                ...state,
                url: ''
            };
        case types.CHANGE_URL:
            return {
                ...state,
                url: action.pathName
            };

        case types.GOTO_DASHBOARD:
            return {
                ...state,
                url: action.pathName
            };
        case types.FETCH_AIRPORTS_FAILURE:
            return {
                ...state,
                airports: ''
            };
        case types.FETCH_AIRPORTS_SUCCESS:
            return {
                ...state,
                airports: action.payload
            };
        case types.OPEN_ERROR_DIALOG:
            return {
                ...state,
                isError: true,
                message: action.payload
            };
        case types.CLOSE_ERROR_DIALOG:
            return {
                ...state,
                isError: false,
                message: undefined
            };
        default: return state;
    }
};