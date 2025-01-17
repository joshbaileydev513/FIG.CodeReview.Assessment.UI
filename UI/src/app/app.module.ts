import angular from "angular";
import "jquery";
import "lodash";
import "@uirouter/angularjs";

import { homeModule } from "./features/index";
import { sharedModule } from "./shared/shared.module";
import { navbarModule } from "./shared/components/navbar/navbar.module";
import { accountModule } from "./features/account/account.module";

import { routeConfigFn } from "./shared/routing";

export default angular
  .module("app", [
    "ui.router",
    homeModule.name,
    sharedModule.name,
    navbarModule.name,
    accountModule.name
  ])
  .config(routeConfigFn)
  .name;