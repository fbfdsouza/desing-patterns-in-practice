import IPublisher from "../interfaces/IPublisher";
import ISubscriber from "../interfaces/ISubscriber";

export default class Publisher implements IPublisher {
  subscribers: Array<ISubscriber> = [];

  notifyAll = (): void => {
    this.subscribers.forEach((sub) => this.notify(sub));
  };

  unsubscribeAll(): void {
    console.log("Bye Everybody");
    this.subscribers = [];
  }

  subscribe = (subscriber: ISubscriber): void => {
    this.subscribers.push(subscriber);
  };

  unsubscribe = (subscriber: ISubscriber): void => {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  };

  notify = (subscriber: ISubscriber): void => {
    subscriber.update("You have a new message");
  };
}
