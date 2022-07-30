import { EletricPokemon } from "./classes/EletricPokemon";
import { FirePokemon } from "./classes/FirePokemon";
import { GrassPokemon } from "./classes/GrassPokemon";
import { GroundPokemon } from "./classes/GroundPokemon";
import { PoisonPokemon } from "./classes/PoisonPokemon";
import { WaterPokemon } from "./classes/WaterPokemon";
import { IPokemon } from "./interfaces/IPokemon";

/**
 *
 * IPokemon has been our Strategy
 *
 * Each one of the class which implement the IPokemon interface is an Concrete Strategy
 *
 * This file represents the client context
 *
 * usePokemonAttackWithoutStrategy is a function that will need to be changed if a new pokemon type
 * is included whereas usePokemonAttackStrategy doesn't need to change if a new pokemon type
 * is created
 */

export default () => {
  const usePokemonAttackWithoutStrategy = (type: string) => {
    if (type == "eletric") {
      console.log(`Feel the ${type} type power`);
      return;
    }

    if (type == "fire") {
      console.log(`Feel the ${type} type power`);
      return;
    }

    if (type == "grass") {
      console.log(`Feel the ${type} type power`);
      return;
    }

    if (type == "ground") {
      console.log(`Feel the ${type} type power`);
      return;
    }

    if (type == "poison") {
      console.log(`Feel the ${type} type power`);
      return;
    }

    const errorMessage = `Type ${type} doesnt exist`;
    throw errorMessage;
  };

  /**
   * 
   *logic of the client becomes so much simpler, notice that it depends now on an abstraction
    rathen than a concrete implementation
   */
  const usePokemonAttackStrategy = (pokemon: IPokemon) => {
    pokemon.attack();
  };

  const eletricPokemon = new EletricPokemon();
  const firePokemon = new FirePokemon();
  const grassPokemon = new GrassPokemon();
  const groundPokemon = new GroundPokemon();
  const poisonPokemon = new PoisonPokemon();
  const waterPokemon = new WaterPokemon();

  /**
   * if you run line 67 you'll get an error because usePokemonAttackWithoutStrategy
   * doesn't treat the type water
   */

  console.log("Without Strategy prone to errors \n");

  usePokemonAttackWithoutStrategy(eletricPokemon.type);
  usePokemonAttackWithoutStrategy(firePokemon.type);
  usePokemonAttackWithoutStrategy(grassPokemon.type);
  usePokemonAttackWithoutStrategy(groundPokemon.type);
  usePokemonAttackWithoutStrategy(poisonPokemon.type);
  //   usePokemonAttackWithoutStrategy(waterPokemon.type);

  console.log(
    "With strategy less prone to error, doesn't need to be changed \n"
  );

  usePokemonAttackStrategy(eletricPokemon);
  usePokemonAttackStrategy(firePokemon);
  usePokemonAttackStrategy(grassPokemon);
  usePokemonAttackStrategy(groundPokemon);
  usePokemonAttackStrategy(poisonPokemon);
  usePokemonAttackStrategy(waterPokemon);
};
