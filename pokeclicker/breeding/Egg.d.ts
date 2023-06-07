/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="../../src/declarations/DataStore/common/Saveable.d.ts" />
/// <reference path="../../src/declarations/breeding/EggType.d.ts" />
/// <reference types="knockout" />
declare class Egg implements Saveable {
    type: EggType;
    totalSteps: number;
    pokemon: number;
    shinyChance: number;
    notified: boolean;
    saveKey: string;
    defaults: {};
    steps: KnockoutObservable<number>;
    pokemonType1: PokemonType;
    pokemonType2: PokemonType;
    progress: KnockoutComputed<number>;
    progressText: KnockoutComputed<string>;
    stepsRemaining: KnockoutComputed<number>;
    partyPokemon: KnockoutObservable<PartyPokemon>;
    stepsRequired: number;
    constructor(type?: EggType, totalSteps?: number, pokemon?: number, // MissingNo.
    steps?: number, shinyChance?: number, notified?: boolean);
    private init;
    setPartyPokemon(): void;
    isNone(): boolean;
    updateShinyChance(steps: number, multiplier: any): void;
    addSteps(amount: number, multiplier: Multiplier, helper?: boolean): void;
    canHatch(): boolean;
    hatch(efficiency?: number, helper?: boolean): boolean;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
