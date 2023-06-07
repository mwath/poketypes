/// <reference types="knockout" />
type SafariType = {
    name: PokemonNameType;
    weight: number;
};
declare class SafariPokemonList {
    safariPokemon: SafariType[];
    static list: Record<GameConstants.Region, KnockoutObservableArray<SafariPokemonList>>;
    constructor(safariPokemon: SafariType[]);
    static generateSafariLists(): void;
    private static generateKantoSafariList;
    private static generateKalosSafariList;
}
