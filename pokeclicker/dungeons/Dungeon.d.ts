/// <reference path="../../src/declarations/enums/Badges.d.ts" />
/// <reference path="DungeonBossPokemon.d.ts" />
/// <reference path="../../src/declarations/requirements/GymBadgeRequirement.d.ts" />
/// <reference path="../../src/declarations/requirements/MultiRequirement.d.ts" />
/// <reference path="../../src/declarations/requirements/SeededDateRequirement.d.ts" />
/// <reference path="../../src/declarations/requirements/DayOfWeekRequirement.d.ts" />
/// <reference path="../../src/declarations/requirements/ObtainedPokemonRequirement.d.ts" />
/// <reference path="../../src/declarations/utilities/SeededDateRand.d.ts" />
/// <reference path="DungeonTrainer.d.ts" />
/// <reference path="../gym/GymPokemon.d.ts" />
interface EnemyOptions {
    weight?: number;
    requirement?: MultiRequirement | OneFromManyRequirement | Requirement;
    reward?: Amount;
    hide?: boolean;
}
interface DetailedPokemon {
    pokemon: PokemonNameType;
    options: EnemyOptions;
}
interface Loot {
    loot: ItemNameType | PokemonNameType | UndergroundItemNameType | BerryNameType;
    weight?: number;
    requirement?: MultiRequirement | OneFromManyRequirement | Requirement;
    amount?: number;
    ignoreDebuff?: boolean;
}
type LootTier = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
type LootTable = Partial<Record<LootTier, Loot[]>>;
declare const baseLootTierChance: Record<LootTier, number>;
declare const nerfedLootTierChance: Record<LootTier, number>;
declare const lootRedistribution: Record<LootTier, number>;
declare const lootRedistibuteAmount = 0.15;
type Enemy = PokemonNameType | DetailedPokemon | DungeonTrainer;
type Boss = DungeonBossPokemon | DungeonTrainer;
interface EncounterInfo {
    image: string;
    shiny: boolean;
    hide: boolean;
    uncaught: boolean;
    locked: boolean;
    lockMessage: string;
}
declare const DungeonGainGymBadge: (gym: Gym, badge: BadgeEnums) => void;
/**
 * Gym class.
 */
interface optionalDungeonParameters {
    dungeonRegionalDifficulty?: GameConstants.Region;
}
declare class Dungeon {
    name: string;
    enemyList: Enemy[];
    lootTable: LootTable;
    baseHealth: number;
    bossList: Boss[];
    tokenCost: number;
    difficultyRoute: number;
    rewardFunction: () => void;
    optionalParameters: optionalDungeonParameters;
    constructor(name: string, enemyList: Enemy[], lootTable: LootTable, baseHealth: number, bossList: Boss[], tokenCost: number, difficultyRoute: number, // Closest route in terms of difficulty, used for egg steps, dungeon tokens etc.
    rewardFunction?: () => void, optionalParameters?: optionalDungeonParameters);
    isUnlocked(): boolean;
    /**
     * Finds the possible Bosses in the dungeon
     * @param includeTrainers Whether to include Trainer Bosses. Defaults to true
     * @param ignoreRequirement Whether to check if requirements are met. Defaults to false
     */
    availableBosses(includeTrainers?: boolean, ignoreRequirement?: boolean): Boss[];
    /**
     * Retreives the weights for all the possible bosses
     */
    get bossWeightList(): number[];
    /**
     * Returns the possible enemies in the dungeon.
     * @param ignoreRequirement Whether to check if requirements are met. Defaults to false
     */
    availableMinions(ignoreRequirement?: boolean): Enemy[];
    /**
     * Gets all available Pokemon in the dungeon
     */
    allAvailablePokemon(): PokemonNameType[];
    getCaughtMimics(): PokemonNameType[];
    getRandomLootTier(clears: number, debuffed?: boolean): LootTier;
    getRandomLoot(tier: LootTier, onlyDebuffable?: boolean): Loot;
    getLootTierWeights(clears: number, debuffed: boolean): Record<LootTier, number>;
    /**
     * Retrieves the weights for all the possible enemies
     */
    get weightList(): number[];
    /**
     * Returns the possible minion Pokemon in the dungeon.
     * Filters out Trainers and collapses DetailedPokemon
     */
    get pokemonList(): PokemonNameType[];
    /**
     * Returns the possible boss Pokemon in the dungeon.
     * Filters out Trainers
     */
    get bossPokemonList(): PokemonNameType[];
    /**
     * Gets all possible Pokemon in the dungeon
     */
    get allPokemon(): PokemonNameType[];
    /**
     * Gets all non-boss Pokemon encounters in the dungeon
     * Used for generating the dungeon encounter list view
     */
    get normalEncounterList(): EncounterInfo[];
    /**
     * Gets all boss encounters in the dungeon
     * Used for generating the dungeon encounter list view
     */
    get bossEncounterList(): EncounterInfo[];
}
/**
 * Data list that contains all dungeons, accessible by name.
 */
declare const dungeonList: {
    [dungeonName: string]: Dungeon;
};
declare const TanobyUnownList: string[];
declare const AlphUnownList: string[];
declare const SolaceonUnownList: string[];
