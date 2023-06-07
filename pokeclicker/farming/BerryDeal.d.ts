/// <reference types="knockout" />
declare class BerryDeal {
    berries: {
        berryType: BerryType;
        amount: number;
    }[];
    item: {
        itemType: Item | UndergroundItem;
        amount: number;
    };
    static list: Record<GameConstants.BerryTraderLocations, KnockoutObservableArray<BerryDeal>>;
    constructor(berry: BerryType[], berryAmount: number[], item: Item | UndergroundItem, itemAmount: number);
    static getDeals(town: GameConstants.BerryTraderLocations): KnockoutObservableArray<BerryDeal>;
    private static randomBerry;
    private static randomBattleItem;
    private static randomEvoItem;
    private static randomUndergroundItem;
    private static randomPokeballDeal;
    static generateDeals(date: Date): void;
    private static generateGoldenrodDeals;
    private static generateMauvilleDeals;
    private static generateHearthomeDeals;
    private static generatePinkanDeals;
    static canUse(town: GameConstants.BerryTraderLocations, i: number): boolean;
    static use(town: GameConstants.BerryTraderLocations, i: number, tradeTimes?: number): void;
}
