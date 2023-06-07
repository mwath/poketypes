/// <reference types="knockout" />
type GemCost = {
    gemType: PokemonType;
    amount: number;
};
declare class GemDeal {
    gems: GemCost[];
    item: {
        itemType: Item;
        amount: number;
    };
    static list: Record<GameConstants.Region, KnockoutObservableArray<GemDeal>>;
    isVisible(): boolean;
    constructor(gemCosts: GemCost[], item: Item, itemAmount: number);
    static generateDeals(): void;
    private static generateHoennFluteDeals;
    private static generateUnovaFluteDeals;
    private static generateFurfrouDeal;
    private static generateMagikarpJumpDeal;
    static getDeals(region: GameConstants.Region): KnockoutObservableArray<GemDeal>;
    static canUse(region: GameConstants.Region, i: number): boolean;
    static use(region: GameConstants.Region, i: number, tradeTimes?: number): boolean;
    static isFluteDeal(region: GameConstants.Region, i: number): boolean;
}
