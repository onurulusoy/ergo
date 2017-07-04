'use strict';
// in this file you can append custom step methods to 'I' object
var https = require('https');
var request = require('sync-request');
const assert = require('assert');

module.exports = function() {
    return actor({

        checkImage(link) {
            var response = request('GET', link);
            assert.strictEqual(response.statusCode, 300);
        }

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.

    });
}
