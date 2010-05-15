
load('./spec/lib/jspec.js')
load('./spec/lib/jspec.xhr.js')
load('lib/mustache.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/parsing.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/examples' })
.report()