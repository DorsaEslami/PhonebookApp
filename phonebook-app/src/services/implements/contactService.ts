import axios from 'axios';
import { injectable } from "inversify";
import { ContactOutPutDTO } from '../../dtos/contactOutPutDTO';
import { IContactService } from '../interfaces/IContactService';
import "reflect-metadata";
@injectable()
export class ContactService implements IContactService {
  async getContact(): Promise<ContactOutPutDTO> {
    var url = 'https://dummyjson.com/users';
    var result = await axios.get<ContactOutPutDTO>(url);
    return result.data;
  }
}