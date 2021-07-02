import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    selectedUser: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.selectedUser = action.payload;
    },

    userLogout: (state) => {
      state.selectedUser = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export const selectedUser = (state) => state.user.selectedUser;

export default userSlice.reducer;
