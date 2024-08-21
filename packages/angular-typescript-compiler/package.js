Package.describe({
  name: 'angular-typescript-compiler',
  version: '0.5.0',
  summary: 'Angular TypeScript Compiler Package',
  git: 'https://github.com/afkar-telecom/angular-meteor/tree/master/atmosphere-packages/angular-typescript-compiler',
  documentation: null
});

Npm.depends({
  "@fernando.sainz/meteor-typescript": "0.12.0",
  "rollup": "3.5.1",
  "@rollup/plugin-node-resolve": "15.0.1",
  "rollup-plugin-hypothetical": "2.1.0",
  "@rollup/plugin-commonjs": "23.0.3",
});

Package.onUse(function (api) {
  api.versionsFrom("1.11");
  api.use(
    [
      "ecmascript",
      "babel-compiler@7.5.3",
      "angular-html-compiler@0.5.0",
      "angular-scss-compiler@0.5.0",
    ],
    "server"
  );
  api.mainModule('index.js', 'server');
});