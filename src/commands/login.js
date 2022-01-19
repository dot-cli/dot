import { Command } from '@oclif/core'
import { login } from 'lib/auth'

class LoginCommand extends Command {
  async run() {
    const authData = await login()
    this.log(`Logged in as ${authData.user}`)
  }
}

LoginCommand.description = 'Logs in the user using github'

export default LoginCommand
