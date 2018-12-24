module.exports = function(server) {
  var pirQuery = server.where({type: 'pir'});
  var ledQuery = server.where({type: 'led'});
 
  server.observe([ledQuery, pirQuery], function(led, pir){
    pir.streams.motionStatus.on('data', function(m) {
      if (pir.state === 'motion') {
        led.call('turn-on', function() {});
      }
      else {
        led.call('turn-off', function(err) {})
      }
    });
  });
}
