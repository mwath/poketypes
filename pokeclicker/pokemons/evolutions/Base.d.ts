/// <reference path="../../GameConstants.d.ts"/>
/// <reference path="../../requirements/Requirement.d.ts"/>
/// <reference path="../PokemonNameType.d.ts"/>
 declare enum EvoTrigger {
    NONE = 0,
    LEVEL = 1,
    STONE = 2
}
declare interface EvoData {
    basePokemon: PokemonNameType;
    evolvedPokemon: PokemonNameType;
    trigger: EvoTrigger;
    restrictions: Array<Requirement>;
}
 interface DummyEvoData extends EvoData {
}
 interface LevelEvoData extends EvoData {
}
 interface StoneEvoData extends EvoData {
    stone: StoneType;
}
 declare const beforeEvolve: Partial<Record<EvoTrigger, (data: EvoData) => boolean>>;
 declare const Evo: (basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType, trigger: EvoTrigger) => EvoData;
 declare const restrict: <T extends EvoData>(evo: T, ...restrictions: EvoData['restrictions']) => T;
 declare const DummyEvolution: (basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType) => DummyEvoData;
 declare const LevelEvolution: (basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType, level: number) => LevelEvoData;
 declare const StoneEvolution: (basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType, stone: StoneType) => StoneEvoData;
