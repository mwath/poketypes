/// <reference path="../Quest.d.ts" />
declare class CatchShiniesQuest extends Quest implements QuestInterface {
    constructor(amount: number, reward: number);
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
