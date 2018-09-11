import { toggleLoadMask } from '../utils/loader';
import Constants from '../constants/Constants';
import * as types from './authTypes';
import LnfWebApi from './../api/api';
import config from './../api/config';

export function getLockerItems() {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.get(Constants.exportURL() + config.endpoint.getAllRecordedItems, apiKeyHeader, false).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.RECORDED_SUCCESS, payload: response.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.RECORDED_FAILURE });
            }
        );
    };
}

export function getClaim(data) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.getCustomerClaimByRefrenceNumber, apiKeyHeader, false, data).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.FETCH_CLAIM_SUCCESS, payload: response.data.data });
                dispatch({ type: types.CHANGE_URL, pathName: "matcheditems" });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.FETCH_CLAIM_FAILURE });
            }
        );
    };
}

export function getItemsFoundInLocker(data) {
    toggleLoadMask();
    var apiKeyHeader = {
        "x-api-key": sessionStorage.getItem('token')
    }
    return async dispatch => {
        await LnfWebApi.post(Constants.exportURL() + config.endpoint.itemsFoundInLocker, apiKeyHeader, false, data).then(
            (response) => {
                toggleLoadMask();
                dispatch({ type: types.ITEM_FOUND_IN_LOCKER_SUCCESS, payload: response.data.data });
            },
            (error) => {
                toggleLoadMask();
                dispatch({ type: types.ITEM_FOUND_IN_LOCKER_FAILURE });
            }
        );
    };
}

export function showLockerItem(recordedItem) {
    return dispatch => {
        dispatch({ type: types.RECORDED_ITEM, payload: recordedItem });
        dispatch({ type: types.CHANGE_URL, pathName: "itemDetail" });
    };

}

export function search(search) {
    return { type: types.SEARCH_DASHBOARD, payload: search }
}