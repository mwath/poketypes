/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Saveable.d.ts"/>
declare class Profile implements Saveable {
    static MAX_TRAINER: number;
    static MAX_BACKGROUND: number;
    saveKey: string;
    defaults: Record<string, any>;
    name: KnockoutObservable<string>;
    trainer: KnockoutObservable<number>;
    pokemon: KnockoutObservable<number>;
    pokemonShiny: KnockoutObservable<boolean>;
    pokemonFemale: KnockoutObservable<boolean>;
    background: KnockoutObservable<number>;
    textColor: KnockoutObservable<string>;
    constructor(name?: string, trainer?: number, pokemon?: number, background?: number, textColor?: string);
    static getTrainerCard(name?: string, trainer?: number, pokemon?: number, pokemonShiny?: boolean, pokemonFemale?: boolean, background?: number, textColor?: string, badges?: number, pokedex?: number, seconds?: number, version?: string, challenges?: {}, id?: string, key?: string): Element;
    initialize(): void;
    fromJSON(json: any): void;
    toJSON(): Record<string, any>;
}
