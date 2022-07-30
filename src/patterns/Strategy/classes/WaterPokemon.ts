import { IPokemon } from "../interfaces/IPokemon";
export class WaterPokemon implements IPokemon {
  public type;
  constructor() {
    this.type = "water";
  }

  attack() {
    console.log("Feel the " + this.type + "type power");
  }
}
