import ISubscriber from "./ISubscriber";

export default interface IPublisher {
  subscribers: Array<ISubscriber>;
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  unsubscribeAll(): void;
  notify(subscriber: ISubscriber): void;
  notifyAll(): void;
}
