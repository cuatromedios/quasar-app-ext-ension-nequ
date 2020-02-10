/**
 * Quasar App Extension uninstall script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/uninstall-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/UninstallAPI.js
 */
const rimraf = require('rimraf')
module.exports = function (api) {
  rimraf.sync(api.resolve.src('mixins/NqFieldMixin.js'))
  rimraf.sync(api.resolve.src('mixins/NqFormMixin.js'))
}
