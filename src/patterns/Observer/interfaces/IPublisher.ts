import ISubscriber from "./ISubscriber";

export default interface IPublisher {
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  unsubscribeAll(): void;
  notify(subscriber: ISubscriber): void;
  notifyAll(): void;
}
