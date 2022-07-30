import { IPokemon } from "../interfaces/IPokemon";
export class EletricPokemon implements IPokemon {
  public type;
  constructor() {
    this.type = "eletric";
  }

  attack() {
    console.log("Feel the " + this.type + "type power");
  }
}
