/* #region  [- import -] */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../../dtos/contactOutputDTO";
import { getContact, getFilteredContacts, } from "./contactAction";

/* #endregion */

interface State {
  contactsList: Users[];
}

const initialState: State = { contactsList: [] };


const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContacts: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(
      getContact.fulfilled,
      (state, action: PayloadAction<Users[]>) => {
        state.contactsList = action.payload;
      }
    );
    builder.addCase(
      getFilteredContacts.fulfilled,
      (state, action: PayloadAction<Users[]>) => {
        state.contactsList = action.payload;
      }
    );

  },
});
export const { resetContacts } = contactSlice.actions;
export default contactSlice.reducer;