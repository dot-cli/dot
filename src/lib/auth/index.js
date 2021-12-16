const defaultAuth = require('./default')
const mockAuth = require('./mock')

module.exports = process.env.NODE_ENV === 'test' ? mockAuth : defaultAuth
