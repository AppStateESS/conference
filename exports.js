/* global __dirname, exports */
exports.path = require('path')
exports.APP_DIR = exports.path.resolve(__dirname, 'javascript')

exports.entry = {
  RegistrationHistory: exports.APP_DIR + '/RegistrationHistory/index.jsx',
  SessionMatchForm: exports.APP_DIR + '/SessionMatchForm/index.jsx',
  SupplementAdmin: exports.APP_DIR + '/SupplementAdmin/index.js',
  ServiceSettings: exports.APP_DIR + '/ServiceSettings/index.jsx',
  SessionSignup: exports.APP_DIR + '/SessionSignup/index.jsx',
  Registration: exports.APP_DIR + '/Registration/index.jsx',
  Supplement: exports.APP_DIR + '/Supplement/index.jsx',
  Conference: exports.APP_DIR + '/Conference/index.jsx',
  Location: exports.APP_DIR + '/Location/index.jsx',
  Settings: exports.APP_DIR + '/Settings/index.jsx',
  Reports: exports.APP_DIR + '/Reports/index.jsx',
  Payment: exports.APP_DIR + '/Payment/index.jsx',
  Session: exports.APP_DIR + '/Session/index.jsx',
  Visitor: exports.APP_DIR + '/Visitor/index.jsx',
  Student: exports.APP_DIR + '/Student/index.jsx',
  Onsite: exports.APP_DIR + '/Onsite/index.js',
  Signup: exports.APP_DIR + '/Signup/index.jsx',
  Refund: exports.APP_DIR + '/Refund/index.js',
  Signin: exports.APP_DIR + '/Signin/index.jsx',
  Guest: exports.APP_DIR + '/Guest/index.js',
  Login: exports.APP_DIR + '/Login/index.jsx',
  Reset: exports.APP_DIR + '/Reset/index.jsx'
}
