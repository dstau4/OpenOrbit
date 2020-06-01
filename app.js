/*
 * Main application to contol the flight computer for a high altitude balloon launch.
 * Author: Dave Stauffer
 * Create Date: 5/30/2020
 */


const rpio = require('rpio');  // npm module to utilize the GPIO pins on the raspberry pi
const ts = require('./utils/ts');  //  Temperature sensor module from ts.js
const ls = require('./utils/ls');  //  Light sensor module from ls.js
const lod = require('./utils/lod');  //  List of Device IDs to list available temperature sensors
const il = require('./utils/il');  //  Testing if the temprature sensor driver is loaded

//  Set GPIO pins
const lsPin = 11;
const ledPin = 36;

//  Initialize the GPIO pin number map
rpio.init({mapping: 'physical'});

//  Record the ID numbers of the temperature sensors detected on the device
lod();

//  Tests to ensure the temperature sensor driver is loaded
il();

//  Takes sensor measurements and records the data
for(let i = 0; i < 5; i++) {
	console.log(ls(lsPin));
	console.log(ts());
	rpio.sleep(1);
};

//  Closes the GPIO pins after execution
rpio.write(ledPin, rpio.LOW);
rpio.close(lsPin);
rpio.close(ledPin);
