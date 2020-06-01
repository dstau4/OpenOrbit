const sensor = require('ds18x20');
const fs = require('fs');

lod = () => {
	let listOfDeviceIDs = sensor.list();
	// console.log(listOfDeviceIDs);
	fs.appendFile('./data/lod.txt', listOfDeviceIDs + '\n', function(err) {
		if(err) return console.log(err);
	});
};

module.exports = lod;
