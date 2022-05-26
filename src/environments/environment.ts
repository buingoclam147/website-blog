// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDrOwD1v0PRQ8bd7ASIj8mABoZPm67ZZJ0',
    authDomain: 'pro1-d590d.firebaseapp.com',
    databaseURL: 'https://pro1-d590d-default-rtdb.firebaseio.com/',
    projectId: 'pro1-d590d',
    storageBucket: 'pro1-d590d.appspot.com',
    messagingSenderId: '646212456037',
    appId: '1:646212456037:web:3e3110efed1923b4f3408c',
    measurementId: 'G-4TDEFFK41M'
  },
  // endPoint: 'https://backend-nodejs-blog.herokuapp.com/api/',
  // localhost: 'https://backend-nodejs-blog.herokuapp.com/'
  endPoint: 'http://localhost:3000/api/',
  localhost: 'http://localhost:3000/'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
