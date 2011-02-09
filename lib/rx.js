var Rx = {}
global.ProvideCustomRxRootObject = function() {
  return Rx
}
require("./raw.rx")
exports.Rx = Rx
