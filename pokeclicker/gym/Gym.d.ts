/// <reference path="GymPokemon.d.ts" />
/// <reference path="../pokemons/PokemonFactory.d.ts" />
/// <reference path="../../src/declarations/requirements/OneFromManyRequirement.d.ts" />
/// <reference path="../../src/declarations/enums/Badges.d.ts" />
/// <reference path="../towns/TownContent.d.ts" />
/**
 * Data list that contains all gymLeaders, accessible by townName.
 */
interface gymFlags {
    quest?: boolean;
    achievement?: boolean;
    champion?: boolean;
}
interface optionalGymArgs {
    displayName?: string;
    imageName?: string;
    environment?: GameConstants.Environment;
}
/**
 * Gym class.
 */
declare class Gym extends TownContent {
    leaderName: string;
    town: string;
    private pokemons;
    badgeReward: BadgeEnums;
    moneyReward: number;
    defeatMessage: string;
    rewardFunction: () => void;
    optionalArgs: optionalGymArgs;
    buttonText: string;
    tooltip: string;
    cssClass(): "btn btn-secondary" | "btn btn-success";
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    flags: {
        quest: boolean;
        achievement: boolean;
        champion: boolean;
    };
    areaStatus(): areaStatus;
    clears(): number;
    constructor(leaderName: string, town: string, pokemons: GymPokemon[], badgeReward: BadgeEnums, moneyReward: number, defeatMessage: string, requirements?: Requirement[], rewardFunction?: () => void, { quest, achievement, champion, }?: gymFlags, optionalArgs?: optionalGymArgs);
    private isAchievementsComplete;
    private isThereQuestAtLocation;
    static getLeaderByBadge(badge: BadgeEnums): string;
    firstWinReward(): void;
    get imagePath(): string;
    getPokemonList(): GymPokemon[];
    get imageName(): string;
    get displayName(): string;
}
