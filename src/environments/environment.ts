// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const SERVER_URL = "http://localhost:8000";

export const environment = {
  tinymce_base_url: '/tinymce',
  production: false,
  serverUrl: SERVER_URL,
  apiUrl: `${SERVER_URL}/api/v1`,
  storageDir: `${SERVER_URL}/storage`,
  postImageUploadUrl: `${SERVER_URL}/api/v1/post/imageUpload`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
