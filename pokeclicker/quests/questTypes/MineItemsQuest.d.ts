/// <reference path="../Quest.d.ts" />
declare class MineItemsQuest extends Quest implements QuestInterface {
    constructor(amount: number, reward: number);
    static canComplete(): boolean;
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
