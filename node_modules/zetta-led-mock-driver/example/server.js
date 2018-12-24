var zetta = require('zetta');
var LED = require('../index');

zetta()
  .use(LED)
  .listen(1337);
