/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference types="knockout" />
declare class BattlePokemon implements EnemyPokemonInterface {
    name: PokemonNameType;
    id: number;
    type1: PokemonType;
    type2: PokemonType;
    level: number;
    catchRate: number;
    exp: number;
    reward: Amount;
    shiny: boolean;
    gemReward: number;
    gender: number;
    shadow: GameConstants.ShadowStatus;
    heldItem?: BagItem;
    ep?: number;
    health: KnockoutObservable<number>;
    maxHealth: KnockoutObservable<number>;
    healthPercentage: KnockoutObservable<number>;
    _displayName: KnockoutObservable<string>;
    /**
     * In case you want to manually create a Pokémon instead of generating it from the route number
     * @param name Pokémon name
     * @param id Pokémon
     * @param type1 First type of the Pokémon
     * @param type2 Second type of the Pokémon
     * @param maxHealth max health that the Pokémon can have
     * @param level level is 2 times the current route
     * @param catchRate base chance of catching this Pokémon
     * @param exp base exp reward for defeating this Pokémon
     * @param reward currency reward for defeating this Pokémon
     * @param shiny is a shiny variant
     * @param gender Pokémon gender
     * @param [heldItem] item to possibly gain for defeating this Pokémon
     * @param shadow is shadow or purified
     */
    constructor(name: PokemonNameType, id: number, type1: PokemonType, type2: PokemonType, maxHealth: number, level: number, catchRate: number, exp: number, reward: Amount, shiny: boolean, gemReward: number, gender: number, shadow: GameConstants.ShadowStatus, heldItem?: BagItem, ep?: number);
    isAlive(): boolean;
    /**
     * Lost health without
     * @param damage
     */
    damage(damage: number): void;
    defeat(trainer?: boolean): void;
    get displayName(): string;
}
