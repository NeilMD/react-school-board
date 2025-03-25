const express = require("express");
const router = express.Router();

const dotenv = require("dotenv").config();
const pino = require("pino");
const pretty = require("pino-pretty");
const logger = pino(pretty());
const requireDir = require("require-dir");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const joi = require("joi");
const responseUtil = require("./utils/responseUtil");
const cors = require("cors");

// Module Init
const modules = {
  logger: logger,
  router: router,
  mongoose: mongoose,
  process: process,
  joi: joi,
  asyncHandler: asyncHandler,
};

// DB Connect
require("./db")({ ...modules })();

logger.info("===========================");
logger.info("===========================");
logger.info("=====FILE LOADING BEGIN====");

// Utility function to load modules (config, dummy data, middleware, etc.)
function loadModules(directory, label, passModules = true) {
  const files = requireDir(directory);
  const loadedModules = {};
  logger.info(`===== Load ${label} =====`);

  Object.keys(files).forEach((file) => {
    logger.info(`${label} File: ${file}`);

    if (passModules) {
      // Pass modules to the loaded files if passModules is true
      loadedModules[file] = files[file]({
        ...modules,
        router: express.Router(),
      });
    } else {
      // Load the module without passing modules if passModules is false
      loadedModules[file] = files[file];
    }
  });

  return loadedModules;
}

// Load Config
modules.config = Object.assign({}, loadModules("./config", "Config"));

// Load Utils
modules.util = Object.assign({}, loadModules("./utils", "Utils", false));

// Load Validators
modules.validator = Object.assign({}, loadModules("./validators", "Validator"));

// Load Middleware
modules.middleware = Object.assign(
  {},
  loadModules("./middlewares", "Middleware")
);

// Load Models
modules.models = Object.assign({}, loadModules("./models", "Models", false));

// Load Controllers
modules.controllers = Object.assign(
  {},
  loadModules("./controllers", "Controllers")
);

// Load Routes
modules.routes = Object.assign({}, loadModules("./routes", "Routes"));

logger.info("=====FILE LOADING DONE=====");
logger.info("===========================");
logger.info("===========================");

logger.info("App Init");
const app = express();
app.use(express.json());

// CORS
app.use(cors({
  origin: "http://localhost:5173"
}))

console.dir(modules.util.responseUtil);

logger.info("URL Logging Init");
app.use(modules.middleware.urlLogging);
app.use(modules.middleware.resBuilderMiddleware);

logger.info("Routes Init");
//ROUTES
app.use("/api/comment", modules.routes.comment);
app.use("/api/post", modules.routes.post);

app.use(modules.middleware.errorMiddleware);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
