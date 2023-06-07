declare abstract class TownContent {
    abstract cssClass(): string;
    abstract text(): string;
    abstract isVisible(): boolean;
    abstract onclick(): void;
    tooltip: string;
    requirements: (Requirement | OneFromManyRequirement)[];
    parent: Town;
    addParent(parent: Town): void;
    areaStatus(): areaStatus;
    isUnlocked(): boolean;
    clears(): number;
    protectedOnclick(): void;
    constructor(requirements?: Requirement[]);
}
declare class DockTownContent extends TownContent {
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
declare class BattleFrontierTownContent extends TownContent {
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
declare class NextRegionTownContent extends TownContent {
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
declare class MoveToDungeon extends TownContent {
    private dungeon;
    private visibleRequirement;
    constructor(dungeon: Dungeon, visibleRequirement?: Requirement);
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    isUnlocked(): boolean;
    areaStatus(): areaStatus;
    clears(): number;
}
declare class MoveToTown extends TownContent {
    private townName;
    private visibleRequirement;
    private includeAreaStatus;
    constructor(townName: string, visibleRequirement?: Requirement, includeAreaStatus?: boolean);
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    isUnlocked(): boolean;
    areaStatus(): areaStatus;
}
declare class WeatherAppTownContent extends TownContent {
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
