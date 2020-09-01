//zetta object
var zetta = require('zetta')
var mockled = require('zetta-led-mock-driver')


//inti zetta server
//Server Name: Shajeen
//Port: 1234
//Responce: msg()
zetta().name('Shajeen').use(mockled).listen(1234, function() {
  console.log('My Server is running on 1234 !!! :)')
})
