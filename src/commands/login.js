const { Command, flags } = require('@oclif/command')
const auth = require('../lib/auth')

class LoginCommand extends Command {
  async run() {
    const authData = await auth.login()
    this.log(`Logged in as ${authData.user}`)
  }
}

LoginCommand.description = `Describe the command here
...
Extra documentation goes here
`

LoginCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' })
}

module.exports = LoginCommand
