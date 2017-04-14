module.exports = exports = function(name, df) {
  const argv = process.argv
  for(var i in argv) {
    const matches = argv[i].match(new RegExp(name + '=(.*)'))
    if (argv.hasOwnProperty(i) && matches) return matches[1]
  }
  return df
}
