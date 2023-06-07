/// <reference path="../Quest.d.ts" />
declare class GainGemsQuest extends Quest implements QuestInterface {
    static maxWeight: number;
    static minWeight: number;
    static weights: Array<Record<string, number>>;
    private type;
    constructor(amount: number, reward: number, type: PokemonType);
    static canComplete(): boolean;
    static typeWeights(): Array<Record<string, number>>;
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
