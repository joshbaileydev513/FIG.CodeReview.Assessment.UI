import { IAngularStatic } from 'angular';
import { accountListComponent } from './list/account-list.component';
import { accountDetailComponent } from './detail/account-detail.component';
import angular from "angular";

export const accountModule = (angular as IAngularStatic)
    .module('app.features.account', [])
    .component('accountList', accountListComponent)
    .component('accountDetail', accountDetailComponent);
