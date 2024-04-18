"use strict";

/* global console */

import {FlightData} from '../Model/FlightData.js';

class EconomClass extends FlightData{
    constructor(costs) {
        super();
        this.name = 'econom';
        this.balance = costs;
    }
}

export {EconomClass};