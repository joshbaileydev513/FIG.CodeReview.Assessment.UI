import angular from "angular";
import "@uirouter/angularjs";
import { AccountService } from "./services";
import { confirmDeleteComponent } from "./components/confirm-delete/confirm-delete.component";

export {
  AccountActivity,
  AccountDetail,
  AccountService,
  AccountSummary
} from "./services/index";

export const sharedModule = angular
  .module("shared", ["ui.router"])
  .service(AccountService.serviceName, AccountService)
  .component("confirmDelete", confirmDeleteComponent)
  ;
