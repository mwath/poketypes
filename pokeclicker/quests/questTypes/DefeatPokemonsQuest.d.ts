/// <reference path="../Quest.d.ts" />
declare class DefeatPokemonsQuest extends Quest implements QuestInterface {
    route: number;
    region: GameConstants.Region;
    constructor(killsNeeded: number, reward: number, route: number, region: GameConstants.Region, customDescription?: string);
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
