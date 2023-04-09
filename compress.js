const fs = require('fs');
const uglifyjs = require('uglify-js');

const inputFile = 'input.js';
const outputFile = 'output.min.js';

fs.readFile(inputFile, 'utf8', function (err, data) {
  if (err) {
    throw err;
  }

  const result = uglifyjs.minify(data);

  fs.writeFile(outputFile, result.code, function (err) {
    if (err) {
      throw err;
    }

    console.log(`Compressed ${inputFile} to ${outputFile}`);
  });
});
