import { createAction } from 'redux-actions';

export const CHANGE_VIEW = 'CHANGE_VIEW';
export const changeView = createAction(CHANGE_VIEW);

export const REGISTER_PANEL = 'REGISTER_PANEL';
export const UNREGISTER_PANEL = 'UNREGISTER_PANEL';
export const registerPanel = createAction(REGISTER_PANEL);
export const unregisterPanel = createAction(UNREGISTER_PANEL);

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SHOW_USER = 'SHOW_USER';
export const HIDE_USER = 'HIDE_USER';
export const HIDE_ALL_USERS = 'HIDE_ALL_USERS';
export const addUser = createAction(ADD_USER);
export const removeUser = createAction(REMOVE_USER);
export const showUser = createAction(SHOW_USER);
export const hideUser = createAction(HIDE_USER);
export const hideAllUsers = createAction(HIDE_ALL_USERS);

export const REQUEST_FETCH_USER_PRESENCE = 'REQUEST_FETCH_USER_PRESENCE';
export const SUCCESS_FETCH_USER_PRESENCE = 'SUCCESS_FETCH_USER_PRESENCE';
export const FAILURE_FETCH_USER_PRESENCE = 'FAILURE_FETCH_USER_PRESENCE';
export const requestFetchUserPresence = createAction(REQUEST_FETCH_USER_PRESENCE);
export const successFetchUserPresence = createAction(SUCCESS_FETCH_USER_PRESENCE);
export const failureFetchUserPresence = createAction(FAILURE_FETCH_USER_PRESENCE);
