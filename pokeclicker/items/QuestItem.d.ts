/// <reference path="./Item.d.ts"/>
declare class QuestItem extends Item {
    private questlineName;
    private endQuestlineName;
    constructor(name: string, displayName: string, description: string, questlineName: string, endQuestlineName?: string);
    isActive(): boolean;
}
