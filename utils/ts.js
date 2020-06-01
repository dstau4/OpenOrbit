const fs = require('fs');
const sensor = require('ds18x20');


ts = () => {
	let temp = (sensor.get('28-0000083d8124')*9/5)+32;
	fs.appendFile('./data/temp.txt', temp + '\n', function(err) {
        	if(err) return console.log(err);
	});
	return temp;
};

module.exports = ts;
