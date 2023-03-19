const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mysql = require('promise-mysql');
const helmet = require('helmet');
const cors = require('cors');

const config = require('./config');

// Export the pool, so as not to pass it around as param
module.exports = { pool: mysql.createPool(config.pool) };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(helmet());
app.use(morgan('dev'));
app.use(cors())


const eventRouter = require('./routes/event.routes');
app.use('/event', eventRouter);

const assessmentRouter = require('./routes/assessment.routes');
app.use('/assessReport', assessmentRouter);

module.exports = app;
