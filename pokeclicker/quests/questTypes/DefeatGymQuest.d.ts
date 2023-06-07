/// <reference path="../Quest.d.ts" />
declare class DefeatGymQuest extends Quest implements QuestInterface {
    gymTown: string;
    private region;
    constructor(amount: number, reward: number, gymTown: string);
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
