import { IPokemon } from "../interfaces/IPokemon";
export class PoisonPokemon implements IPokemon {
  public type;
  constructor() {
    this.type = "poison";
  }

  attack() {
    console.log("Feel the " + this.type + "type power");
  }
}
