/// <reference path="../../src/declarations/requirements/AchievementRequirement.d.ts" />
declare class CaughtUniquePokemonsByRegionRequirement extends AchievementRequirement {
    region: GameConstants.Region;
    constructor(region: GameConstants.Region, amount?: number, option?: GameConstants.AchievementOption);
    getProgress(): number;
    hint(): string;
}
