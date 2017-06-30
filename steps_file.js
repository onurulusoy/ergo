'use strict';
// in this file you can append custom step methods to 'I' object
var https = require('https');
var request = require('sync-request');
const assert = require('assert');
//var $ = require("jquery");



module.exports = function() {
    return actor({

        checkImage() {
            var res = request('GET', 'http://res.cloudinary.com/etkinlikcim/image/upload/c_crop,h_810,w_545,g_center/l_watermark-etkinlikcim,y_100,w_0.5,fl_relative,g_south/v1475074824/live/vendorImages/soho-house/cover/1475074823136.jpg');
            assert.strictEqual(res.statusCode, 200);
        },

        tryThat() {
            this.amOnPage("http://www.github.com");
        },

        loginAS01() {
            this.amOnPage('https://47.168.105.72:8443/portal/j_security_check');
            this.fillField('j_username', 'admin');
            this.fillField('j_password', 'admin');
            this.click('login');
        },

        getClassNameFromText() {
            var className = this.document.$("span:contains('Services')").attr("class");

            console.log(className);
        },

        asdf() {
            var className = $("span:contains('Services')").getAttribute();
            this.click(selector);
        },

        test() {
            this._locateClickable('Services');
        }

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.

    });
}