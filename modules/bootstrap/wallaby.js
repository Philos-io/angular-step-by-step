module.exports = function (wallaby) {
  return {
    files: [
      'lib/angular.js',
      'lib/angular-mocks.js',
      'index.js'
    ],
    tests: [
      'spec.js'
    ]
  };
};
