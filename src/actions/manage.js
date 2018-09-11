import { toggleLoadMask } from '../utils/loader';
import Constants from '../constants/Constants';
import * as types from './authTypes';
import LnfWebApi from '../api/api';
import config from '../api/config';

export function getUsers() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.viewUsers, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.USERS_FETCH_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.USERS_FETCH_FAILURE });
            }
        );
    };
}

export function getRoles() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.viewUserRole, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ROLES_FETCH_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.ROLES_FETCH_FAILURE });
            }
        );
    };
}

export function getRegions() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.viewRegions, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.REGIONS_FETCH_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.REGIONS_FETCH_FAILURE });
            }
        );
    };
}

export function getStations() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.viewStations, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.STATIONS_FETCH_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.STATIONS_FETCH_FAILURE });
            }
        );
    };
}

export function addUsers(payload) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.addUsers, apiKeyHeader, false, payload).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ADD_USER_SUCCESS, payload: response.data.data });
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    dispatch({ type: types.ADD_USER_FAILURE });
                }
            }
        );
    };
}
export function editUser(payload) { // Needs to be updated
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.addUsers, apiKeyHeader, false, payload).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ADD_USER_SUCCESS, payload: response.data.data });
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    dispatch({ type: types.ADD_USER_FAILURE });
                }
            }
        );
    };
}


export function addStation(payload) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.addStations, apiKeyHeader, false, payload).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ADD_STATIONS_SUCCESS, payload: response.data.data });
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    dispatch({ type: types.ADD_STATIONS_FAILURE });
                }
            }
        );
    };
}

export function editStation(payload) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.addStations, apiKeyHeader, false, payload).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ADD_STATIONS_SUCCESS, payload: response.data.data });
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    dispatch({ type: types.ADD_STATIONS_FAILURE });
                }
            }
        );
    };
}

export function addRegions(payload) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.addRegions, apiKeyHeader, false, payload).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ADD_REGIONS_SUCCESS, payload: response.data.data });
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    dispatch({ type: types.ADD_REGIONS_FAILURE });
                }
            }
        );
    };
}