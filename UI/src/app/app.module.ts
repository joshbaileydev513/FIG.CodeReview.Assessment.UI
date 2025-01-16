import angular from "angular";
import { homeModule } from "./features/index";
import { sharedModule } from "./shared/shared.module";
import "jquery";
import "lodash";
import "@uirouter/angularjs";
import { navbarModule } from "./shared/components/navbar/navbar.module";

export default angular
    .module("app", ["ui.router", homeModule.name, sharedModule.name, navbarModule.name])
    .name;