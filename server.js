var express = require('express')
var app = express();
var moment = require('moment');

app.get('/:parameter', function (req, res) {
  var para = req.params.parameter;
  if (!moment(para, ["x", "MMMM D YYYY"]).isValid()) {
    res.send('null');
  } else {
    res.json({
      unix: moment(para , ["x", "MMMM D YYYY"]).unix(),
      natural: moment(para, ["x", "MMMM D YYYY"]).format("MMMM D, YYYY")
    })
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})