import { Publisher, Subscriber } from "./classes";

/**
 * Publisher is in charge of having an array of subscribers, and control that array
 * with adding new subscribers, removing them, updating them with new data
 *
 * All the Publisher methods are defined in the interface IPublisher
 *
 * Subscriber is only responsable for receiving updates
 *
 * The only method the subscriber has to implement (update) is defined in the interface ISubscriber
 */

export default () => {
  const pub = new Publisher();

  const sub1 = new Subscriber("Bruno");
  const sub2 = new Subscriber("Pedro");
  const sub3 = new Subscriber("Daniel");
  const sub4 = new Subscriber("Frederico");
  const sub5 = new Subscriber("Diego");

  pub.subscribe(sub1);
  pub.subscribe(sub2);
  pub.subscribe(sub3);
  pub.subscribe(sub4);
  pub.subscribe(sub5);

  pub.notifyAll();

  console.log("\n Removing Daniel \n");
  pub.unsubscribe(sub3);

  pub.notifyAll();
};
