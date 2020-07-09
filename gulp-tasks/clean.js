const del = require('del')

module.exports = function clean(cb) {
  return del(['build', '.checksums']).then(() => {
    cb()
  })
}
