const { Command, flags } = require('@oclif/command')
const auth = require('../lib/auth')

class HelloCommand extends Command {
  async run() {
    const user = await auth.login()
    const { firstName } = await auth.profile(user)
    this.log(`Hello ${firstName} 👋`)
  }
}

HelloCommand.description = `Describe the command here
...
Extra documentation goes here
`

HelloCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' })
}

module.exports = HelloCommand
