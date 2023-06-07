/// <reference types="knockout" />
declare class DungeonMap {
    private generateChestLoot;
    private flash?;
    board: KnockoutObservable<DungeonTile[][][]>;
    playerPosition: KnockoutObservable<Point>;
    playerMoved: KnockoutObservable<boolean>;
    totalFights: KnockoutObservable<number>;
    totalChests: KnockoutObservable<number>;
    floorSizes: number[];
    constructor(size: number, generateChestLoot: () => {
        loot: Loot;
        tier: LootTier;
    }, flash?: DungeonFlash);
    moveToCoordinates(x: number, y: number, floor?: any): void;
    moveUp(): void;
    moveRight(): void;
    moveDown(): void;
    moveLeft(): void;
    moveToTile(point: Point): boolean;
    showChestTiles(): void;
    showAllTiles(): void;
    currentTile(): DungeonTile;
    nearbyTiles(point: Point): DungeonTile[];
    hasAccessToTile(point: Point): boolean;
    generateMap(): DungeonTile[][][];
    /**
     * Shuffles array in place.
     * @param {Array} a items The array containing the items.
     */
    shuffle(a: any): void;
}
