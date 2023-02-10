import axios from 'axios';
import { injectable } from "inversify";
import { ContactOutputDTO, Users } from '../../dtos/contactOutputDTO';
import { IContactService } from '../interfaces/IContactService';
import "reflect-metadata";
import { ContactDeleteOutputDTO } from '../../dtos/contactDeleteOutputDTO';
import { ContactPostInputDTO } from '../../dtos/contactPostInputDTO';
import { ContactPutInputDTO } from '../../dtos/ContactPutInputDTO';
@injectable()
export class ContactService implements IContactService {

  getContact = async (): Promise<ContactOutputDTO> => {
    var url = 'https://dummyjson.com/users';
    var result = await axios.get<ContactOutputDTO>(url);
    return result.data;
  }

  getFilteredContacts = async (searchValue: string): Promise<ContactOutputDTO> => {
    var url = 'https://dummyjson.com/users/search?q=' + searchValue;
    var result = await axios.get<ContactOutputDTO>(url);
    return result.data;
  }

  deleteContact = async (id: number): Promise<ContactDeleteOutputDTO> => {
    var url = 'https://dummyjson.com/users/' + id;
    var result = await axios.delete<ContactDeleteOutputDTO>(url);
    return result.data;
  };

  postContact = async (data: ContactPostInputDTO): Promise<Users> => {
    var url = 'https://dummyjson.com/users/add';
    var result = await axios.post<Users>(url, data);
    return result.data;
  };

  putContact = async (data: ContactPutInputDTO): Promise<Users> => {
    var url = 'https://dummyjson.com/users/' + data.id;
    var result = await axios.put<Users>(url, data);
    return result.data;
  };
}