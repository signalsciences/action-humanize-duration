const core = require('@actions/core');
const humanizeDuration = require('humanize-duration');
// https://www.npmjs.com/package/humanize-duration
try {
  var millis = parseInt(core.getInput('millis'));
  core.setOutput("duration", humanizeDuration(millis));
} catch (error) {
  core.setFailed(error.message);
}
