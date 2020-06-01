const fs = require('fs');
const rpio = require('rpio');

rpio.init({mapping: 'physical'});

ls = (pin) => {
	let count = 0;
	rpio.open(pin, rpio.OUTPUT, rpio.LOW);
	rpio.msleep(200);
	rpio.mode(pin, rpio.INPUT);
	while(rpio.read(pin) == 0) {
		count++; // Darker registers a higher number.
	};
	fs.appendFile('./data/light.txt', count + '\n', function(err) {
		if(err) return console.log(err);
	});
	return count;
};

module.exports = ls
