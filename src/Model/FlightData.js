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


    youCanPay(amountToPay) {
        let mes = '';
        if (this.canPay(amountToPay)) {
            mes = mes + `Paid ${amountToPay} for ${this.name}`;
            return mes;
        } else if (this.successor) {
            mes = `Cannot pay for ${this.name}. Proceeding...`;
            mes += ' ' + this.successor.youCanPay(amountToPay);
            return mes;
        } else {
            mes = 'None of the classes have enough balance';
            return mes;
        }
    }

}

export {FlightData};