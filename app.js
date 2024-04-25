require('@babel/register');

const express = require('express');
const ssr = require('./middleware/ssr')

const app = express();
app.use(ssr)
app.listen(3000, () => { console.log('Server started'); });
