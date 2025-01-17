import angular, { IAngularStatic } from "angular";
import { accountListComponent } from "./list/account-list.component";
import { accountDetailComponent } from "./detail/account-detail.component";
import { addAccountComponent } from "./add/add-account.component";

export const accountModule = (angular as IAngularStatic)
  .module("app.features.account", [
  ])
  .component("accountList", accountListComponent)
  .component("accountDetail", accountDetailComponent)
  .component("addAccount", addAccountComponent);
