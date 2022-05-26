const express = require("express");
const cors = require("cors");

const controllers = require("../app/controllers");
const handleGoogleLoginOrRegister = require("../app/controllers/api/v1/handleGoogleLoginOrRegister");
const carsController = require("../app/controllers/api/v1/carsController");
const userController = require("../app/controllers/api/v1/userController");

const apiRouter = express.Router();
apiRouter.use(cors());
apiRouter.use(express.json());

/**
 * TODO: Implement your own API
 *       implementations
 */

apiRouter.post("/api/v1/auth/google", handleGoogleLoginOrRegister);
apiRouter.get("/api/v1/cars/:date/:time/:passenger", carsController.list);
apiRouter.post("/api/v1/auth/login", userController.login);
apiRouter.post("/api/v1/auth/register", userController.register);
apiRouter.get("/api/v1/auth/me", userController.whoAmI);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
    throw new Error("The Industrial Revolution and its consequences have been a disaster for the human race.");
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
