Package.describe({
  name: "gadicc:modules-runtime-hot",
  // version: "0.5.0-beta.11",    // core version, KEEP UPDATED
  version: "0.0.3-beta.12",
  summary: 'Used by gadicc:ecmascript-hot',
  git: "https://github.com/benjamn/install",
  documentation: "README.md"
});

/*
Npm.depends({
  install: "0.5.4"    // core version, KEEP UPDATED
});
*/

Package.onUse(function(api) {
  api.addFiles(
    // ".npm/package/node_modules/install/install.js",
    'install-hot.js',
  [
    "client",
    "server"
  ], {
    bare: true
  });

  // hot
  api.addFiles("modules-runtime-hot.js");
  api.export('mhot'); // XXX
  api.use('underscore');

  api.addFiles("modules-runtime.js");
  api.export("meteorInstall");

  // hot
  api.versionsFrom('1.3-beta.12');
  api.use('webapp', 'server');
  api.addFiles('modules-runtime-proxy.js', 'server');
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("modules"); // Test modules-runtime via modules.
  api.addFiles("modules-runtime-tests.js");
});
