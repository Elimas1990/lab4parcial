// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlPaises:'https://restcountries.eu/rest/v2/',
  urlPeliculas:'https://my.api.mockaroo.com/peliculas.json?key=001039f0',
  urlActores:'https://my.api.mockaroo.com/actores.json?key=001039f0',
  firebase: {
    apiKey: "AIzaSyAs999_s60dPWE6XgI8nv_OKVif6bOGRbQ",
    authDomain: "parcial-43b5b.firebaseapp.com",
    databaseURL: "https://parcial-43b5b.firebaseio.com",
    projectId: "parcial-43b5b",
    storageBucket: "parcial-43b5b.appspot.com",
    messagingSenderId: "690114562195",
    appId: "1:690114562195:web:32282fbcda716b0e75a566"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
