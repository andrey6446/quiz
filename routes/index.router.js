const router = require('express').Router();

// views
const mainViewRouter = require('./views/main.view.router');

// api
const mainApiRouter = require('./api/main.api.router');

// маршруты для views
router.use('/', mainViewRouter);

// маршруты для api
router.use('/api/main', mainApiRouter);

// router.use('*', pageNotFoundViewRouter);

module.exports = router;
