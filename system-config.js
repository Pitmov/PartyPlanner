// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    // '@angular2-material':'vendor/@angular2-material',
    '@ngrx': 'vendor/@ngrx',
    'materialize': "vendor/materialize-css",
    'angular2-materialize': 'vendor/angular2-materialize',
    'jquery': 'vendor/jquery'
};
/** User packages configuration. */
var packages = {
    '@ngrx/core': {
        main: 'index.js',
        format: 'cjs'
    },
    '@ngrx/store': {
        main: 'index.js',
        format: 'cjs'
    },
    '@ngrx/store-devtools': {
        main: 'index.js',
        format: 'cjs'
    },
    '@ngrx/store-log-monitor': {
        main: 'index.js',
        format: 'cjs'
    },
    '@ngrx/devtools/dist': {
        main: 'index.js',
        format: 'cjs'
    },
    'materialize': {
        "format": "global",
        "main": 'dist/js/materialize',
        'defaultExtension': 'js'
    },
    'angular2-materialize': {
        'main': 'dist/index',
        'defaultExtension': 'js'
    },
    'jquery': {
        format: 'cjs'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared'
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map