// Класс строителя самолета
"use strict";
import {Airplane} from '../Model/Airplane.js';

class BuilderAirplane {

    constructor(modelAirplane) {
        this.airplane = new Airplane(modelAirplane);
    }

    setEngines(engines) {
        this.airplane.engines = engines;
        return this;
    }

    setWing(wings) {
        this.airplane.wings = wings;
        return this;
    }

    setTail(tail) {
        this.airplane.tail = tail;
        return this;
    }

    setFuselage(fuselage) {
        this.airplane.fuselage = fuselage;
        return this;
    }

    setChassis(chassis) {
        this.airplane.chassis = chassis;
        return this;
    }

    setWindows(windows) {
        this.airplane.windows = windows;
        return this;
    }

    Places() {
        this.airplane.places = this.airplane.floors * this.airplane.windows * 3;
        return this;
    }

    setDoors(doors) {
        this.airplane.doors = doors;
        return this;
    }

    setFloors(floors) {
        this.airplane.floors = floors;
        return this;
    }

    addClass(className) {
        this.airplane.className = className;
        return this;
    }

    setDestanation(destanation) {
        this.airplane.destanation = destanation;
        return this;
    }

    build() {
        return this.airplane;
    }
}

export {BuilderAirplane};