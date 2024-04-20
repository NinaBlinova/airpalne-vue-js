"use strict";

/* global console */

class Places {
    // устанавливает следующее место в цепочке
    setNextStep(nextStep) {
        this.nextStep = nextStep;
    }

    //добавляет новое место в цепочку мест
    addPlace(place) {
        // Если firstPlace пустое, то новое место устанавливается как первое.
        if (!this.firstPlace) {
            this.firstPlace = place;
        }
        // В противном случае, метод находит последнее место в цепочке и устанавливает новое место как следующее после него.
        else {
            let currentPlace = this.firstPlace;
            while (currentPlace.nextStep) {
                currentPlace = currentPlace.nextStep;
            }
            currentPlace.setNextStep(place);
        }
    }

    processRequest(flightData) {
        if (flightData.destination === this.destination) {
            console.log(`Airplane with destination ${this.destination} is available.`);
        } else if (this.nextStep) {
            this.nextStep.processRequest(flightData);
            console.log(`Cannot find ${this.destination}. Proceeding...`);
        } else {
            console.log(`Airplane with destination ${this.destination} is not available.`);
        }
    }



}

export {Places};