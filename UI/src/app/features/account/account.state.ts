import { Ng1StateDeclaration } from "@uirouter/angularjs";

export const accountStates: Ng1StateDeclaration[] = [
  {
    name: 'accounts',
    url: '/accounts',
    component: 'accountList'
  },
  {
    name: 'accountDetails',
    url: '/accounts/:accountId',
    component: 'accountDetail'
  },
  {
    name: 'addAccount',
    url: '/add-account',
  }
];
