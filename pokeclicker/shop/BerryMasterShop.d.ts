/// <reference path="Shop.d.ts" />
/// <reference types="jquery" />
/// <reference types="bootstrap" />
declare class BerryMasterShop extends Shop {
    location: GameConstants.BerryTraderLocations;
    items: Item[];
    name: string;
    constructor(location: GameConstants.BerryTraderLocations, items: Item[], name?: string, requirements?: (Requirement | OneFromManyRequirement)[]);
    onclick(): void;
    amountInput: () => JQuery<HTMLElement>;
}
