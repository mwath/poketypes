/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class QuestLineRequirement extends Requirement {
    private questLineName;
    constructor(questLineName: string, option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
