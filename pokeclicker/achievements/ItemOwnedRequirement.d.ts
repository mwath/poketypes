/// <reference path="../../src/declarations/requirements/Requirement.d.ts" />
declare class ItemOwnedRequirement extends Requirement {
    itemName: string;
    constructor(itemName: string, value?: number, option?: GameConstants.AchievementOption);
    getProgress(): number;
    hint(): string;
}
