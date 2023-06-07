/// <reference path="../enums/PokemonType.d.ts"/>
/// <reference path="../requirements/Requirement.d.ts"/>
/// <reference path="./UndergroundItem.d.ts"/>
declare class UndergroundGemItem extends UndergroundItem {
    name: string;
    id: number;
    type: PokemonType;
    value: number;
    requirement?: Requirement;
    constructor(name: string, id: number, space: Array<Array<number>>, type: PokemonType, value?: number, requirement?: Requirement, weight?: (() => number) | number);
}
