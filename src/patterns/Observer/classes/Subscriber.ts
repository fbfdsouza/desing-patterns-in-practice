import ISubscriber from "../interfaces/ISubscriber";

export default class Subscriber implements ISubscriber {
  constructor(public readonly name: string) {}

  update(data: any): void {
    console.log(this.name + " got notified " + data);
  }
}
