/**
 * Created by roger on 2016. 7. 13..
 */
Package.describe({
  summary: "A pattern to display application errors to the user"
});

Package.onUse(function (api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function (api) {
  api.use('redbyzan:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('errors_test.js', 'client');
});