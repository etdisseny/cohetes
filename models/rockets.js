"use strict";
var Rockets = /** @class */ (function () {
    function Rockets(code, thrusters, power) {
        this.code = code;
        this.thrusters = thrusters;
        this.power = power;
    }
    Rockets.prototype.powerTotal = function () {
        var numTotal = 0;
        for (var i = 0; i < this.power.length; i++) {
            numTotal = numTotal + this.power[i];
        }
        return numTotal;
    };
    return Rockets;
}());
