import { IComponentOptions, IController } from 'angular';
import { AccountService } from '../../../shared/services/account/account.service';
import { AccountSummary } from '../../../shared/services/account/account-list-model';

class AccountListController implements IController {
  public accounts: AccountSummary[] = [];
  public searchQuery = '';
  public sortColumn = '';
  public reverseSort = false;

  static $inject = ['accountService'];

  constructor(private accountService: AccountService) {}

  $onInit() {
    this.accountService.getAllAccounts().then(data => {
      this.accounts = data;
    });
  }

  // Filtering logic
  public filteredAccounts(): AccountSummary[] {
    if (!this.searchQuery) return this.accounts;

    const lowerQuery = this.searchQuery.toLowerCase();
    return this.accounts.filter(a => {
      return (
        a.accountName.toLowerCase().includes(lowerQuery) ||
        a.ownerName.toLowerCase().includes(lowerQuery) ||
        a.createdDate.toLowerCase().includes(lowerQuery) ||
        (a.checkingAmount + '').includes(lowerQuery) ||
        (a.savingsAmount + '').includes(lowerQuery)
      );
    });
  }

  // Sorting
  public setSort(col: keyof AccountSummary) {
    if (this.sortColumn === col) {
      this.reverseSort = !this.reverseSort;
    } else {
      this.sortColumn = col;
      this.reverseSort = false;
    }
  }

  public deleteAccount(id: number) {
    this.accountService.deleteAccount(id).then(() => {
      return this.accountService.getAllAccounts();
    }).then(data => {
      this.accounts = data;
    });
  }
}

const template = require('./account-list.template.html');

export const accountListComponent: IComponentOptions = {
  bindings: {},
  template,
  controller: AccountListController
};
