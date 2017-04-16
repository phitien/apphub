module.exports = exports = function(name, df) {
  const argv = process.argv;
  const reg = new RegExp(name + '=(.*)');
  for(var i in argv) {
    if (argv.hasOwnProperty(i)) {
      var matches = argv[i].match(reg);
      if (matches) return matches[1];
    }
  }
  return df;
}
