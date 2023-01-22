import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactOutPutDTO } from "../../dtos/contactOutPutDTO";
import { IContactService } from "../../services/interfaces/IContactService";
import container, { TYPES } from "../../inversify.config";


export const getContact = createAsyncThunk(
  "contact/getContact",
  async () => {
    const contactService: IContactService = container.get<IContactService>(TYPES.IContactService);
    var response: ContactOutPutDTO = await contactService.getContact();
    return response.users;
  }
);