/// <reference path="../Quest.d.ts" />
declare class CapturePokemonTypesQuest extends Quest implements QuestInterface {
    type: PokemonType;
    static maxWeight: number;
    static minWeight: number;
    static weights: Array<Record<string, number>>;
    constructor(capturesNeeded: number, reward: number, type: PokemonType);
    static typeWeights(): Array<Record<string, number>>;
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
