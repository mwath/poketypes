/// <reference types="knockout" />
type ChestMetaData = NonNullable<{
    loot: Loot;
    tier: LootTier;
}>;
declare class DungeonTile<T extends GameConstants.DungeonTile = GameConstants.DungeonTile> {
    metadata: T extends GameConstants.DungeonTile.chest ? ChestMetaData : unknown;
    _isVisible: boolean;
    _isVisited: boolean;
    _hasPlayer: boolean;
    type: KnockoutObservable<GameConstants.DungeonTile>;
    cssClass: KnockoutObservable<string>;
    constructor(type: T, metadata: T extends GameConstants.DungeonTile.chest ? ChestMetaData : unknown);
    get isVisible(): boolean;
    set isVisible(val: boolean);
    get isVisited(): boolean;
    set isVisited(val: boolean);
    get hasPlayer(): boolean;
    set hasPlayer(val: boolean);
    calculateCssClass(): void;
}
