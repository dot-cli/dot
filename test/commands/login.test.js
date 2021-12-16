const { expect, test } = require('@oclif/test')

describe('login', () => {
  test
    .stdout()
    .command(['login'])
    .it('runs login', (ctx) => {
      expect(ctx.stdout).to.contain('Logged in as mock_user')
    })
})
