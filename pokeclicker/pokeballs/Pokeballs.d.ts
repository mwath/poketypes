/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="Pokeball.d.ts" />
/// <reference types="knockout" />
declare class Pokeballs implements Feature {
    name: string;
    saveKey: string;
    defaults: {
        alreadyCaughtSelection: GameConstants.Pokeball;
        alreadyCaughtContagiousSelection: GameConstants.Pokeball;
        alreadyCaughtShinySelection: GameConstants.Pokeball;
        notCaughtSelection: GameConstants.Pokeball;
        notCaughtShinySelection: GameConstants.Pokeball;
    };
    pokeballs: Pokeball[];
    selectedSelection: KnockoutObservable<KnockoutObservable<GameConstants.Pokeball>>;
    selectedTitle: KnockoutObservable<string>;
    constructor();
    initialize(): void;
    /**
     * Checks the players preferences to see what pokéball needs to be used on the next throw.
     * Checks from the players pref to the most basic ball to see if the player has any.
     * @param id the pokemon we are trying to catch.
     * @param isShiny if the Pokémon is shiny.
     * @returns {GameConstants.Pokeball} pokéball to use.
     */
    calculatePokeballToUse(id: number, isShiny: boolean, isShadow: boolean): GameConstants.Pokeball;
    calculateCatchTime(ball: GameConstants.Pokeball): number;
    gainPokeballs(ball: GameConstants.Pokeball, amount: number, purchase?: boolean): void;
    usePokeball(ball: GameConstants.Pokeball): void;
    getCatchBonus(ball: GameConstants.Pokeball): number;
    getBallQuantity(ball: GameConstants.Pokeball): number;
    getEPBonus(ball: GameConstants.Pokeball): number;
    canAccess(): boolean;
    fromJSON(json: Record<string, any>): void;
    toJSON(): Record<string, any>;
    update(delta: number): void;
}
