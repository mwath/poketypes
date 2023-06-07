/// <reference types="knockout" />
declare class EvolutionStone extends CaughtIndicatingItem {
    type: GameConstants.StoneType;
    unlockedRegion: GameConstants.Region;
    constructor(type: GameConstants.StoneType, basePrice: number, currency: GameConstants.Currency, displayName: string, unlockedRegion?: GameConstants.Region);
    gain(n: number): void;
    use(amount: number, pokemon?: PokemonNameType): boolean;
    pokemonWithEvolution: KnockoutComputed<PartyPokemon[]>;
    getCaughtStatus: KnockoutComputed<CaughtStatus>;
    getPokerusStatus: KnockoutComputed<GameConstants.Pokerus>;
    init(): boolean;
}
