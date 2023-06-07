/// <reference path="knockout.d.ts"/>
 declare enum Tool {
    'Chisel' = 0,
    'Hammer' = 1
}
 declare class Mine {
    static Tool: typeof Tool;
    static maxSkips: number;
    static grid: Array<Array<Observable<number>>>;
    static rewardGrid: Array<Array<any>>;
    static itemsFound: Observable<number>;
    static itemsBuried: Observable<number>;
    static rewardNumbers: Array<number>;
    static surveyResult: Observable<any>;
    static skipsRemaining: Observable<number>;
    static toolSelected: Observable<Tool>;
    private static loadingNewLayer;
    private static maxPlacementAttempts;
    static loadMine(): void;
    private static getRandomCoord;
    private static canAddReward;
    private static alreadyHasRewardId;
    private static addReward;
    private static rotateReward;
    private static calculateRotation;
    static survey(): void;
    private static rewardSummary;
    private static updatesurveyResult;
    static click(i: number, j: number): void;
    private static hammer;
    private static chisel;
    static bomb(): void;
    private static skipLayer;
    private static breakTile;
    private static normalizeX;
    private static normalizeY;
    static getHeight(): number;
    static checkItemsRevealed(): void;
    static checkItemRevealed(id: number): boolean;
    static checkCompleted(): void;
    private static completed;
    static loadSavedMine(mine: any): void;
    static save(): Record<string, any>;
}
