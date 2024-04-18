"use strict";

/* global console */

import {FlightData} from '../Model/FlightData.js';

class ComfortClass extends FlightData{
    constructor(costs) {
        super();
        this.name = 'comfort';
        this.balance = costs;
    }
}

export {ComfortClass};