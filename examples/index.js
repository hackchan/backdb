'use strict'

const db = require('../')
const config = require('../lib/config')
const chalk = require('chalk')

async function run () {
  const {Agent, Metric} = await db(config).catch(handleFatalError)
  const agent = await Agent.createOrUpdate({
    uuid: 'xxx',
    name: 'Memory',
    username: 'hackchan',
    hostname: 'PC0000001212',
    pid: 1,
    connected: true
  }).catch(handleFatalError)

  console.log('--AGENT--')
  console.log(agent)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[Fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

run()
