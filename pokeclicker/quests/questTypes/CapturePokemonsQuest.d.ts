/// <reference path="../Quest.d.ts" />
declare class CapturePokemonsQuest extends Quest implements QuestInterface {
    constructor(capturesNeeded: number, reward: number);
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
