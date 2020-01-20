// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:81/rest-api/wp-json/wp/v2',
  restApi: 'http://192.168.1.59:81/rest-api/wp-json/wcra/v1/rest/?secret_key=rHn91TAVRlA3ZDJAKOsFuEnLr1s2M8Px',
  ambrishApi: 'http://blog.ambrishjha.in/wp-json/wcra/v1/api/?secret_key=tz1Enppaq00xOYySu8YaDt578LT5oQgP',
  testApi: 'https://jsonplaceholder.typicode.com/todos',
  gauravApi: 'http://192.168.1.5/wordpressRestforTest/wp-json/wcra/v1/answerapi/?secret_key=xW5LTVtDRnwkEWxVn25I9t54lrABYIj0&param1='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
