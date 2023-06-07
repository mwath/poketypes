/// <reference path="./MultiplierType.d.ts"/>
declare type GetMultiplierFunction = (useBonus: boolean) => number;
 type MultTypeString = keyof typeof MultiplierType;
 class Multiplier {
    private multipliers;
    constructor();
    addBonus(type: MultTypeString, bonusFunction: GetMultiplierFunction): void;
    getBonus(type: MultTypeString, useBonus?: boolean): number;
}
