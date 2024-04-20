"use strict";

/* global console */


class FlightData {
    setNext(account) {
        this.successor = account;
    }

    canPay(amount) {
        return this.balance <= amount;
    }

    pay(amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log(`Paid ${amountToPay} for ${this.name}`);
        } else if (this.successor) {
            console.log(`Cannot pay for ${this.name}. Proceeding...`);
            this.successor.pay(amountToPay);
        } else {
            console.log('None of the classes have enough balance');
        }
    }

}

export {FlightData};