type FlashConfigState = '-' | 'F' | 'P';
declare class DungeonFlash {
    private flashConfig;
    private playerOffset;
    static tiers: readonly [DungeonFlash, DungeonFlash, DungeonFlash];
    constructor(flashConfig: FlashConfigState[][]);
    apply(board: DungeonTile[][][], position: Point): void;
}
