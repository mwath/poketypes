/// <reference types="knockout" />
declare class MegaStone {
    pokemonId: number;
    private pokemonAttack;
    saveKey: string;
    defaults: Record<string, any>;
    private attackRequired;
    constructor(pokemonId: number, pokemonBaseAttack: number, pokemonAttack: KnockoutObservable<number>);
    getImage(): string;
    getTooltipText(): string;
    canEvolve(): boolean;
}
