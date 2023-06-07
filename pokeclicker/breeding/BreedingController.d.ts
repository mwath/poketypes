/// <reference path="../../src/declarations/settings/BreedingFilters.d.ts" />
/// <reference path="../../src/declarations/enums/CaughtStatus.d.ts" />
/// <reference path="../../src/declarations/breeding/EggType.d.ts" />
/// <reference types="knockout" />
declare class BreedingController {
    static spotTypes: string[];
    static initialize(): void;
    static openBreedingModal(): void;
    static getEggImage(egg: Egg): string;
    static getEggCssClass(egg: Egg): string;
    static getEggSpots(pokemonName: PokemonNameType): string;
    static formatSearch(value: string): void;
    static visible(partyPokemon: PartyPokemon): KnockoutComputed<boolean>;
    private static isPureType;
    static displayValue: KnockoutObservable<string>;
    static getDisplayValue(pokemon: PartyPokemon): string;
    static regionalAttackDebuff: KnockoutObservable<number>;
    static calculateRegionalMultiplier(pokemon: PartyPokemon): number;
    static queueSizeLimit: KnockoutObservable<number>;
}
