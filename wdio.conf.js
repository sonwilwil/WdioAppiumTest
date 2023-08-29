const projectPath = require("path");
const androidAppPath = projectPath.join(
 process.cwd(),
 "/app/TODOApp_SDET Ventures Test.apk"
);
exports.config = {
  port: 4723,
 specs: ["./test/specs/android/*.js"],
 exclude: [
  
 ],
 maxInstances: 1,
 capabilities: [
   //ANDROID
   {
       "platformName": 'Android',
       "appium:deviceName": 'HP',
       "appium:platformVersion": "10.0",
       "appium:automationName": "UIAutomator2",
       "appium:app": androidAppPath,
   }
 ],
 logLevel: "info",
 bail: 0,
 baseUrl: "http://localhost",
 waitforTimeout: 10000,
 connectionRetryTimeout: 120000,
 connectionRetryCount: 3,
 services: [
   [
     "appium",
     {
       args: {
         address: "localhost",
         port: 4723,
       },
       logPath: "./",
     },
   ],
 ],
 framework: "mocha",
 reporters: ["spec"],
 mochaOpts: {
   ui: "bdd",
   timeout: 60000,
 },
};
