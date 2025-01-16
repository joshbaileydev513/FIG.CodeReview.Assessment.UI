import angular from "angular";
import "@uirouter/angularjs"; // optional import if you need side effects, but not strictly required
import { AccountService } from "./services";

export {
  AccountActivity,
  AccountDetail,
  AccountService,
  AccountSummary
} from "./services/index";

export const sharedModule = angular
  .module("shared", [
    "ui.router"  // Just the string dependency
  ])
  .service(AccountService.serviceName, AccountService);
