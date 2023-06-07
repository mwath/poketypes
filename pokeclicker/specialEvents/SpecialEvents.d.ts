/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="../../src/declarations/DataStore/common/Feature.d.ts" />
declare class SpecialEvents implements Feature {
    name: string;
    saveKey: string;
    defaults: Record<string, any>;
    static events: SpecialEvent[];
    static newEvent(title: string, description: string, startTime: Date, startFunction: EmptyCallback, endTime: Date, endFunction: EmptyCallback): void;
    initialize(): void;
    fromJSON(json: any): void;
    toJSON(): {};
    canAccess(): boolean;
    update(delta: number): void;
    getEvent(eventName: string): SpecialEvent;
}
