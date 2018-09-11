import { INPUT_PASSWORD, INPUT_USERNAME, INVALID_CREDS, CLEAR_LOGIN_CREDS } from '../actions/actions';
import * as types from '../actions/authTypes';

const initialState = {
    users: undefined,
    addUser: false,
    isStationDialogOpen: false,
    addRegion: false,
    roles: undefined,
    regions: undefined,
    stations: undefined
};

export const manage = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS_FETCH_SUCCESS:
            return {
                ...state,
                addUser: false,
                users: action.payload
            };
        case types.USERS_FETCH_FAILURE:
            return {
                ...state,
                addUser: false,
                users: undefined
            };
        case types.ADD_USER_SUCCESS:
            return {
                ...state,
                addUser: true
            };
        case types.ADD_USER_FAILURE:
            return {
                ...state,
                addUser: false
            };
        case types.ROLES_FETCH_SUCCESS:
            return {
                ...state,
                roles: action.payload
            };
        case types.ROLES_FETCH_FAILURE:
            return {
                ...state,
                roles: undefined
            };
        case types.REGIONS_FETCH_SUCCESS:
            return {
                ...state,
                regions: action.payload
            };
        case types.REGIONS_FETCH_FAILURE:
            return {
                ...state,
                regions: undefined
            };
        case types.STATIONS_FETCH_SUCCESS:
            return {
                ...state,
                isStationDialogOpen: false,
                stations: action.payload
            };
        case types.STATIONS_FETCH_FAILURE:
            return {
                ...state,
                isStationDialogOpen: false,
                stations: undefined
            };
        case types.ADD_REGIONS_SUCCESS:
            return {
                ...state,
                addRegion: true
            };
        case types.ADD_REGIONS_FAILURE:
            return {
                ...state,
                addRegion: false
            };
        case types.ADD_STATIONS_SUCCESS:
            return {
                ...state,
                isStationDialogOpen: true
            };
        case types.ADD_STATIONS_FAILURE:
            return {
                ...state,
                isStationDialogOpen: false
            };
        default: return state;
    }
};