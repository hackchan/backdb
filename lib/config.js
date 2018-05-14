const debug = require('debug')('backdb:db:setup:examples')

module.exports = {

  database: process.env.DB_NAME || 'playgames',
  username: process.env.DB_USER || 'hackchan',
  password: process.env.DB_PASS || 'hackchan',
  host: process.env.DB_HOST || '192.168.18.80',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: s => debug(s),
  setup: false

}
