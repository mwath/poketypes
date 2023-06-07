/// <reference path="./Requirement.d.ts"/>
declare class SpecialEventRequirement extends Requirement {
    private specialEventName;
    constructor(specialEventName: string);
    getProgress(): number;
    hint(): string;
}
