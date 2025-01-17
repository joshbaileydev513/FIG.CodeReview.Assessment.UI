import { IController, IComponentOptions } from "angular";

class ConfirmDeleteController implements IController {
  public itemLabel?: string;
  public confirmMessage?: string;

  public onConfirm?: () => void;
  public onCancel?: () => void;

  public confirm() {
    if (this.onConfirm) {
      this.onConfirm();
    }
  }

  public cancel() {
    if (this.onCancel) {
      this.onCancel();
    }
  }
}

const template = require("./confirm-delete.template.html");

export const confirmDeleteComponent: IComponentOptions = {
  bindings: {
    itemLabel: "<",
    confirmMessage: "<",
    onConfirm: "&?",
    onCancel: "&?"
  },
  controller: ConfirmDeleteController,
  template,
};
