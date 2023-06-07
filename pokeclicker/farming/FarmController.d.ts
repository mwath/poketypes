/// <reference path="../../src/declarations/enums/MulchType.d.ts" />
/// <reference types="knockout" />
declare class FarmController {
    static navigateIndex: KnockoutObservable<number>;
    static berryListFiltered: KnockoutObservableArray<BerryType>;
    static numberOfTabs: KnockoutComputed<number>;
    static farmingModalTabSelected: KnockoutObservable<string>;
    static berryListEnd: KnockoutComputed<number>;
    static selectedBerry: KnockoutObservable<BerryType>;
    static selectedMulch: KnockoutObservable<MulchType>;
    static selectedShovel: KnockoutObservable<boolean>;
    static selectedMulchShovel: KnockoutObservable<boolean>;
    static selectedPlotSafeLock: KnockoutObservable<boolean>;
    static berryListVisible: KnockoutObservable<boolean>;
    static multipliers: string[];
    static multIndex: KnockoutObservable<number>;
    static readonly BERRIES_PER_PAGE = 8;
    static initialize(): void;
    static openFarmModal(): void;
    static getImage(index: number): string;
    static calculateCssClass(): "PlotSafeLockSelected" | "ShovelSelected" | "MulchShovelSelected" | "BerrySelected" | "MulchSelected";
    static calcMulchClass(plot: Plot): string;
    static plotClick(index: number, event: MouseEvent): void;
    private static shiftTogglePlotSafeLock;
    static toggleAllPlotsLocked(lock: boolean): void;
    private static handleClickActions;
    static mulchAll(): void;
    static navigateRight(): void;
    static navigateLeft(): void;
    static getUnlockedBerryListWithIndex(): BerryType[];
    static getUnlockedBerryList(): BerryType[];
    private static getAmount;
    static incrementMultiplier(): void;
    static decrementMultiplier(): void;
    static getBackgroundColor(index: number): string;
    static getBerryImage(index: number): string;
    static getHint(index: number, checkSeen?: boolean, checkUnlocked?: boolean): string;
    static additionalInfoTooltip: KnockoutComputed<string>;
}
