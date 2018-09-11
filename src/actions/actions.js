import { toggleLoadMask } from '../utils/loader';
import Constants from '../constants/Constants';
import * as types from './authTypes';
import LnfWebApi from './../api/api';
import config from './../api/config';

export function inputUserName(data) {
    return { type: INPUT_USERNAME, data };
}

export function inputPassword(data) {
    return { type: INPUT_PASSWORD, data };
}

export function clearUserNamePassword() {
    return { type: CLEAR_LOGIN_CREDS };
}

export function login(username, password, callback) {
    var loginData = {
        "userName": username,
        "password": password
    }
    return dispatch => {
        toggleLoadMask();
        LnfWebApi.post(Constants.exportURL() + config.endpoint.login, true, false, loginData).then(
            (response) => {
                // Reducers may handle this to show the data and reset isFetching

                toggleLoadMask();
                if (response.data.data.token != null) {
                    sessionStorage.setItem('token', response.data.data.token);
                    sessionStorage.setItem('firstName', response.data.data.username);
                    dispatch({ type: 'VALID_CREDS', payload: response.data.data });
                    dispatch({ type: types.CHANGE_URL, pathName: 'dashboard' });
                    callback();
                } else {
                    dispatch({ type: types.CHANGE_URL, pathName: 'login' });
                    dispatch({ type: INVALID_CREDS });
                    dispatch({ type: types.OPEN_ERROR_DIALOG, payload: response.data.data.message });
                    callback();
                }
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    sessionStorage.clear();
                    dispatch({ type: types.CHANGE_URL, pathName: 'login' });
                    dispatch({ type: INVALID_CREDS });
                    dispatch({ type: types.OPEN_ERROR_DIALOG, payload: "Login Failed" });
                    callback();
                }
            }
        );
    };
}

export function addCustomerClaim(payload) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return dispatch => {
        LnfWebApi.post(Constants.exportURL() + config.endpoint.customerClaim, apiKeyHeader, false, payload).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.CLAIM_ADDITION_SUCCESS, payload: response.data.data });
                dispatch({ type: types.CHANGE_URL, pathName: 'success' });
                dispatch({ type: types.CLEAN_UPLOAD_URLS });
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    dispatch({ type: types.CLAIM_ADDITION_FAILURE });
                }
            }
        );
    };
}
export function getCustomerClaims() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.viewCustomerClaims, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                console.log("rwsponse", response);
                dispatch({ type: types.VIEW_CLAIM_RESPONSE_SUCCESS, payload: response.data });
                dispatch({ type: types.CLEAR_URL });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.VIEW_CLAIM_RESPONSE_FAILURE });

            }
        );
    };
}

export function getPnrRelatedDetails(data) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.detailsByPnr, apiKeyHeader, false, data).then(
            (response) => {
                toggleLoadMask();
                console.log("rwsponse", response);
                dispatch({ type: types.PNR_DETAILS_SUCCESS, payload: response.data.data });
            },
            (error) => {
                toggleLoadMask();
                console.log("error CUSTOMER CLAIMS", error);
                dispatch({ type: types.PNR_DETAILS_FAILURE });

            }
        );
    };
}

export function saveBoardingPassOnCloud(file) {
    toggleLoadMask();
    const formData = new FormData();
    formData.append('boardingpass', file);
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.uploadImage, false, false, formData).then(
            (response) => {
                dispatch({ type: types.UPLOAD_SUCCESS_BOARDING_PASS, payload: response.data.data.BoardingPass })
                toggleLoadMask();
            },
            (error) => {
                dispatch({ type: types.UPLOAD_FAILURE_BOARDING_PASS })
                toggleLoadMask();
            }
        );
    };
}

export function saveItemImageOnCloud(file) {
    toggleLoadMask();
    const formData = new FormData();
    formData.append('boardingpass', file);
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.uploadImage, false, false, formData).then(
            (response) => {
                dispatch({ type: types.UPLOAD_SUCCESS_ITEM_IMAGES, payload: response.data.data.BoardingPass })
                toggleLoadMask();
            },
            (error) => {
                dispatch({ type: types.UPLOAD_FAILURE_ITEM_IMAGES })
                toggleLoadMask();
            }
        );
    };
}

export function getAirports() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.getAirports, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.FETCH_AIRPORTS_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.FETCH_AIRPORTS_FAILURE });
            }
        );
    };
}

export function logout() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.logout, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.LOGOUT_SUCCESS });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.LOGOUT_FAILURE });
            }
        );
    };
}
export function openTab(tabName) {
    return { type: types.SELECTED_TAB, payload: tabName };
}
export function clearUrl() {
    return { type: types.CLEAR_URL }
}

export function goToDashboard() {
    return { type: types.GOTO_DASHBOARD, pathName: 'dashboard' }
}

export function closeErrorDialog() {
    return { type: types.CLOSE_ERROR_DIALOG }
}
export function testAction(dispatch) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return LnfWebApi.get(Constants.exportURL() + config.endpoint.getAirports, apiKeyHeader, false).then(
        (response) => {
            toggleLoadMask();
            dispatch({ type: types.FETCH_AIRPORTS_SUCCESS, payload: response.data });
        },
        (error) => {
            toggleLoadMask();
            dispatch({ type: types.FETCH_AIRPORTS_FAILURE });
        }
    );

}

export const INPUT_USERNAME = 'INPUT_USERNAME';
export const INPUT_PASSWORD = 'INPUT_PASSWORD';
export const INVALID_CREDS = 'INVALID_CREDS';
export const CLEAR_LOGIN_CREDS = 'CLEAR_LOGIN_CREDS';
