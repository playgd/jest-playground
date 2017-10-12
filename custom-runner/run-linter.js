'use strict'

const { spawn } = require('child_process')

module.exports = () => {
  return new Promise((resolve) => {
    const command = spawn('yarn', ['lint'], { stdio: 'inherit' })
    const HAS_ERROR = true

    command
      .on('close', (code) => resolve([code === 1 ? HAS_ERROR : null]))
      .on('error', () => resolve([HAS_ERROR]))
  })
}
