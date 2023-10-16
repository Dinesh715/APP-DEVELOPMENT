import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import rechargeReducer from './rechargeSlice'; // Make sure to import your rechargeSlice

export default configureStore({
    reducer: {
        user: userReducer,
        recharge: rechargeReducer, // Include the recharge reducer
    }
});
 