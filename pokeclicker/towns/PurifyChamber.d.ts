/// <reference types="knockout" />
declare class PurifyChamberTownContent extends TownContent {
    constructor();
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
}
declare class PurifyChamber implements Saveable {
    static requirements: DevelopmentRequirement;
    selectedPokemon: KnockoutObservable<PartyPokemon>;
    currentFlow: KnockoutObservable<number>;
    flowNeeded: KnockoutComputed<number>;
    constructor();
    canPurify(): boolean;
    purify(): void;
    gainFlow(exp: number): void;
    saveKey: string;
    defaults: Record<string, any>;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
