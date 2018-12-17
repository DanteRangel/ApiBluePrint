var fs = require('fs');
var aglio = require('aglio');
var options = {
  themeVariables: 'default'
};


fs.readFile('doc_schoolPayment.md','utf8' ,function(err, data) {
  console.log(data);
  aglio.render(data, options, function (err, html, warnings) {
      if (err) return console.log(err);
      if (warnings) console.log(warnings);
      console.log(html);
      fs.writeFile('doc_schoolPayment.html', html, function(err) {
    
      });
  });
    
});
