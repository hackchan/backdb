'use strict'
const config = require('./lib/config')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

const prompt = inquirer.createPromptModule()
console.log('config>>', config)
async function setup () {
  const answer = await prompt([{
    type: 'confirm',
    name: 'setup',
    message: 'this will destroy your DATABASE, are you sure?'
  }])

  if (!answer.setup) {
    return console.log('Nothing happend :)')
  }

  await db(config).catch(handleFatalError)
  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[Fatal error]')} ${err.message}`)
  console.error(err.stack)
}

setup()
