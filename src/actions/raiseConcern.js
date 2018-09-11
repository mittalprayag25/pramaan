import { toggleLoadMask } from "../utils/loader";
import issues from '../services/raiseConcernService';
import flightNumbers from '../services/flightNumbersWithFlightDetailsService';
import Constants from '../constants/Constants';
import raiseNewConcernService from '../services/raiseNewConcernService';
import axios from 'axios';
import { history } from '../store';

export function getIssues(callback) {
    return dispatch => {
        toggleLoadMask();
        return issues()
            .then(response => {
                toggleLoadMask();
                dispatch({ type: GET_ISSUES, response: response.data });
                dispatch({ type: 'EMPTY_IMAGE_STORE' });
                callback();
            }).catch(error => {
                history.push('');
                toggleLoadMask();
            })
    };
}

export function getFlightNumbersWithFlightDetails(date, setFlightData) {
    return dispatch => {
        toggleLoadMask();
        return flightNumbers(date)
            .then(response => {
                toggleLoadMask();
                dispatch({ type: GET_FLIGHT_DETAILS, response: response.data })
                setFlightData();
            })
            .catch(error => {
                history.push('');
                toggleLoadMask();
            })
    }
}

export function saveImageOnCloud(file) {
    return dispatch => {
        toggleLoadMask();
        const url = Constants.exportImageStoreURL();
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'x-auth-token': sessionStorage.token
            }
        }
        axios.post(url, formData, config).then(response => {
            dispatch({ type: 'PUSH_IMAGE_ID', imgData: response.data })
            toggleLoadMask();
        }).catch(error => {
            history.push('');
            toggleLoadMask();
        })
    }
}

export function raiseIssue(issueDetails, goToRef) {
    return dispatch => {
        toggleLoadMask();
        return raiseNewConcernService(issueDetails)
            .then(response => {
                sessionStorage.setItem('refrenceId', response.data);
                toggleLoadMask();
                goToRef();
            })
            .catch(error => {
                history.push('');
                toggleLoadMask();
            })
    }
}

export function deleteImage(imageArray, emptyToDeleteImagesArray) {
    return dispatch => {
        toggleLoadMask();
        const config = {
            headers: {
                'content-type': 'application/json',
                'x-auth-token': sessionStorage.token
            }
        }
        axios.post(Constants.exportURL() + 'issue/deleteImages', imageArray, config).then(response => {
            dispatch({ type: 'DELETE_IMAGE_ID', toDeleteImages: imageArray })
            emptyToDeleteImagesArray();
            toggleLoadMask();
        }).catch(error => {
            history.push('');
            toggleLoadMask();
        })
    }
}

export const GET_ISSUES = 'GET_ISSUES';
export const GET_FLIGHT_DETAILS = 'GET_FLIGHT_DETAILS';