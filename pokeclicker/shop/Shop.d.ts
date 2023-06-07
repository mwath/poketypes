/// <reference path="../towns/TownContent.d.ts" />
/// <reference types="jquery" />
/// <reference types="bootstrap" />
declare class Shop extends TownContent {
    items: Item[];
    name: any;
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    tooltip: string;
    constructor(items: Item[], name?: any, requirements?: (Requirement | OneFromManyRequirement)[]);
    areaStatus(): number;
    get displayName(): any;
    amountInput: () => JQuery<HTMLElement>;
}
