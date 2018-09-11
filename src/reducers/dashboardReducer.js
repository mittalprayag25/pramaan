import { INPUT_PASSWORD, INPUT_USERNAME, INVALID_CREDS, CLEAR_LOGIN_CREDS } from '../actions/actions';
import * as types from '../actions/authTypes';

const initialState = {
    selectedTab: 'CC',
    viewClaims: '',
    recordedItems: undefined,
    viewIndividualClaim: undefined,
    recordedItem: undefined,
    searchKeyword: undefined,
    lockerItems: undefined
};

export const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case types.SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload
            };

        case types.VIEW_CLAIM_RESPONSE_SUCCESS:
            return {
                ...state,
                viewClaims: action.payload
            };
        case types.VIEW_CLAIM_RESPONSE_FAILURE:
            return {
                ...state,
                viewClaims: ''
            };

        case types.RECORDED_SUCCESS:
            return {
                ...state,
                recordedItems: action.payload
            };

        case types.RECORDED_FAILURE:
            return {
                ...state,
                recordedItems: undefined
            };
        case types.FETCH_CLAIM_SUCCESS:
            return {
                ...state,
                viewIndividualClaim: action.payload[0]
            };
        case types.FETCH_CLAIM_FAILURE:
            return {
                ...state,
                viewIndividualClaim: undefined
            };
        case types.RECORDED_ITEM:
            return {
                ...state,
                recordedItem: action.payload
            };
        case types.SEARCH_DASHBOARD:
            return {
                ...state,
                searchKeyword: action.payload
            };
        case types.ITEM_FOUND_IN_LOCKER_SUCCESS:
            return {
                ...state,
                lockerItems: action.payload
            };
        case types.ITEM_FOUND_IN_LOCKER_FAILURE:
            return {
                ...state,
                lockerItems: action.payload
            };
        default: return state;
    }
};