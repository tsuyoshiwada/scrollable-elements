module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "browserify", "fixture"],
    files: [
      "test/fixtures/**/*.html",
      "test/**/*.spec.js"
    ],
    exclude: [],
    preprocessors: {
      "test/**/*.html": "html2js",
      "test/**/*.spec.js": "browserify"
    },
    browserify: {
      debug: true,
      transform: [
        ["babelify", {plugins: ["babel-plugin-espower"]}]
      ]
    },
    reporters: ["progress"],
    port: 9876,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS"],
    singleRun: false,
    concurrency: Infinity
  });
};