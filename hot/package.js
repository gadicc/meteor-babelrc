Package.describe({
  name: 'gadicc:hot',
  version: '0.0.3',
  summary: 'React hotloading, used by gadicc:ecmascript-hot.',
  git: 'https://github.com/gadicc/meteor-react-hotloader',
  documentation: '../README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.7');

  api.use('modules');
  api.use('ecmascript');
  api.use('mongo');
  api.use('underscore', 'client');
  api.use('webapp', 'server');
  api.use('random', 'server');

  // this isn't used directly, but is used to pull in the package
  api.use('gadicc:modules-runtime-hot@0.0.1-modules.7');
  api.use('modules-runtime');
  api.imply('modules-runtime');

  api.addFiles('hot-client.js', 'client');
  api.addFiles('hot-server.js', 'server');

  api.export('hot', 'client');
  api.export('meteorInstallHot', 'client');
});

/*
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hot');
  api.addFiles('hot-tests.js');
});
*/