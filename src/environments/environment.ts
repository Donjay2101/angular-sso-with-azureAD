// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId:"6365b475-62ee-48f1-b746-351c419efff4",
  authority:"https://login.microsoftonline.com/8b24551d-7c2c-4beb-8b61-95f32d9929ef/",
  redirectUrl:"http://localhost:4200/listings",
  postLogoutRedirectUri:"",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
