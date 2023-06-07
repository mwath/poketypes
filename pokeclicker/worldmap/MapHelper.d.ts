/// <reference path="../../src/declarations/DataStore/StatisticStore/index.d.ts" />
/// <reference path="../../src/scripts/GameConstants.d.ts" />
declare enum areaStatus {
    locked = 0,
    unlockedUnfinished = 1,
    questAtLocation = 2,
    uncaughtPokemon = 3,
    uncaughtShinyPokemonAndMissingAchievement = 4,
    uncaughtShinyPokemon = 5,
    missingAchievement = 6,
    missingResistant = 7,
    completed = 8
}
declare class MapHelper {
    static moveToRoute: (route: number, region: GameConstants.Region) => void;
    static routeExist(route: number, region: GameConstants.Region): boolean;
    static normalizeRoute(route: number, region: GameConstants.Region, skipIgnoredRoutes?: boolean): number;
    static accessToRoute: (route: number, region: GameConstants.Region) => boolean;
    static getCurrentEnvironment(): GameConstants.Environment;
    static calculateBattleCssClass(): string;
    static calculateRouteCssClass(route: number, region: GameConstants.Region): string;
    static isRouteCurrentLocation(route: number, region: GameConstants.Region): boolean;
    static isTownCurrentLocation(townName: string): boolean;
    static calculateTownCssClass(townName: string): string;
    static accessToTown(townName: string): boolean;
    static moveToTown(townName: string): void;
    static validRoute(route?: number, region?: GameConstants.Region): boolean;
    static openShipModal(): void;
    static ableToTravel(): boolean;
    static travelToNextRegion(): void;
}
