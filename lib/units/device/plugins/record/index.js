/**
 * Created by Ivonhoe on 2017/3/31.
 */

var fs = require('fs');

function Record() {
  this.path = path;
}

record = function (path, data) {
  if (path == null || path == "" || path == undefined) {
    return
  }

  var logData = data.replace('\n', '@' + new Date().getTime() + '\n')
  fs.appendFile(path, logData, 'utf8', function (err) {
    if (err) {
      console.log(err);
    }
  });
}

