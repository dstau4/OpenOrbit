const sensor = require('ds18x20');
const rpio = require('rpio');

const isLoaded = sensor.isDriverLoaded();
const ledPin = 36;

rpio.init({mapping: 'physical'});

il = () => {
	if(isLoaded == false) {
		try {
			sensor.loadDriver();
			console.log('ds18x20 driver is loaded');
		} catch(err) {
			console.log(err);
		}
	} else {
		rpio.open(ledPin, rpio.OUTPUT, rpio.LOW);
		rpio.write(ledPin, rpio.HIGH);
	};
};

module.exports = il;
