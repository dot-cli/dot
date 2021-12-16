const { Command } = require('@oclif/command')
const auth = require('../lib/auth')

class HelloCommand extends Command {
  async run() {
    const user = await auth.login()
    const { firstName } = await auth.profile(user)
    this.log(`Hello ${firstName} 👋`)
  }
}

HelloCommand.description = `Prints out a greeting to the logged in user`

module.exports = HelloCommand
