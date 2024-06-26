const RestProxy = require("sp-rest-proxy");

const settings = {
  configPath: "./private.json", // Location for SharePoint instance mapping and credentials
  port: 8080, // Local server port
  staticRoot: "./node_modules/sp-rest-proxy/static", // Root folder for static content
};

const restProxy = new RestProxy(settings);
restProxy.serve();