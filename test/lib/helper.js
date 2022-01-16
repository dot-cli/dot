import ghauth from 'ghauth'
import Github from 'github-api'

export const loggedInUser = {
  user: 'test_user',
  token: 'token',
  name: 'Test Name'
}

export const profile = {
  name: 'Test Name',
  firstName: 'Test'
}

export const mockAuth = () => {
  ghauth.mockImplementation(() => loggedInUser)
}

export const mockGithubAPI = () => {
  const mockGetProfile = jest.fn().mockImplementation(() => ({
    data: {
      name: profile.name
    }
  }))
  const mockGetUser = jest
    .fn()
    .mockImplementation(() => ({ getProfile: mockGetProfile }))
  Github.mockImplementation(() => ({ getUser: mockGetUser }))
}
