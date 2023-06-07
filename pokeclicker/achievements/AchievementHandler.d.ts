/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="../../src/declarations/achievements/Achievement.d.ts" />
/// <reference types="knockout" />
declare class AchievementHandler {
    static achievementList: Achievement[];
    static navigateIndex: KnockoutObservable<number>;
    static achievementListFiltered: KnockoutObservableArray<Achievement>;
    static numberOfTabs: KnockoutObservable<number>;
    static setNavigateIndex(index: number): void;
    static navigateRight(): void;
    static navigateLeft(): void;
    static isNavigateDirectionDisabled(navigateBackward: boolean): boolean;
    static calculateNumberOfTabs(): void;
    static filter: {
        status: KnockoutObservable<number>;
        type: KnockoutObservable<number>;
        category: KnockoutObservable<string>;
    };
    static getAchievementListWithIndex(): Achievement[];
    static cachedSortedList: Achievement[];
    static achievementSortedList: KnockoutComputed<Achievement[]>;
    static filterAchievementList(retainPage?: boolean): void;
    static compareBy(option: AchievementSortOptions, direction: boolean): (a: Achievement, b: Achievement) => number;
    static preCheckAchievements(): void;
    static checkAchievements(): void;
    static addAchievement(name: string, description: string, property: AchievementRequirement, bonus: number, category?: GameConstants.Region | GameConstants.ExtraAchievementCategories, achievableFunction?: () => boolean | null, stored?: boolean): void;
    static calculateBonus(): void;
    static calculateMaxBonus(): void;
    static achievementBonus(): number;
    static achievementBonusPercent(): string;
    static findByName(name: string): Achievement;
    private static _achievementCategories;
    static getAchievementCategories(): AchievementCategory[];
    static getAchievementCategoryByRegion(region: GameConstants.Region): AchievementCategory;
    static getAchievementCategoryByExtraCategory(category: GameConstants.ExtraAchievementCategories): AchievementCategory;
    static initialize(multiplier: Multiplier, challenges: Challenges): void;
    static load(): void;
}
