import { IComponentOptions } from "angular";
import template from "./navbar.template.html";
import "./navbar.style.scss";

export class NavbarComponent {
  static componentName: string = "navbarComponent";
  static componentDefinition: IComponentOptions = {
    controller: NavbarComponent,
    controllerAs: "$ctrl",
    template: template,
    bindings: {}
  };
}
