/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="../../src/declarations/DataStore/common/Feature.d.ts" />
/// <reference path="../../src/declarations/enums/CaughtStatus.d.ts" />
/// <reference types="knockout" />
declare class Party implements Feature {
    private multiplier;
    name: string;
    saveKey: string;
    _caughtPokemon: KnockoutObservableArray<PartyPokemon>;
    defaults: {
        caughtPokemon: any[];
    };
    hasMaxLevelPokemon: KnockoutComputed<boolean>;
    _caughtPokemonLookup: KnockoutComputed<Map<number, PartyPokemon>>;
    constructor(multiplier: Multiplier);
    gainPokemonByName(name: PokemonNameType, shiny?: boolean, suppressNotification?: boolean, gender?: number, shadow?: GameConstants.ShadowStatus): void;
    gainPokemonById(id: number, shiny?: boolean, suppressNotification?: boolean, gender?: number, shadow?: GameConstants.ShadowStatus): void;
    gainPokemon(pokemon: PartyPokemon, suppressNotification?: boolean): void;
    removePokemonByName(name: PokemonNameType): void;
    gainExp(exp?: number, level?: number, trainer?: boolean): void;
    /**
     * Calculate the attack of all your Pokémon
     * @param type1
     * @param type2 types of the enemy we're calculating damage against.
     * @returns {number} damage to be done.
     */
    calculatePokemonAttack(type1?: PokemonType, type2?: PokemonType, ignoreRegionMultiplier?: boolean, region?: GameConstants.Region, includeBreeding?: boolean, useBaseAttack?: boolean, overrideWeather?: WeatherType, ignoreLevel?: boolean, includeFlute?: boolean): number;
    calculateOnePokemonAttack(pokemon: PartyPokemon, type1: PokemonType, type2: PokemonType, region: GameConstants.Region, ignoreRegionMultiplier: boolean, includeBreeding: boolean, useBaseAttack: boolean, overrideWeather: WeatherType, ignoreLevel?: boolean, includeFlute?: boolean): number;
    getRegionAttackMultiplier(highestRegion?: any): number;
    calculateEffortPoints(pokemon: PartyPokemon, shiny: boolean, number?: number, ignore?: boolean): number;
    pokemonAttackObservable: KnockoutComputed<number>;
    getPokemon(id: number): PartyPokemon | undefined;
    getPokemonByName(name: PokemonNameType): PartyPokemon | undefined;
    alreadyCaughtPokemonByName(name: PokemonNameType, shiny?: boolean): boolean;
    alreadyCaughtPokemon(id: number, shiny?: boolean, shadow?: boolean): boolean;
    calculateClickAttack(useItem?: boolean): number;
    canAccess(): boolean;
    fromJSON(json: Record<string, any>): void;
    initialize(): void;
    toJSON(): Record<string, any>;
    update(delta: number): void;
    get caughtPokemon(): ReadonlyArray<PartyPokemon>;
}
