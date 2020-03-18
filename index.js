const core = require('@actions/core');
const humanizeDuration = require('humanize-duration');
// https://www.npmjs.com/package/humanize-duration
try {
  var millis = parseInt(core.getInput('millis'));
  var config = {};
  var config_str = core.getInput('config');
  if (!!config_str) {
    config = eval('config = ' + config_str);
  }
  if (isNaN(millis)) {
	  var now = Date.now();
	  var from = Date.parse(core.getInput('from'));
	  millis = now - from;
  }
  core.setOutput("duration", humanizeDuration(millis, config));
} catch (error) {
  core.setFailed(error.message);
}
