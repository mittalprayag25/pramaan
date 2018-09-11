import { INPUT_PASSWORD, INPUT_USERNAME, INVALID_CREDS, CLEAR_LOGIN_CREDS } from '../actions/actions';
import * as types from '../actions/authTypes';

const initialState = {
    username: "",
    password: ""
};

const authState = {
    authenticated: false,
    token: undefined,
    userType: undefined,
    logout: false
};

const claimAddState = {
    referenceNumber: '',
    submittedDate: '',
    email: '',
    mobileNumber: '',
    status: false,
    pnrDetails: undefined,
    airport: undefined,
    flightNumber: undefined,
    customerName: undefined,
    boardingPassUrl: undefined,
    itemImageUrl: undefined
};
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_USERNAME:
            return {
                ...state,
                username: action.data
            };
        case INPUT_PASSWORD:
            return {
                ...state,
                password: action.data
            };
        case CLEAR_LOGIN_CREDS:
            return {
                ...state,
                username: '',
                password: ''
            };
        default: return state;
    }
};

export const logItIn = (state = authState, action) => {
    switch (action.type) {
        case 'VALID_CREDS':
            return {
                ...state,
                authenticated: true,
                token: action.payload.token,
                userType: action.payload.userType
            };
        case INVALID_CREDS:
            return {
                ...state,
                authenticated: false,
                token: undefined,
                userType: undefined
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                logout: true
            };
        case types.LOGOUT_FAILURE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export const addClaim = (state = claimAddState, action) => {
    switch (action.type) {
        case types.CLAIM_ADDITION_SUCCESS:
            return {
                ...state,
                referenceNumber: action.payload.refrenceNumber,
                submittedDate: action.payload.submittedDate,
                email: action.payload.email,
                mobileNumber: action.payload.mobileNumber,
                status: true
            }
        case types.CLAIM_ADDITION_FAILURE:
            return {
                ...state,
                status: false
            }

        case types.PNR_DETAILS_SUCCESS:
            return {
                ...state,
                pnrDetails: action.payload
            }
        case types.PNR_DETAILS_FAILURE:
            return {
                ...state,
                pnrDetails: undefined
            }
        case types.UPLOAD_SUCCESS_BOARDING_PASS:
            return {
                ...state,
                boardingPassUrl: action.payload
            }
        case types.UPLOAD_FAILURE_BOARDING_PASS:
            return {
                ...state,
                boardingPassUrl: undefined
            }
        case types.UPLOAD_SUCCESS_ITEM_IMAGES:
            return {
                ...state,
                itemImageUrl: action.payload
            }
        case types.UPLOAD_FAILURE_ITEM_IMAGES:
            return {
                ...state,
                itemImageUrl: undefined
            }

        case types.CLEAN_UPLOAD_URLS:
            return {
                ...state,
                boardingPassUrl: undefined,
                itemImageUrl: undefined
            };
        default:
            return state;
    }
};