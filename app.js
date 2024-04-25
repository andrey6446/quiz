require('@babel/register');

const express = require('express');
const ssr = require('./middleware/ssr')
const removeHeaders = require('./middleware/removeHeaders')

const app = express();
app.use(ssr)
app.use(removeHeaders)
app.listen(3000, () => { console.log('Server started'); });
