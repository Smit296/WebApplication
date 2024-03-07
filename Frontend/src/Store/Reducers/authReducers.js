// src/reducers.js

import {FETCH_DATA_SUCCESS, VERIFY_USER} from '../Actions/authActions.js';

const initialState = {
  users: [],
  verifyStatus:[]
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case VERIFY_USER:
      return {
        ...state,
        verifyStatus: action.payload
      }
    default:
      return state;
  }
};

export default authReducer;
