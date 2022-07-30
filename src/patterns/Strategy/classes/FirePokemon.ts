import { IPokemon } from "../interfaces/IPokemon";
export class FirePokemon implements IPokemon {
  public type;
  constructor() {
    this.type = "fire";
  }

  attack() {
    console.log("Feel the " + this.type + "type power");
  }
}
