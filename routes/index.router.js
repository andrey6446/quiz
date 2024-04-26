const router = require("express").Router();

// views
const mainViewRouter = require("./views/main.view.router");
const themesViewRouter = require("./views/themes.view.router");
const questionViewRouter = require("./views/question.view.router");
const authViewRouter = require("./views/auth.view.router");
const pageNotFoundViewRouter = require("./views/pageNotFound.view.router");

// api
const questionApiRouter = require("./api/question.api.router");
const authApiRouter = require("./api/auth.api.router");

// маршруты для views
router.use("/", mainViewRouter);
router.use("/themes", themesViewRouter);
router.use("/themes", questionViewRouter);
router.use("/auth", authViewRouter);
router.use("*", pageNotFoundViewRouter);

// маршруты для api
router.use("/api/themes", questionApiRouter);
router.use("/auth", authApiRouter);

// router.use('*', pageNotFoundViewRouter);

module.exports = router;
