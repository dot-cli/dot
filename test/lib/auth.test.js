import auth from 'lib/auth'

import { loggedInUser, profile, mockAuth, mockGithubAPI } from './helper'

describe('auth', () => {
  test('login', async () => {
    mockAuth()

    expect(await auth.login()).toStrictEqual(loggedInUser)
  })

  test('profile', async () => {
    mockGithubAPI()

    const { token } = loggedInUser
    expect(await auth.profile({ token })).toStrictEqual(profile)
  })
})
