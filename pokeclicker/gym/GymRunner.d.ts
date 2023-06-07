/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="../../src/declarations/enums/Badges.d.ts" />
/// <reference types="knockout" />
declare class GymRunner {
    static timeLeft: KnockoutObservable<number>;
    static timeLeftPercentage: KnockoutObservable<number>;
    static timeBonus: KnockoutObservable<number>;
    static gymObservable: KnockoutObservable<Gym>;
    static running: KnockoutObservable<boolean>;
    static autoRestart: KnockoutObservable<boolean>;
    static initialRun: boolean;
    static startGym(gym: Gym, autoRestart?: boolean, initialRun?: boolean): void;
    private static hideGif;
    static resetGif(): void;
    static tick(): void;
    static gymLost(): void;
    static gymWon(gym: Gym): void;
    static timeLeftSeconds: KnockoutComputed<string>;
    static getEnvironmentArea(): "Water" | "Ice" | "Fire" | "Forest" | "Cave" | "GemCave" | "PowerPlant" | "Mansion" | "Graveyard" | "Default";
}
