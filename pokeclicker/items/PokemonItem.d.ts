declare class PokemonItem extends CaughtIndicatingItem {
    ignoreEV: boolean;
    type: PokemonNameType;
    private _translatedOrDisplayName;
    constructor(pokemon: PokemonNameType, basePrice: number, currency?: GameConstants.Currency, ignoreEV?: boolean, displayName?: string);
    gain(amt: number): void;
    getCaughtStatus(): CaughtStatus;
    getPokerusStatus(): GameConstants.Pokerus;
    get image(): string;
    get displayName(): string;
}
