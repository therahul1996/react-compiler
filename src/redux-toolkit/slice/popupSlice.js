import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    message: "",
  },
  reducers: {
    setPopupMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setPopupMessage } = popupSlice.actions;

export default popupSlice.reducer;
