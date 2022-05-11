
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-bsc.cjs.production.min.js')
} else {
  module.exports = require('./sdk-bsc.cjs.development.js')
}
