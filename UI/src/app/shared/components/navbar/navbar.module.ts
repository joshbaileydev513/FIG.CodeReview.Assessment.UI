import angular from "angular";
import { NavbarComponent } from "./navbar.component";

export const navbarModule = angular
  .module("navbar", [])
  .component(NavbarComponent.componentName, NavbarComponent.componentDefinition);
