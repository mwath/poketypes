/// <reference path="../Quest.d.ts" />
declare class UseOakItemQuest extends Quest implements QuestInterface {
    private item;
    constructor(amount: number, reward: number, item: OakItemType);
    static canComplete(): boolean;
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
