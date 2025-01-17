import { IComponentOptions, IController } from "angular";
import { AccountService } from "../../../shared/services/account/account.service";
import { AccountSummary } from "../../../shared/services/account/account-list-model";

class AccountListController implements IController {
  public accounts: AccountSummary[] = [];
  public searchQuery = "";
  public sortColumn = "";
  public reverseSort = false;

  public showDeleteModal = false;
  public deleteTargetId?: number;
  public deleteTargetLabel?: string;

  public deleteConfirmMessage = "Deleting this account cannot be undone.";

  static $inject = ["accountService"];
  constructor(private accountService: AccountService) {}

  $onInit() {
    this.accountService.getAllAccounts().then((data) => {
      this.accounts = data;
    });
  }

  public filteredAccounts(): AccountSummary[] {
    if (!this.searchQuery) {
      return this.accounts;
    }

    const lowerQuery = this.searchQuery.toLowerCase();
    return this.accounts.filter((a) => {
      return (
        a.accountName.toLowerCase().includes(lowerQuery) ||
        a.ownerName.toLowerCase().includes(lowerQuery) ||
        a.createdDate.toLowerCase().includes(lowerQuery) ||
        (a.checkingAmount + "").includes(lowerQuery) ||
        (a.savingsAmount + "").includes(lowerQuery)
      );
    });
  }

  public setSort(col: keyof AccountSummary) {
    if (this.sortColumn === col) {
      this.reverseSort = !this.reverseSort;
    } else {
      this.sortColumn = col;
      this.reverseSort = false;
    }
  }

  public openDeleteModal(account: AccountSummary) {
    this.deleteTargetId = account.accountId;
    this.deleteTargetLabel = `${account.ownerName} - ${account.accountName}`;
    this.showDeleteModal = true;
  }

  public cancelDelete() {
    this.showDeleteModal = false;
    this.deleteTargetId = undefined;
    this.deleteTargetLabel = undefined;
  }

  public confirmDelete() {
    if (!this.deleteTargetId) return;
    this.accountService
      .deleteAccount(this.deleteTargetId)
      .then(() => this.accountService.getAllAccounts())
      .then((data) => {
        this.accounts = data;
        this.cancelDelete();
      });
  }
}

const template = require("./account-list.template.html");

export const accountListComponent: IComponentOptions = {
  bindings: {},
  template,
  controller: AccountListController
};