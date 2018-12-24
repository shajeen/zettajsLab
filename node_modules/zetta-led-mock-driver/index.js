var util = require('util');
var Device = require('zetta-device');

var LED = module.exports = function(led) {
  this.led = led;
  Device.call(this);
};
util.inherits(LED, Device);

LED.prototype.init = function(config) {
  config
    .type('led')
    .state('off')
    .name(this.led)
    .when('off', { allow: ['turn-on'] })
    .when('on', { allow: ['turn-off'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff);
};

LED.prototype.turnOn = function(cb) {
  this.state = 'on';
  cb();
};

LED.prototype.turnOff = function(cb) {
  this.state = 'off';
  cb();
};
