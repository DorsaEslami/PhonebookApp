/* #region  [- import -] */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getContact } from "./contactAction";

/* #endregion */

interface State {
  contactsList: string[];
}

const initialState: State = { contactsList: [] };


const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getContact.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.contactsList = action.payload;
      }
    );
  },
});
export default contactSlice.reducer;