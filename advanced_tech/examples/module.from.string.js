const strMod = `function imStringModule() {
  console.log('Hey')
}

module.exports = {
  imStringModule
}`

function moduleFromString() {
  const ModuleConstruct = module.constructor;
  const newModuleFromString = new ModuleConstruct();

  newModuleFromString._compile(strMod, './example.module.for.string.require.js')

  return newModuleFromString.exports
}

const myStringModule = moduleFromString()
myStringModule.imStringModule()