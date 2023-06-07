/// <reference path="knockout.d.ts"/>
/// <reference path="../common/Saveable.d.ts"/>
/// <reference path="../../koExtenders.d.ts"/>
/// <reference path="../../pokemons/PokemonList.d.ts"/>
type PokemonID = PokemonList[number]['id'];
type PokemonStats = Record<PokemonID, KnockoutObservable<number>> & {
    highestID: PokemonID;
};
declare class Statistics implements Saveable {
    saveKey: string;
    defaults: Record<string, any>;
    selectedPokemonID: KnockoutObservable<number>;
    selectedBerryID: KnockoutObservable<number>;
    secondsPlayed: KnockoutObservable<number>;
    clickAttacks: KnockoutObservable<number>;
    questsCompleted: KnockoutObservable<number>;
    totalGemsGained: KnockoutObservable<number>;
    totalVitaminsPurchased: KnockoutObservable<number>;
    totalVitaminsObtained: KnockoutObservable<number>;
    totalMoney: KnockoutObservable<number>;
    totalDungeonTokens: KnockoutObservable<number>;
    totalQuestPoints: KnockoutObservable<number>;
    totalDiamonds: KnockoutObservable<number>;
    totalFarmPoints: KnockoutObservable<number>;
    totalBattlePoints: KnockoutObservable<number>;
    totalContestTokens: KnockoutObservable<number>;
    totalPokemonCaptured: KnockoutObservable<number>;
    totalPokemonDefeated: KnockoutObservable<number>;
    totalPokemonEncountered: KnockoutObservable<number>;
    totalPokemonHatched: KnockoutObservable<number>;
    totalShinyPokemonCaptured: KnockoutObservable<number>;
    totalShinyPokemonDefeated: KnockoutObservable<number>;
    totalShinyPokemonEncountered: KnockoutObservable<number>;
    totalShinyPokemonHatched: KnockoutObservable<number>;
    totalMalePokemonCaptured: KnockoutObservable<number>;
    totalMalePokemonDefeated: KnockoutObservable<number>;
    totalMalePokemonEncountered: KnockoutObservable<number>;
    totalMalePokemonHatched: KnockoutObservable<number>;
    totalFemalePokemonCaptured: KnockoutObservable<number>;
    totalFemalePokemonDefeated: KnockoutObservable<number>;
    totalFemalePokemonEncountered: KnockoutObservable<number>;
    totalFemalePokemonHatched: KnockoutObservable<number>;
    totalGenderlessPokemonCaptured: KnockoutObservable<number>;
    totalGenderlessPokemonDefeated: KnockoutObservable<number>;
    totalGenderlessPokemonEncountered: KnockoutObservable<number>;
    totalGenderlessPokemonHatched: KnockoutObservable<number>;
    totalShinyMalePokemonCaptured: KnockoutObservable<number>;
    totalShinyMalePokemonDefeated: KnockoutObservable<number>;
    totalShinyMalePokemonEncountered: KnockoutObservable<number>;
    totalShinyMalePokemonHatched: KnockoutObservable<number>;
    totalShinyFemalePokemonCaptured: KnockoutObservable<number>;
    totalShinyFemalePokemonDefeated: KnockoutObservable<number>;
    totalShinyFemalePokemonEncountered: KnockoutObservable<number>;
    totalShinyFemalePokemonHatched: KnockoutObservable<number>;
    totalShinyGenderlessPokemonCaptured: KnockoutObservable<number>;
    totalShinyGenderlessPokemonDefeated: KnockoutObservable<number>;
    totalShinyGenderlessPokemonEncountered: KnockoutObservable<number>;
    totalShinyGenderlessPokemonHatched: KnockoutObservable<number>;
    undergroundItemsFound: KnockoutObservable<number>;
    undergroundLayersMined: KnockoutObservable<number>;
    undergroundDailyDealTrades: KnockoutObservable<number>;
    totalManualHarvests: KnockoutObservable<number>;
    totalBerriesObtained: KnockoutObservable<number>;
    totalBerriesHarvested: KnockoutObservable<number>;
    totalBerriesReplanted: KnockoutObservable<number>;
    totalBerriesMutated: KnockoutObservable<number>;
    totalMulchesUsed: KnockoutObservable<number>;
    totalShovelsUsed: KnockoutObservable<number>;
    berryDailyDealTrades: KnockoutObservable<number>;
    battleFrontierTotalStagesCompleted: KnockoutObservable<number>;
    battleFrontierHighestStageCompleted: KnockoutObservable<number>;
    safariTimesEntered: KnockoutObservable<number>;
    safariRocksThrown: KnockoutObservable<number>;
    safariBaitThrown: KnockoutObservable<number>;
    safariBallsThrown: KnockoutObservable<number>;
    safariStepsTaken: KnockoutObservable<number>;
    pokeballsUsed: Array<KnockoutObservable<number>>;
    pokeballsPurchased: Array<KnockoutObservable<number>>;
    pokeballsObtained: Array<KnockoutObservable<number>>;
    gemsGained: Array<KnockoutObservable<number>>;
    oakItemUses: Array<KnockoutObservable<number>>;
    berriesHarvested: Array<KnockoutObservable<number>>;
    berriesObtained: KnockoutObservable<number>;
    mulchesUsed: Array<KnockoutObservable<number>>;
    routeKills: Record<string, Record<string, KnockoutObservable<number>>>;
    gymsDefeated: Array<KnockoutObservable<number>>;
    dungeonsCleared: Array<KnockoutObservable<number>>;
    temporaryBattleDefeated: Array<KnockoutObservable<number>>;
    pokemonCaptured: PokemonStats;
    pokemonDefeated: PokemonStats;
    pokemonSeen: PokemonStats;
    pokemonEncountered: PokemonStats;
    pokemonHatched: PokemonStats;
    shinyPokemonCaptured: PokemonStats;
    shinyPokemonDefeated: PokemonStats;
    shinyPokemonEncountered: PokemonStats;
    shinyPokemonHatched: PokemonStats;
    malePokemonCaptured: PokemonStats;
    malePokemonDefeated: PokemonStats;
    malePokemonEncountered: PokemonStats;
    malePokemonHatched: PokemonStats;
    femalePokemonCaptured: PokemonStats;
    femalePokemonDefeated: PokemonStats;
    femalePokemonEncountered: PokemonStats;
    femalePokemonHatched: PokemonStats;
    shinyMalePokemonCaptured: PokemonStats;
    shinyFemalePokemonCaptured: PokemonStats;
    shinyMalePokemonDefeated: PokemonStats;
    shinyFemalePokemonDefeated: PokemonStats;
    shinyMalePokemonEncountered: PokemonStats;
    shinyFemalePokemonEncountered: PokemonStats;
    shinyMalePokemonHatched: PokemonStats;
    shinyFemalePokemonHatched: PokemonStats;
    observables: string[];
    arrayObservables: string[];
    objectObservables: string[];
    autogeneratedObservables: string[];
    constructor();
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
 {};
