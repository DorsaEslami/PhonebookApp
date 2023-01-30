import { ContactOutputDTO, Users } from "../../dtos/contactOutputDTO";
import { ContactDeleteOutputDTO } from '../../dtos/contactDeleteOutputDTO';
import { ContactPostInputDTO } from "../../dtos/contactPostInputDTO";
import { ContactPutInputDTO } from "../../dtos/ContactPutInputDTO";

export interface IContactService {
  getContact: () => Promise<ContactOutputDTO>;
  getFilteredContacts: (searchValue: string) => Promise<ContactOutputDTO>;
  deleteContact: (id: number) => Promise<ContactDeleteOutputDTO>;
  postContact: (data: ContactPostInputDTO) => Promise<Users>;
  putContact: (data: ContactPutInputDTO) => Promise<Users>;
}