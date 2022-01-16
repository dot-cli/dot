import sinon from 'sinon'

jest.mock('ghauth')
jest.mock('github-api')

afterEach(() => {
  jest.restoreAllMocks()
  sinon.restore()
})
