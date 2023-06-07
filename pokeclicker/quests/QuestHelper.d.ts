/// <reference path="questTypes/DefeatPokemonsQuest.d.ts" />
/// <reference path="questTypes/CapturePokemonsQuest.d.ts" />
/// <reference path="questTypes/CapturePokemonTypesQuest.d.ts" />
/// <reference path="questTypes/GainFarmPointsQuest.d.ts" />
/// <reference path="questTypes/GainMoneyQuest.d.ts" />
/// <reference path="questTypes/GainTokensQuest.d.ts" />
/// <reference path="questTypes/GainGemsQuest.d.ts" />
/// <reference path="questTypes/HatchEggsQuest.d.ts" />
/// <reference path="questTypes/MineLayersQuest.d.ts" />
/// <reference path="questTypes/MineItemsQuest.d.ts" />
/// <reference path="questTypes/CatchShiniesQuest.d.ts" />
/// <reference path="questTypes/DefeatGymQuest.d.ts" />
/// <reference path="questTypes/DefeatDungeonQuest.d.ts" />
/// <reference path="questTypes/UsePokeballQuest.d.ts" />
/// <reference path="questTypes/UseOakItemQuest.d.ts" />
/// <reference path="questTypes/HarvestBerriesQuest.d.ts" />
declare class QuestHelper {
    static quests: {
        DefeatPokemonsQuest: typeof DefeatPokemonsQuest;
        CapturePokemonsQuest: typeof CapturePokemonsQuest;
        CapturePokemonTypesQuest: typeof CapturePokemonTypesQuest;
        GainFarmPointsQuest: typeof GainFarmPointsQuest;
        GainMoneyQuest: typeof GainMoneyQuest;
        GainTokensQuest: typeof GainTokensQuest;
        GainGemsQuest: typeof GainGemsQuest;
        HatchEggsQuest: typeof HatchEggsQuest;
        MineLayersQuest: typeof MineLayersQuest;
        MineItemsQuest: typeof MineItemsQuest;
        CatchShiniesQuest: typeof CatchShiniesQuest;
        DefeatGymQuest: typeof DefeatGymQuest;
        DefeatDungeonQuest: typeof DefeatDungeonQuest;
        UsePokeballQuest: typeof UsePokeballQuest;
        UseOakItemQuest: typeof UseOakItemQuest;
        HarvestBerriesQuest: typeof HarvestBerriesQuest;
    };
    static createQuest(questType: string, data?: any[]): Quest;
    static generateQuestList(seed: number, amount?: number, uniqueQuestTypes?: boolean): any[];
    static highestOneShotRoute(region: GameConstants.Region): number;
}
