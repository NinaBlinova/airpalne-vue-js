// Использование паттерна Builder для создания самолета
"use strict";
/* global console */
import {BuilderAirplane} from '../Model/BuilderAirplane.js';
import {BusinessClass} from '../Model/BusinessClass.js';
import {ComfortClass} from '../Model/ComfortClass.js';
import {EconomClass} from '../Model/EconomClass.js';

const business = new BusinessClass(1000);
const comfort = new ComfortClass(800);
const econom = new EconomClass(300);


// реализвоать сайт, с помощью которого можно реализовать покупку авиабилетов и просмаривать характеристики самолета


let Airplane = new BuilderAirplane('Boeing 747');
let airplane = Airplane.setEngines(4)
    .setWing(2)
    .setTail(1)
    .setFuselage(1)
    .setChassis(4)
    .setWindows(20)
    .setDoors(4)
    .setFloors(2)
    .Places()
    .addClass(business.name)
    .setDestanation('New York')
    .build();

let Airplane2 = new BuilderAirplane('Il-2');
let airplane2 = Airplane2.setEngines(4)
    .setWing(2)
    .setTail(1)
    .setFuselage(1)
    .setChassis(4)
    .setWindows(20)
    .setDoors(4)
    .setFloors(2)
    .Places()
    .addClass(comfort.name)
    .setDestanation('Moskow')
    .build();

let Airplane3 = new BuilderAirplane('ParisAirplanes');
let airplane3 = Airplane3.setEngines(4)
    .setWing(2)
    .setTail(1)
    .setFuselage(1)
    .setChassis(4)
    .setWindows(20)
    .setDoors(4)
    .setFloors(2)
    .Places()
    .addClass(econom.name)
    .setDestanation('Paris')
    .build();


console.log(airplane);
console.log(airplane2);
console.log(airplane3);


business.setNext(comfort);
comfort.setNext(econom);

business.pay(859);

