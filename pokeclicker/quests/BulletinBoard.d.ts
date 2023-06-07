/// <reference types="knockout" />
declare class BulletinBoard extends TownContent {
    board: GameConstants.BulletinBoards;
    static selectedBulletinBoard: KnockoutObservable<BulletinBoard>;
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    areaStatus(): areaStatus.unlockedUnfinished | areaStatus.completed;
    getQuests(): QuestLine[];
    constructor(board: GameConstants.BulletinBoards);
}
