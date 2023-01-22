/* #region  [- import -] */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getContact } from "./contactAction";

/* #endregion */

interface State {
  contactList: string[];
}

const initialState: State = { contactList: [] };


const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getContact.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.contactList = action.payload;
      }
    );
  },
});
export default contactSlice.reducer;