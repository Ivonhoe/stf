/**
 * Created by Ivonhoe on 2017/3/31.
 */

// var syrup = require('stf-syrup')
//
// module.exports = syrup.serial()
//   .dependency(require('../touch'))
//   .define(function (option, touch) {
//
//     var log = logger.createLogger('device:plugins:replay')
//
//     function Replay() {
//
//     }
//
//     Replay.prototype._repeat = function () {
//       touch._write(hahah)
//     }
//
//     return new Replay();
//   })

var logger = require('../../../../util/logger')
var log = logger.createLogger('device:plugins:replay')


