var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyS0", {
  baudrate: 9600
}, true); // this is the openImmediately flag [default is true]
var isOpen = false;

serialPort.on('open', function(data) {
  console.log('open: ' + data);
  isOpen = true;
});


var turnOff = function() {
  if(isOpen){
    var data = new Buffer("A60100000004011801BB","hex");
    serialPort.write(data, function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
  }
}

var turnOn = function() {
  if(isOpen){
    var data = new Buffer("A60100000004011802B8","hex");
    serialPort.write(data, function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
  }
}
setTimeout(turnOff,2000);
setTimeout(turnOn,10000);
