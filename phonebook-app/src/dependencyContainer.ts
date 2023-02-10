import { ContactService } from "./services/implements/contactService";
import { IContactService } from "./services/interfaces/IContactService";

class DependencyContainer {
  private IContactService: IContactService | undefined;

  getIContactService(): IContactService {
    this.IContactService = new ContactService();
    return this.IContactService;
  }

}
const Container = new DependencyContainer()
export default Container;