/// <reference path="../src/declarations/DataStore/BadgeCase.d.ts" />
/// <reference path="../src/declarations/GameHelper.d.ts" />
/// <reference path="../src/declarations/party/Category.d.ts" />
/// <reference path="../src/declarations/effectEngine/effectEngineRunner.d.ts" />
/// <reference path="../src/declarations/items/ItemHandler.d.ts" />
/**
 * Main game class.
 */
declare class Game {
    update: Update;
    profile: Profile;
    breeding: Breeding;
    pokeballs: Pokeballs;
    pokeballFilters: PokeballFilters;
    wallet: Wallet;
    keyItems: KeyItems;
    badgeCase: BadgeCase;
    oakItems: OakItems;
    oakItemLoadouts: OakItemLoadouts;
    categories: PokemonCategories;
    party: Party;
    gems: Gems;
    underground: Underground;
    farming: Farming;
    logbook: LogBook;
    redeemableCodes: RedeemableCodes;
    statistics: Statistics;
    quests: Quests;
    specialEvents: SpecialEvents;
    discord: Discord;
    achievementTracker: AchievementTracker;
    challenges: Challenges;
    battleFrontier: BattleFrontier;
    multiplier: Multiplier;
    saveReminder: SaveReminder;
    battleCafe: BattleCafeSaveObject;
    dreamOrbController: DreamOrbController;
    purifyChamber: PurifyChamber;
    weatherApp: WeatherApp;
    frameRequest: any;
    static achievementCounter: number;
    private _gameState;
    private worker;
    /**
     * TODO(@Isha) pass all features through the constructor
     */
    constructor(update: Update, profile: Profile, breeding: Breeding, pokeballs: Pokeballs, pokeballFilters: PokeballFilters, wallet: Wallet, keyItems: KeyItems, badgeCase: BadgeCase, oakItems: OakItems, oakItemLoadouts: OakItemLoadouts, categories: PokemonCategories, party: Party, gems: Gems, underground: Underground, farming: Farming, logbook: LogBook, redeemableCodes: RedeemableCodes, statistics: Statistics, quests: Quests, specialEvents: SpecialEvents, discord: Discord, achievementTracker: AchievementTracker, challenges: Challenges, battleFrontier: BattleFrontier, multiplier: Multiplier, saveReminder: SaveReminder, battleCafe: BattleCafeSaveObject, dreamOrbController: DreamOrbController, purifyChamber: PurifyChamber, weatherApp: WeatherApp);
    load(): void;
    initialize(): void;
    computeOfflineEarnings(): void;
    checkAndFix(): void;
    start(): void;
    stop(): void;
    gameTick(): void;
    save(): void;
    get gameState(): GameConstants.GameState;
    set gameState(value: GameConstants.GameState);
}
