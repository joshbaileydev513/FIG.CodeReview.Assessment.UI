import { IComponentOptions } from "angular";
import template from "./navbar.template.html";
// If you have a separate SCSS file for styling, import it here:
// import "./navbar.style.scss";

export class NavbarComponent {
  // This matches the naming approach in your HomeComponent
  static componentName: string = "navbarComponent";

  // This is the actual AngularJS component definition
  static componentDefinition: IComponentOptions = {
    controller: NavbarComponent,
    controllerAs: "$ctrl",
    template: template,
    bindings: {}
  };
}
