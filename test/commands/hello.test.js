const { expect, test } = require('@oclif/test')

describe('hello', () => {
  test
    .stdout()
    .command(['hello'])
    .it('runs hello', (ctx) => {
      expect(ctx.stdout).to.contain('Hello Mock')
    })
})
