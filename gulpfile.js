require('./src/gulp/mkapp');
require('./src/gulp/rmapp');

var addGulpTasks = require('./src/gulp/gulp');

addGulpTasks(require('./src/apps/asd/gulp/gulp'));
/**NEW_APP**/
