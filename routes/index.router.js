const router = require('express').Router();

// views
const mainViewRouter = require('./views/main.view.router');
const themesViewRouter = require('./views/themes.view.router');
const questionViewRouter = require('./views/question.view.router');
const questionApiRouter = require('./api/question.api.router');

// api

// маршруты для views
router.use('/', mainViewRouter);
router.use('/themes', themesViewRouter);
router.use('/themes', questionViewRouter);

// маршруты для api
router.use('/api/themes', questionApiRouter);

// router.use('*', pageNotFoundViewRouter);

module.exports = router;
