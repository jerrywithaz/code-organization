/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import modalReducer from './modal/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {

  const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    ...injectedReducers,
  });

  return rootReducer;

}