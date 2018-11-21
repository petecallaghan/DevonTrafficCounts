'use strict';

const { Pool } = require('pg')

/**
 * Defines the connection to the PostGres database on AWS
 */
exports.Pool = new Pool({
  user: 'developer',
  host: 'devonjunctionlinks.c930eguyipka.eu-west-2.rds.amazonaws.com',
  database: 'developer',
  password: 'developer',
  port: 5432,
})

