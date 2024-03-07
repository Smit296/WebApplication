// src/actions.js

import axios from 'axios';

// Action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const REGISTER_USER = 'REGISTER_USER';
export const VERIFY_USER = 'VERIFY_USER';

// Action creators
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const registerUser = () => ({
  type: REGISTER_USER

})

export const verifyUserAccount = (data) => ({
  type: VERIFY_USER,
  payload:data
  
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get('http://localhost:5000/api/users/getAllUsers');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};


export const registerUsers = (requestBody) => {
  console.log(requestBody);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/registerUser',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json', // Set content type to JSON
            // Add any other headers your backend expects
          },
          withCredentials: true, // Include credentials (cookies, authorization headers, etc.)
        }
      );
      // Assuming you have a registerUser action creator to handle the response data
      dispatch(registerUser(response.data));
    } catch (error) {
      // Handle error
      console.error('Error registering user:', error);
    }
  };
};

export const verifyUser= () => {
  return async(dispatch) => {
    try{
        const response = await axios.post('http://localhost:5000/api/users/verifyUser', {},
        {
          headers: {
            'Content-Type': 'application/json', // Set content type to JSON
            // Add any other headers your backend expects
          },
          withCredentials: true, // Include credentials (cookies, authorization headers, etc.)
        })

        console.log("response: " +response);
        const data = JSON.stringify(response);
        console.log("data: " ,data);
        dispatch(verifyUserAccount  (JSON.stringify(response)));
    }catch(error){
        console.log("give error for verify user")
    }
  }
}

