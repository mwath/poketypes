/// <reference path="./AchievementRequirement.d.ts"/>
declare class DevelopmentRequirement extends AchievementRequirement {
    development: boolean;
    constructor();
    getProgress(): number;
    hint(): string;
}
