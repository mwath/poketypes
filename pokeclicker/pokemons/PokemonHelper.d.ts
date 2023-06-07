/// <reference path="../../src/scripts/GameConstants.d.ts" />
declare enum PokemonLocationType {
    Route = 0,
    Roaming = 1,
    Dungeon = 2,
    DungeonBoss = 3,
    DungeonChest = 4,
    Evolution = 5,
    Egg = 6,
    Baby = 7,
    Shop = 8,
    Fossil = 9,
    Safari = 10,
    BattleFrontier = 11,
    Wandering = 12,
    Discord = 13,
    QuestLineReward = 14,
    TempBattleReward = 15,
    GymReward = 16,
    DungeonReward = 17
}
declare class PokemonHelper extends TmpPokemonHelper {
    static getPokemonRegionRoutes(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): {};
    static getPokemonDungeons(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<string>;
    static getPokemonBossDungeons(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<string>;
    static getPokemonChestDungeons(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<string>;
    static getPokemonEggs(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<string>;
    static getPokemonShops(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<string>;
    static getPokemonRoamingRegions(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<string>;
    static getPokemonParents(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<string>;
    static getPokemonFossils(pokemonName: PokemonNameType): Array<string>;
    static getPokemonSafariChance(pokemonName: PokemonNameType): Record<GameConstants.Region, Record<number, number>>;
    static getPokemonPrevolution(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): Array<EvoData>;
    static getPokemonLevelPrevolution(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): EvoData;
    static getPokemonStonePrevolution(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): EvoData;
    static getPokemonBattleFrontier(pokemonName: PokemonNameType): Array<number>;
    static getPokemonWandering(pokemonName: PokemonNameType): Array<string>;
    static getPokemonDiscord(pokemonName: PokemonNameType): Array<number>;
    static getPokemonTempBattleReward(pokemonName: PokemonNameType): Array<string>;
    static getPokemonGymReward(pokemonName: PokemonNameType): Array<string>;
    static getPokemonDungeonReward(pokemonName: PokemonNameType): Array<string>;
    static getPokemonQuestLineReward(pokemonName: PokemonNameType): Array<string>;
    static getPokemonLocations: (pokemonName: PokemonNameType, maxRegion?: GameConstants.Region) => {};
    static hasEvableLocations: (pokemonName: PokemonNameType) => any;
}
