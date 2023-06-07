/// <reference types="knockout" />
declare class BattleCafe extends TownContent {
    constructor();
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
declare class BattleCafeSaveObject implements Saveable {
    saveKey: string;
    defaults: Record<string, any>;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
declare class BattleCafeController {
    static selectedSweet: KnockoutObservable<GameConstants.AlcremieSweet>;
    static baseDailySpins: number;
    static spinsLeft: KnockoutObservable<number>;
    static isSpinning: KnockoutObservable<boolean>;
    static clockwise: KnockoutObservable<boolean>;
    static spinsPerDay(): number;
    static spin(clockwise: boolean): void;
    private static unlockAlcremie;
    private static canSpin;
    static canBuySweet(sweet: GameConstants.AlcremieSweet): KnockoutComputed<boolean>;
    static getCaughtStatus(sweet: GameConstants.AlcremieSweet): KnockoutComputed<CaughtStatus>;
    static getPokerusStatus(sweet: GameConstants.AlcremieSweet): KnockoutComputed<GameConstants.Pokerus>;
    private static getPrice;
    private static evolutions;
}
