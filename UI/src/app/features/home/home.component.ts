import { IComponentOptions } from "angular";
import template from "./home.template.html";
import "./home.style.scss";

export class HomeComponent {
    static componentName: string = "homeComponent";
    static componentDefinition: IComponentOptions = {
        controller: HomeComponent,
        controllerAs: "$ctrl",
        template: template,
        bindings: {}
    };
}