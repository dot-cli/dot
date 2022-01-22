import sinon from 'sinon'

import auth from 'lib/auth'

export const user = 'test_user'
export const profile = {
  name: 'Test Name',
  firstName: 'Test'
}

export const mockLogin = () => sinon.stub(auth, 'login').returns({ user })

export const mockProfile = () => sinon.stub(auth, 'profile').returns(profile)
