/// <reference path="Shop.d.ts" />
declare class GemMasterShop extends Shop {
    name: string;
    constructor(name?: string, requirements?: (Requirement | OneFromManyRequirement)[]);
    onclick(): void;
}
