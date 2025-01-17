import { IComponentOptions, IController } from "angular";
import { AccountService } from "../../../shared/services/account/account.service";
import { AccountDetail } from "../../../shared/services/account/account-detail-model";
import { StateParams } from "@uirouter/core";
import "./account-detail.style.scss";

class AccountDetailController implements IController {
  public accountDetail?: AccountDetail;
  public ownerAge?: number;

  static $inject = ["accountService", "$stateParams"];

  constructor(
    private accountService: AccountService,
    private $stateParams: StateParams
  ) {}

  $onInit() {
    const accountId = Number(this.$stateParams["accountId"]);
    this.accountService.getAccountDetailById(accountId).then((detail) => {
      this.accountDetail = detail;
      this.ownerAge = this.computeOwnerAge(detail.ownerBirthdate);
    });
  }

  /**
   * Computes the age in years from a given birthdate string.
   * Returns undefined if birthdate is null or invalid.
   */
  private computeOwnerAge(birthdate: string | null): number | undefined {
    if (!birthdate) return undefined;

    const parsedDate = new Date(birthdate);
    if (isNaN(parsedDate.getTime())) {
      return undefined; // invalid date string
    }

    const diffMs = Date.now() - parsedDate.getTime();
    const ageDate = new Date(diffMs);

    // Subtract 1970 from the "year" of the time diff to get approximate age
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const template = require("./account-detail.template.html");

export const accountDetailComponent: IComponentOptions = {
  bindings: {},
  template,
  controller: AccountDetailController
};
