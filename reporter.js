/*global console, module, process*/
'use strict';

// This code is extended from JSHint package: https://github.com/uipoet/sublime-jshint
module.exports = {

  reporter: function (errors, results) {
    var errorString = ' Error',
      warningString = ' Warning',
      file = results[0].file,
      errorLength, warningLength, globals, orphans,
      i, j, len;

    function numberWang(wangaNumb) {
      var thatsNumberWang = 8 - wangaNumb,
        stayNumberWang = '', i;

      for (i = 0; i < thatsNumberWang; i += 1) {
        stayNumberWang += ' ';
      }

      return stayNumberWang;
    }

    var buffer = '';
    console.log = function () {
      var args = Array.prototype.slice.call(arguments);
      buffer += args.join('');
      buffer += '\n';
    };

    console.log('[jshint file:', file + ']');

    results.forEach(function (result) {

      globals = result.implieds;
      orphans = result.unused;

      warningLength = (orphans ? orphans.length : 0);
      if (globals) {
        for (i = 0, len = globals.length; i < len; i++) {
          var global = globals[i];

          warningLength += global.line.length;
        }
      }

      if (warningLength > 1) {
        warningString += 's';
      }

      if (errors) {

        // Remove all errors that are also orphans or globals (reversed because errors will shrink)
        for (j = errors.length - 1; j >= 0; j--) {
          var error = errors[j].error;

          if (orphans) {
            for (i = orphans.length - 1; i >= 0; i--) {
              var orphan = orphans[i];

              if (orphan.name === error.a &&
                orphan.line === error.line &&
                orphan.character === error.character) {
                errors.splice(j, 1);
                break;
              }
            }
          }

          if (globals) {
            for (i = globals.length - 1; i >= 0; i--) {
              global = globals[i];

              if (global.name === error.a &&
                global.line.indexOf(error.line) >= 0) {
                errors.splice(j, 1);
                break;
              }
            }
          }
        }
      }
    });

    if (errors) {
      errorLength = errors.length;

      if (errorLength > 0) {
        if (errorLength > 1) {
          errorString += 's';
        }

        console.log(' ', errorLength, errorString + ': ');
        errors.forEach(function (result) {
          var error = result.error;

          console.log(numberWang((error.line.toString() + error.character.toString()).length), error.line + ',' + error.character + ': ', error.reason);
        });
      }
    }

    if (warningLength > 0) {
      console.log(' ', warningLength, warningString + ':');

      if (globals) {
        globals.forEach(function (global) {
          for (var line in global.line) {
            console.log(numberWang(global.line[line].toString().length + 1), global.line[line] + ',1: \'' + global.name + '\' is an implied global variable.');
          }
        });
      }

      if (orphans) {
        orphans.forEach(function (orphan) {
          console.log(numberWang(orphan.line.toString().length + 1), orphan.line + ',1: \'' + orphan.name + '\' is an unused variable.');
        });
      }
    }

    process.stdout.write(buffer);
    setTimeout('', 3000);
  }
};
