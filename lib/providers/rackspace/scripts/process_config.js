fs = require('fs');
mustache = require('mustache');

console.log('Current directory: ' + process.cwd());
console.log('Script directory: ' + __dirname);

fs.readFile('../../../config/rackspace.example.json', 'utf8', function (err,template) {
  if (err) {
    return console.log(err);
  }

  var config = mustache.render(template, process.env);
  fs.writeFile('../../../config/rackspace.config.json', config, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("Created rackspace.config.json!");
      }
  });
});
