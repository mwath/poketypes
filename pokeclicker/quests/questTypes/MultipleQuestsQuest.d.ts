/// <reference path="../Quest.d.ts" />
declare class MultipleQuestsQuest extends Quest implements QuestInterface {
    quests: Quest[];
    customReward?: () => void;
    constructor(quests: Quest[], description: string, reward?: number | (() => void), questCompletedRequired?: number);
    begin(): void;
    claim(): boolean;
}
