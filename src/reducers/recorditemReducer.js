import * as types from '../actions/authTypes';

const commonInitialState = {
    serialInfo: '',
    lostItemLocation: '',
    itemImageUrl: '',
    itemAdded: false

};

export const recordItem = (state = commonInitialState, action) => {
    switch (action.type) {
        case types.RECORD_ITEM_SUBMITTED_SUCCESS:
            return {
                ...state,
                serialInfo: action.payload
            };
        case types.RECORD_ITEM_SUBMITTED_FAILURE:
            return {
                ...state,
                serialInfo: ''
            };
        case types.LOST_ITEM_LOCATION_SUCCESS:
            return {
                ...state,
                lostItemLocation: action.payload
            };
        case types.LOST_ITEM_LOCATION_FAILURE:
            return {
                ...state,
                lostItemLocation: ''
            };
        case types.RECORD_ITEM_LOST_UPLOAD_SUCCESS:
            return {
                ...state,
                itemImageUrl: action.payload
            };
        case types.RECORD_ITEM_LOST_UPLOAD_SUCCESS:
            return {
                ...state,
                itemImageUrl: undefined
            };
        case types.ITEM_ADDITION_SUCCESS:
            return {
                ...state,
                itemAdded: true
            }
        case types.ITEM_ADDITION_FAILURE:
            return {
                ...state,
                itemAdded: false
            }

        default: return state;
    }
};
