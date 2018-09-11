import { toggleLoadMask } from '../utils/loader';
import Constants from '../constants/Constants';
import * as types from './authTypes';
import LnfWebApi from './../api/api';
import config from './../api/config';

export function getSerialNumber() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.serialnumber, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.RECORD_ITEM_SUBMITTED_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.RECORD_ITEM_SUBMITTED_FAILURE });
            }
        );
    };
}

export function getLostItemLocation() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.viewLostItemLocation, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.LOST_ITEM_LOCATION_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.LOST_ITEM_LOCATION_FAILURE });
            }
        );
    };
}
export function saveLockerItemOnCloud(file) {
    console.log(file);
    toggleLoadMask();
    const formData = new FormData();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    formData.append('lockerItemImage', file);
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.lockerUploadImage, apiKeyHeader, false, formData).then(
            (response) => {
                debugger;
                dispatch({ type: types.RECORD_ITEM_LOST_UPLOAD_SUCCESS, payload: response.data.data.lockerItemImage })
                toggleLoadMask();
            },
            (error) => {
                debugger;
                dispatch({ type: types.RECORD_ITEM_LOST_UPLOAD_FAILURE })
                toggleLoadMask();
            }
        );
    };
}
export function addItem(payload) {
    debugger;
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return dispatch => {
        LnfWebApi.post(Constants.exportURL() + config.endpoint.recorditem, apiKeyHeader, false, payload).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ITEM_ADDITION_SUCCESS, payload: response.data.data });
                dispatch({ type: types.CHANGE_URL, pathName: 'dashboard' });
            },
            (error) => {
                toggleLoadMask();
                if (error.response.status === 401 || error.response.status === 403) {
                    dispatch({ type: types.ITEM_ADDITION_FAILURE });
                }
            }
        );
    };
}