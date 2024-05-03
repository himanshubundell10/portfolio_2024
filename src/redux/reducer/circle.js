import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHover: false,
};

export const circleReducer = createSlice({
  name: "circle",
  initialState,
  reducers: {
    setIsHover: (state, action) => {
      state.isHover = action.payload;
    },
  },
});


export const {setIsHover} = circleReducer.actions

