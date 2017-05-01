require('./src/gulp/mkapp');
require('./src/gulp/rmapp');
require('./src/gulp/mkpage');
require('./src/gulp/rmpage');

var addGulpTasks = require('./src/gulp/gulp');

addGulpTasks(require('./src/apps/ishop/conf'));
/**NEW_APP**/
