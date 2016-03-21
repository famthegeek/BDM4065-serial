var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyS0", {
  baudrate: 9600
}, true); // this is the openImmediately flag [default is true]
var isOpen = false;

serialPort.on('open', function(data) {
  console.log('open: ' + data);
});
serialPort.open(function (error) {
  if ( error ) {
    console.log('failed to open: '+error);
  } else {
    console.log('open');
    var data = new Buffer("A60100000004011802B8","hex");
    serialPort.write(data, function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
  }
});
