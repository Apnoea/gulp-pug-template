const del = require('del'),
  cache = require('gulp-cache')

module.exports = function clean(cb) {
  return del('build').then(() => {
    cache.clearAll()
    cb()
  })
}
