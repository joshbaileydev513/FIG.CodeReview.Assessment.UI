import { ILocationProvider } from "angular";
import { StateProvider, UrlRouterProvider } from "@uirouter/angularjs"; // <== use these
import { accountStates } from "../../features/account/account.state";

export const routeConfigFn = configFn;

// We now inject $stateProvider and $urlRouterProvider (matching the new types).
configFn.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
function configFn(
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider,
  $locationProvider: ILocationProvider
) {
  // Default routes
  $urlRouterProvider.otherwise("/home");
  $urlRouterProvider.when("/", "/home");
  $urlRouterProvider.when("", "/home");

  $locationProvider.html5Mode({ enabled: true, requireBase: false });

  // Register the account states using $stateProvider
  accountStates.forEach((state) => {
    $stateProvider.state(state);
  });
}
