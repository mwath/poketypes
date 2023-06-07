/// <reference path="../Quest.d.ts" />
declare class CaptureSpecificPokemonQuest extends Quest implements QuestInterface {
    pokemon: PokemonListData;
    customDescription: string;
    customReward: () => void;
    includeBreeding: boolean;
    constructor(pokemonName: PokemonNameType, description?: string, capturesNeeded?: number, includeBreeding?: boolean, reward?: (() => void) | number, onload?: () => void);
    get description(): string;
    claim(): boolean;
}
