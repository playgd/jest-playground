'use strict'

const TestRunner = require('jest-runner/build')
const runLinter = require('./run-linter')

class CustomRunner extends TestRunner {
  async runTests (...args) {
    console.log('run tests...')
    const [err] = await runLinter()
    return !err super.runTests(...args)
  }
}

module.exports = CustomRunner
