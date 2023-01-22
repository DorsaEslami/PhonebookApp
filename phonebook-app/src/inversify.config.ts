import { Container } from "inversify";
import { ContactService } from "./services/implements/contactService";
import { IContactService } from "./services/interfaces/IContactService";

export const TYPES = {
  IContactService: Symbol("IContactService")
};

var container = new Container();

container.bind<IContactService>(TYPES.IContactService).to(ContactService);

export default container;