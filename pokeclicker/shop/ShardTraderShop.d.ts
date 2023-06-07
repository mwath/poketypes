/// <reference path="Shop.d.ts" />
declare class ShardTraderShop extends Shop {
    location: GameConstants.ShardTraderLocations;
    name: string;
    hidePlayerInventory: boolean;
    currencyName: string;
    constructor(location: GameConstants.ShardTraderLocations, name?: string, hidePlayerInventory?: boolean, currencyName?: string);
    onclick(): void;
}
