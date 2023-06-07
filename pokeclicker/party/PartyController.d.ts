/// <reference types="knockout" />
declare const modalUtils: {
    observableState: typeof observableState;
};
declare class PartyController {
    static getCaughtStatusByName(name: PokemonNameType): CaughtStatus;
    static getCaughtStatus(id: number): CaughtStatus;
    static getPokerusStatusByName(name: PokemonNameType): GameConstants.Pokerus;
    static getPokerusStatus(id: number): GameConstants.Pokerus;
    static getPokemonStoneEvos(partyPokemon: PartyPokemon | undefined, evoType: GameConstants.StoneType): EvoData[];
    static getPokemonsWithEvolution(evoType: GameConstants.StoneType): PartyPokemon[];
    static getStoneEvolutions<T>(id: number, getStatus: (evo: EvoData) => T, evoType?: GameConstants.StoneType): {
        status: T;
        locked: boolean;
        lockHint: string;
    }[];
    static getStoneEvolutionsCaughtData(id: number, evoType?: GameConstants.StoneType): {
        status: CaughtStatus;
        locked: boolean;
        lockHint: string;
    }[];
    static getStoneEvolutionsPokerusData(id: number, evoType?: GameConstants.StoneType): {
        status: GameConstants.Pokerus;
        locked: boolean;
        lockHint: string;
    }[];
    static hasMultipleStoneEvolutionsAvailable(pokemonName: PokemonNameType, evoType: GameConstants.StoneType): boolean;
    static removeVitaminFromParty(vitamin: GameConstants.VitaminType, amount?: number, shouldConfirm?: boolean): Promise<void>;
    static removeAllVitaminsFromParty(shouldConfirm?: boolean): Promise<void>;
    static getMaxLevelPokemonList(): Array<PartyPokemon>;
    static getSortedList: KnockoutComputed<PartyPokemon[]>;
    private static hatcherySortedList;
    static getHatcherySortedList: KnockoutComputed<any[]>;
    private static vitaminSortedList;
    static getvitaminSortedList: KnockoutComputed<any[]>;
    private static heldItemSortedList;
    static getHeldItemSortedList: KnockoutComputed<any[]>;
    private static pokemonsWithHeldItemSortedList;
    static getPokemonsWithHeldItemSortedList: KnockoutComputed<any[]>;
    static calculateRegionalMultiplier(pokemon: PartyPokemon, region: number): number;
    static compareBy(option: SortOptions, direction: boolean, region?: number): (a: PartyPokemon, b: PartyPokemon) => number;
}
