import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactOutputDTO, Users } from "../../dtos/contactOutputDTO";
import { IContactService } from "../../services/interfaces/IContactService";
import container, { TYPES } from "../../inversify.config";


/* #region  [- getContact -] */
export const getContact = createAsyncThunk(
  "contact/getContactStatus",
  async () => {
    const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
    var response: ContactOutputDTO = await contactService.getContact();
    return response.users;
  }
);
/* #endregion */

/* #region  [- getFilteredContact -] */
export const getFilteredContacts = createAsyncThunk(
  "contact/getFilteredContactsStatus",
  async (searchValue: string) => {
    const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
    var response: ContactOutputDTO = await contactService.getFilteredContacts(searchValue);
    return response.users;
  }
);
/* #endregion */