import { expect, test } from '@oclif/test'

import auth from 'lib/auth'

import { profile, mockLogin, mockProfile } from './helper'

describe('hello', () => {
  beforeEach(() => {
    mockLogin()
  })

  test
    .stdout()
    .stub(auth, 'profile', mockProfile())
    .command(['hello'])
    .it('runs hello', (ctx) => {
      expect(auth.profile.called).to.equal(true)
      expect(ctx.stdout).to.contain(`Hello ${profile.firstName}`)
    })
})
