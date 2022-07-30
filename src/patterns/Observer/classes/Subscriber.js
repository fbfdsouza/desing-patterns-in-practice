"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(this.name + " got notified " + data);
    }
}
exports.default = Subscriber;
