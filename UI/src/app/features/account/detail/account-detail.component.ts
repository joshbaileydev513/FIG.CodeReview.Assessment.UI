import { IComponentOptions, IController } from 'angular';
import { AccountService } from '../../../shared/services/account/account.service';
import { AccountDetail } from '../../../shared/services/account/account-detail-model';
import { StateParams } from '@uirouter/core';

class AccountDetailController implements IController {
  public accountDetail?: AccountDetail;

  static $inject = ['accountService', '$stateParams'];

  constructor(
    private accountService: AccountService,
    private $stateParams: StateParams
  ) {}

  $onInit() {
    const id = Number(this.$stateParams["accountId"]);
    this.accountService.getAccountDetailById(id).then((detail) => {
      this.accountDetail = detail;  // single object
    });
  }
}

const template = require('./account-detail.template.html');

export const accountDetailComponent: IComponentOptions = {
  bindings: {},
  template,
  controller: AccountDetailController
};
