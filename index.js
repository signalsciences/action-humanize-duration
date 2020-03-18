const core = require('@actions/core');
const humanizeDuration = require('humanize-duration');
// https://www.npmjs.com/package/humanize-duration
try {
  var millis = parseInt(core.getInput('millis'));
  if (isNaN(millis)) {
	  var now = Date.now();
	  var from = Date.parse(core.getInput('from'));
	  millis = now - from;
  }
  core.setOutput("duration", humanizeDuration(millis, core.getInput('config')));
} catch (error) {
  core.setFailed(error.message);
}
