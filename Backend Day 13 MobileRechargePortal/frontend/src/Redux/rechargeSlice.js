// rechargeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const rechargeSlice = createSlice({
  name: 'recharge',
  initialState: {
    mobileNumber: '', // Initial mobile number is empty
  },
  reducers: {
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
    },
  },
});

export const { setMobileNumber } = rechargeSlice.actions;

export default rechargeSlice.reducer;
