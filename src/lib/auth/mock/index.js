async function login() {
  return {
    token: 'mock_token',
    scope: 'user:email',
    user: 'mock_user'
  }
}

async function profile() {
  return {
    name: 'Mock Name',
    firstName: 'Mock'
  }
}

module.exports = { login, profile }
