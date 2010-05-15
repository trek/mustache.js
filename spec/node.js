
require.paths.unshift('spec', './spec/lib', 'lib')
require('jspec')
require('unit/spec.helper')
require('mustache')

JSpec
  .exec('spec/unit/parsing.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/examples', failuresOnly: true })
  .report()
