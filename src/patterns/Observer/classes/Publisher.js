"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Publisher {
    constructor() {
        this.subscribers = [];
        this.notifyAll = () => {
            this.subscribers.forEach((sub) => this.notify(sub));
        };
        this.subscribe = (subscriber) => {
            this.subscribers.push(subscriber);
        };
        this.unsubscribe = (subscriber) => {
            this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
        };
        this.notify = (subscriber) => {
            subscriber.update("You have a new message");
        };
    }
    unsubscribeAll() {
        console.log("Bye Everybody");
        this.subscribers = [];
    }
}
exports.default = Publisher;
