'use strict'
const debug = require('debug')('backdb:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'playgames',
    username: process.env.DB_USER || 'hackchan',
    password: process.env.DB_PASS || 'hackchan',
    host: process.env.DB_HOST || '192.168.18.80',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)
  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
}

setup()
