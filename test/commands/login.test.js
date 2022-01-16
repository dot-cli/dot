import { expect, test } from '@oclif/test'

import auth from 'lib/auth'

import { user, mockLogin } from './helper'

describe('login', () => {
  beforeEach(() => {
    mockLogin()
  })

  test
    .stdout()
    .command(['login'])
    .it('runs login', (ctx) => {
      expect(auth.login.called).to.equal(true)
      expect(ctx.stdout).to.contain(`Logged in as ${user}`)
    })
})
