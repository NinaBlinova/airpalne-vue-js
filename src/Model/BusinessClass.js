"use strict";

/* global console */

import {FlightData} from './FlightData.js';

class BusinessClass extends FlightData{
    constructor(costs) {
        super();
        this.name = 'business';
        this.balance = costs;
    }
}

export {BusinessClass};