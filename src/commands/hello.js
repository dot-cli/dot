import { Command } from '@oclif/command'
import { login, profile } from 'lib/auth'

class HelloCommand extends Command {
  async run() {
    const user = await login()
    const { firstName } = await profile(user)
    this.log(`Hello ${firstName} 👋`)
  }
}

HelloCommand.description = 'Prints out a greeting to the logged in user'

export default HelloCommand
