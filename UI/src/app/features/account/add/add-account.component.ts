import { IController, IComponentOptions } from "angular";
import { AccountService } from "../../../shared/services/account/account.service";
import { AccountSummary } from "../../../shared/services/account/account-list-model";

class AddAccountController implements IController {
  public onClose?: () => void;
  public onAdded?: () => void;

  public newAccount: Partial<AccountSummary> = {};

  static $inject = ["accountService"];
  constructor(private accountService: AccountService) {}

  public handleAddAccount() {
    this.accountService.addAccount(this.newAccount).then(() => {
      if (this.onAdded) {
        this.onAdded();
      }
      this.closeModal();
    });
  }

  public closeModal() {
    if (this.onClose) {
      this.onClose();
    }
  }
}

const template = require("./add-account.template.html");

export const addAccountComponent: IComponentOptions = {
  bindings: {
    onClose: "&?",
    onAdded: "&?"
  },
  template,
  controller: AddAccountController
};
