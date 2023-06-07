/// <reference types="knockout" />
declare class DreamOrbLoot {
    item: BagItem;
    weight: number;
    constructor(item: BagItem, weight: number);
}
declare class DreamOrb {
    color: string;
    requirement: Requirement;
    items: DreamOrbLoot[];
    amount: KnockoutObservable<number>;
    constructor(color: string, requirement: Requirement, items: DreamOrbLoot[]);
}
declare class DreamOrbController implements Saveable {
    selectedOrb: KnockoutObservable<DreamOrb>;
    opening: KnockoutObservable<boolean>;
    item: KnockoutObservable<DreamOrbLoot>;
    amountSelected: KnockoutObservable<number>;
    amountOpened: KnockoutObservable<number>;
    itemsReceived: KnockoutObservableArray<unknown>;
    constructor();
    orbs: DreamOrb[];
    open(): void;
    saveKey: string;
    defaults: Record<string, any>;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
declare class DreamOrbTownContent extends TownContent {
    constructor();
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
}
