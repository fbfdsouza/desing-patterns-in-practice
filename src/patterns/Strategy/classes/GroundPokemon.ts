import { IPokemon } from "../interfaces/IPokemon";
export class GroundPokemon implements IPokemon {
  public type;
  constructor() {
    this.type = "ground";
  }

  attack() {
    console.log("Feel the " + this.type + "type power");
  }
}
