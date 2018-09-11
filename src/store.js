import { createStore, applyMiddleware, compose } from 'redux';
import Logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/rootReducer';
import {loadState, saveState} from './localstorage';
import throttle from 'lodash/throttle';
export const history = createHistory();

const persistedState = loadState();
const enhancers = [];
const middleware = [thunkMiddleware, routerMiddleware(history), Logger];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, persistedState, composedEnhancers);
store.subscribe(throttle(() => { //throttle so that we are not saving with every action but with 1 second wait
    saveState({logItIn : store.getState().logItIn})// saving state in session if page is refreshed
}), 1000);
export default store ;
