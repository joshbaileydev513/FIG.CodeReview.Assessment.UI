import { IPromise, IQService, ITimeoutService } from "angular";
import summary from "./account-list.json";
import details from "./account-detail.json";
import { AccountSummary } from "./account-list-model";
import { AccountDetail } from "./account-detail-model";

export class AccountService {
    static serviceName = "accountService"
    static $inject = ["$timeout", "$q"]
    constructor(private $timeout: ITimeoutService, private $q: IQService) {
        this.accountSummaryList = summary as AccountSummary[];
        this.accountDetailList = details as AccountDetail[];
    }

    private accountSummaryList: AccountSummary[];
    private accountDetailList: AccountDetail[];
    /** Generates a random number between 100 and 1000. */
    private getRandomDelayMilliseconds(): number {
        return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    }

    /**
     * Returns a list of all accounts in the system.
     * @returns A list of all accounts in the system.
     */
    public getAllAccounts(): IPromise<AccountSummary[]> {
        // Simulate an API call by introducing an artificial delay.
        return this.$timeout(this.getRandomDelayMilliseconds())
            .then(() => {
                return this.accountSummaryList;
            });
    }

    /**
     * Returns a list of accounts associated with the ownerId provided.
     * @param ownerId The ownerId associated with the accounts.
     * @returns A list of accounts associated with the ownerId provided.
     */
    
    public getAccountDetailById(accountId: number): IPromise<AccountDetail> {
        return this.$timeout(this.getRandomDelayMilliseconds()).then(() => {
          const account = this.accountDetailList.find(
            (a) => a.accountId === accountId
          );
          if (account) {
            return account;
          } else {
            return this.$q.reject("Account not found for the given account ID.");
          }
        });
      }
      

    public deleteAccount(accountId: number): IPromise<void> {
        return this.$timeout(this.getRandomDelayMilliseconds())
          .then(() => {
            this.accountSummaryList = this.accountSummaryList.filter(
              (acct) => acct.accountId !== accountId
            );
            // If you want to remove detail references too:
            this.accountDetailList = this.accountDetailList.filter(
              (acct) => acct.accountId !== accountId
            );
          });
      }
      
      public addAccount(newAccount: Partial<AccountSummary>): IPromise<void> {
        return this.$timeout(this.getRandomDelayMilliseconds()).then(() => {
          const newId = Math.floor(Math.random() * 100000) + 100; // naive unique ID
          const dateString = new Date().toISOString().split("T")[0]; // e.g. "2025-02-01"
      
          const account: AccountSummary = {
            accountId: newId,
            accountName: newAccount.accountName || "",
            ownerName: newAccount.ownerName || "",
            checkingAmount: newAccount.checkingAmount || 0,
            savingsAmount: newAccount.savingsAmount || 0,
            createdDate: dateString,
          };
      
          // push to the in-memory array
          this.accountSummaryList.push(account);
        });
      }
}