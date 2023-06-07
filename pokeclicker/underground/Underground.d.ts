/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Feature.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="../upgrades/Upgrade.d.ts"/>
/// <reference path="./UndergroundUpgrade.d.ts"/>
 declare class Underground implements Feature {
    name: string;
    saveKey: string;
    upgradeList: Array<Upgrade>;
    defaults: Record<string, any>;
    private _energy;
    static itemSelected: any;
    static energyTick: Observable<number>;
    static counter: number;
    static sortDirection: number;
    static lastPropSort: string;
    static BASE_ENERGY_MAX: number;
    static BASE_ITEMS_MAX: number;
    static BASE_ITEMS_MIN: number;
    static BASE_ENERGY_GAIN: number;
    static BASE_ENERGY_REGEN_TIME: number;
    static BASE_DAILY_DEALS_MAX: number;
    static BASE_BOMB_EFFICIENCY: number;
    static BASE_SURVEY_CHARGE_EFFICIENCY: number;
    static sizeX: number;
    static sizeY: number;
    static CHISEL_ENERGY: number;
    static HAMMER_ENERGY: number;
    static BOMB_ENERGY: number;
    static SURVEY_ENERGY: number;
    static netWorthTooltip: Computed<string>;
    constructor();
    initialize(): void;
    update(): void;
    getMaxEnergy(): number;
    getMaxItems(): number;
    getEnergyGain(): number;
    getEnergyRegenTime(): number;
    getDailyDealsMax(): number;
    getBombEfficiency(): number;
    getSurvey_Cost(): number;
    getSurvey_Efficiency(): number;
    getSizeY(): number;
    getMinItems(): number;
    getUpgrade(upgrade: Upgrades): Upgrade;
    static showMine(): void;
    private static mineSquare;
    static calculateCssClass(i: number, j: number): string;
    static gainMineItem(id: number, num?: number): void;
    static getDiamondNetWorth(): number;
    static getCumulativeValues(): Record<string, {
        cumulativeValue: number;
        imgSrc: string;
    }>;
    gainEnergy(): void;
    gainEnergyThroughItem(item: EnergyRestoreSize): void;
    static sortMineItems(prop: string, flip?: boolean): void;
    static sellMineItem(id: number, amount?: number): void;
    static sellAllMineItems(): void;
    static setSellLockOfMineItem(id: number, sellLocked: boolean): void;
    private static gainProfit;
    openUndergroundModal(): void;
    openUndergroundSellAllModal(): void;
    canAccess(): boolean;
    calculateItemEffect(item: EnergyRestoreSize): number;
    fromJSON(json: Record<string, any>): void;
    toJSON(): Record<string, any>;
    get energy(): number;
    set energy(value: number);
}
