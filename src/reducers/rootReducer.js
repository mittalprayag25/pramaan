import { combineReducers } from 'redux';
import { loginReducer, logItIn, addClaim } from './loginReducer';
import { common } from './commonReducer';
import { recordItem } from './recorditemReducer';
import { dashboard } from './dashboardReducer';
import { manage } from './manageReducer';

const rootReducer = combineReducers({
    loginReducer,
    logItIn,
    addClaim,
    dashboard,
    recordItem,
    common,
    manage
});

export default rootReducer;