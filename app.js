/* eslint-disable import/no-extraneous-dependencies */
require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');
const removeHeaders = require('./middleware/removeHeaders');
const indexRouter = require('./routes/index.router');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(removeHeaders);
app.use(ssr);
app.use(express.json());
app.use('/', indexRouter);

app.listen(PORT, () => { console.log('Server started'); });
