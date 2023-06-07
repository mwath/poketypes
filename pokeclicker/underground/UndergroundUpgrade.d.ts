/// <reference path="../upgrades/Upgrade.d.ts"/>
/// <reference path="../wallet/Amount.d.ts"/>
 declare enum Upgrades {
    'Energy_Max' = 0,
    'Items_Max' = 1,
    'Items_Min' = 2,
    'Energy_Gain' = 3,
    'Energy_Regen_Time' = 4,
    'Daily_Deals_Max' = 5,
    'Bomb_Efficiency' = 6,
    'Survey_Cost' = 7,
    'Survey_Efficiency' = 8,
    'NewYLayer' = 9
}
declare class UndergroundUpgrade extends Upgrade {
    static Upgrades: typeof Upgrades;
    constructor(name: Upgrades, displayName: string, maxLevel: number, costList: Amount[], bonusList: number[], increasing?: boolean);
    canBuy(): boolean;
}
