import { createSlice } from "@reduxjs/toolkit";

export const sendSlice = createSlice({
  name: "send",
  initialState: {
    selectedMail: null,
    sendMessageOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageOpen = false;
    },
  },
});

export const { selectMail, openSendMessage, closeSendMessage } =
  sendSlice.actions;

export const selectSendMessageOpen = (state) => state.send.sendMessageOpen;
export const selectSelectedMail = (state) => state.send.selectedMail;

export default sendSlice.reducer;
