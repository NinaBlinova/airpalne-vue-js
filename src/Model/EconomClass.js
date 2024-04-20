"use strict";

/* global console */

import {FlightData} from './FlightData.js';

class EconomClass extends FlightData{
    constructor(costs) {
        super();
        this.name = 'econom';
        this.balance = costs;
    }
}

export {EconomClass};