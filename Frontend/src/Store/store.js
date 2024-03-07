// src/index.js

import { configureStore } from '@reduxjs/toolkit'; // Import from Redux Toolkit
import authReducer from './Reducers/authReducers'; // Make sure the path is correct

// Configure Redux store with Redux Toolkit
const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
});

export default store;
