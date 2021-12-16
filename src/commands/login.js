const { Command } = require('@oclif/command')
const auth = require('../lib/auth')

class LoginCommand extends Command {
  async run() {
    const authData = await auth.login()
    this.log(`Logged in as ${authData.user}`)
  }
}

LoginCommand.description = `Logs in the user using github`

module.exports = LoginCommand
