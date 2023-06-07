/// <reference path="knockout.d.ts"/>
/// <reference path="./logbook/LogBook.d.ts"/>
/// <reference path="./DataStore/BadgeCase.d.ts"/>
/// <reference path="./profile/Profile.d.ts"/>
/// <reference path="./DataStore/StatisticStore.d.ts"/>
/// <reference path="./challenges/Challenges.d.ts"/>
/// <reference path="./multiplier/Multiplier.d.ts"/>
/// <reference path="./GameConstants.d.ts"/>
/// <reference path="./wallet/Wallet.d.ts"/>
/// <reference path="./party/Category.d.ts"/>
/// <reference path="./oakItems/OakItems.d.ts"/>
/// <reference path="./oakItems/OakItemLoadouts.d.ts"/>
/// <reference path="./saveReminder/SaveReminder.d.ts"/>
/// <reference path="./translation/Translation.d.ts"/>
/// <reference path="./achievements/Achievement.d.ts"/>
/// <reference path="./achievements/AchievementSortOptions.d.ts"/>
/// <reference path="./achievements/AchievementCategory.d.ts"/>
/// <reference path="./keyItems/KeyItems.d.ts"/>
/// <reference path="./pokeballs/PokeballFilters.d.ts"/>
type TmpGameType = {
    gameState: GameState;
    update: any;
    profile: Profile;
    breeding: any;
    pokeballs: any;
    pokeballFilters: PokeballFilters;
    wallet: Wallet;
    keyItems: KeyItems;
    badgeCase: BadgeCase;
    oakItems: OakItems;
    oakItemLoadouts: OakItemLoadouts;
    categories: PokemonCategories;
    party: any;
    gems: any;
    underground: any;
    farming: any;
    logbook: LogBook;
    redeemableCodes: any;
    statistics: Statistics;
    quests: any;
    specialEvents: any;
    discord: any;
    achievementTracker: any;
    challenges: Challenges;
    multiplier: Multiplier;
    saveReminder: SaveReminder;
};
type TmpAppType = {
    game: TmpGameType;
    isUsingClient: boolean;
    translation: Translate;
    start: () => void;
};
type TmpSaveType = {
    key: string;
};
type TmpMapHelperType = {
    moveToRoute: (route: number, region: Region) => void;
    routeExist: (route: number, region: Region) => boolean;
    normalizeRoute: (route: number, region: Region) => number;
    accessToRoute: (route: number, region: Region) => boolean;
    getCurrentEnvironment: () => Environment;
    calculateBattleCssClass: () => string;
    calculateRouteCssClass: (route: number, region: Region) => string;
    calculateTownCssClass: (townName: string) => string;
    accessToTown: (townName: string) => boolean;
    moveToTown: (townName: string) => void;
    validRoute: (route: number, region: Region) => boolean;
    openShipModal: () => void;
    ableToTravel: () => boolean;
    travelToNextRegion: () => void;
};
type TmpDungeonRunner = {
    dungeon: {
        name: string;
    };
};
type TmpGym = {
    town: string;
};
type TmpGymRunner = {
    gymObservable: () => TmpGym;
};
type TmpAchievementHandler = {
    achievementList: Achievement[];
    navigateIndex: KnockoutObservable<number>;
    achievementListFiltered: KnockoutObservableArray<Achievement>;
    numberOfTabs: KnockoutObservable<number>;
    setNavigateIndex: (index: number) => void;
    navigateRight: () => void;
    navigateLeft: () => void;
    isNavigateDirectionDisabled: (navigateBackward: boolean) => boolean;
    calculateNumberOfTabs: () => void;
    filter: Record<string, any>;
    getAchievementListWithIndex: () => void;
    cachedSortedList: Achievement[];
    achievementSortedList: KnockoutComputed<any[]>;
    filterAchievementList: (retainPage: boolean) => void;
    compareBy: (option: AchievementSortOptions, direction: boolean) => (a: Achievement, b: Achievement) => number;
    preCheckAchievements: () => void;
    checkAchievements: () => void;
    addAchievement: (...rest: any[]) => void;
    calculateBonus: () => void;
    calculateMaxBonus: () => void;
    achievementBonus: () => number;
    achievementBonusPercent: () => string;
    findByName: (name: string) => Achievement;
    _achievementCategories: AchievementCategory[];
    getAchievementCategories: () => AchievementCategory[];
    getAchievementCategoryByRegion: (region: Region) => AchievementCategory;
    getAchievementCategoryByExtraCategory: (category: ExtraAchievementCategories) => AchievementCategory;
    initialize: (multiplier: Multiplier, challenges: Challenges) => void;
    load: () => void;
};
declare global {
    const App: TmpAppType;
    const player: any;
    const Save: TmpSaveType;
    const MapHelper: TmpMapHelperType;
    const DungeonRunner: TmpDungeonRunner;
    const GymRunner: TmpGymRunner;
    const AchievementHandler: TmpAchievementHandler;
}

