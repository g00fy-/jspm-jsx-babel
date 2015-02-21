var babel = require("babel-core");

exports.translate = function(load) {
  var output = babel.transform(load.source, {
    experimental: true,
    modules: 'system',
    sourceMap: 'inline',
    filename: load.address,
    code: true,
    ast: false,
    blacklist: []
  });
  load.source = output.code;
  load.metadata.sourceMap = output.map;
  console.log(load.source);
};