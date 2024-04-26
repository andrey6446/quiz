const router = require("express").Router();

// views
const mainViewRouter = require("./views/main.view.router");
const themesViewRouter = require("./views/themes.view.router");
const questionViewRouter = require("./views/question.view.router");
const pageNotFoundViewRouter = require("./views/pageNotFound.view.router");
const authRouter = require("./auth.router");

// api
const questionApiRouter = require("./api/question.api.router");

// маршруты для views
router.use("/", mainViewRouter);
router.use("/themes", themesViewRouter);
router.use("/themes", questionViewRouter);
router.use("*", pageNotFoundViewRouter);
router.use('/auth', authRouter);

// маршруты для api
router.use("/api/themes", questionApiRouter);

// router.use('*', pageNotFoundViewRouter);

module.exports = router;
