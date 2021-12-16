const ghauth = require('ghauth')
var Github = require('github-api')

// Default clientId belongs to github.com/dot-cli
const authOptions = {
  clientId: process.env.GITHUB_CLIENT_ID || 'abacd0805b3167829f3b',
  configName: 'dot',
  scopes: ['user:email'],
  userAgent: 'dot-cli'
}

async function login() {
  return ghauth(authOptions)
}

async function profile({ token }) {
  const gh = new Github({ token })
  const { data: profile } = await gh.getUser().getProfile()
  profile.firstName = profile.name.split(' ')[0]
  return profile
}

module.exports = { login, profile }
