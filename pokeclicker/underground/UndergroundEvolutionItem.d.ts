/// <reference path="../GameConstants.d.ts"/>
/// <reference path="../requirements/Requirement.d.ts"/>
/// <reference path="./UndergroundItem.d.ts"/>
declare class UndergroundEvolutionItem extends UndergroundItem {
    type: StoneType;
    constructor(name: string, id: number, space: Array<Array<number>>, type: StoneType, value?: number, requirement?: Requirement, weight?: (() => number) | number);
}
