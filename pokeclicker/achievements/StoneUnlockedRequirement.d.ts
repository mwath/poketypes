/// <reference path="../../src/declarations/requirements/Requirement.d.ts" />
declare class StoneUnlockedRequirement extends Requirement {
    stone: EvolutionStone;
    constructor(stoneType: GameConstants.StoneType, option?: GameConstants.AchievementOption);
    getProgress(): number;
    isCompleted(): boolean;
    hint(): string;
}
