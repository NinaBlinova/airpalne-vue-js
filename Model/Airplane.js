// Класс самолета
"use strict";
class Airplane {

    constructor(modelAirplane) {
        this.modelAirplane = modelAirplane;
    }

    get name() {
        return this.modelAirplane;
    }

    set name(name) {
        if (name === '') {
            throw new Error('Имя пользователя не может быть пустым');
        }
        this.modelAirplane = name;
    }
}

export { Airplane };





