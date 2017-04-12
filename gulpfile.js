const argv = process.argv
var NODE_ENV = 'production'
for(var i in argv) {
  if (
    argv.hasOwnProperty(i)
    && (matches = argv[i].match(/NODE_ENV=(.*)/))
    && (['mock', 'test', 'stage', 'production'].indexOf(matches[1]) >= 0)
  ) {
    NODE_ENV = matches[1]
    break;
  }
}
process.env.NODE_ENV = NODE_ENV

require('./src/apps/dmr/gulp/gulp');
