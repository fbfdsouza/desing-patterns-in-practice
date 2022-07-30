import { IPokemon } from "../interfaces/IPokemon";
export class GrassPokemon implements IPokemon {
  public type;
  constructor() {
    this.type = "grass";
  }

  attack() {
    console.log("Feel the " + this.type + "type power");
  }
}
