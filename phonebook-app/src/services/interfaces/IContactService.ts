import { ContactOutPutDTO } from "../../dtos/contactOutPutDTO";

export interface IContactService {
  getContact: () => Promise<ContactOutPutDTO>;
}