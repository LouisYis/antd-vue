const glob = require('glob')
const path = require('path')
const resolve = require('./resolve')

function getCompoentns() {
  const entries = {}

  glob.sync(resolve('components/*')).forEach(componentPath => {
    let componentName = componentPath.substring(componentPath.lastIndexOf(path.sep) + 1)
    entries[componentName] = componentPath
  })

  return entries
}

function getCompoentnsEntries() {
  const components = getCompoentns()
  Object.keys(components).forEach(key => {
    components[key] = `${components[key] + path.sep}index.js`
  })

  return components
}

module.exports = {
  getCompoentns,
  getCompoentnsEntries
}
