/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class StatisticRequirement extends Requirement {
    private statistic;
    private hintText;
    private focus;
    constructor(statistic: string | Array<string | number>, requiredAmount: number, hintText?: string, option?: AchievementOption);
    getProgress(): number;
    hint(): string;
}
