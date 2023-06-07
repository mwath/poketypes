/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference types="knockout" />
declare class DungeonRunner {
    static dungeon: Dungeon;
    static timeLeft: KnockoutObservable<number>;
    static timeLeftPercentage: KnockoutObservable<number>;
    static timeBonus: KnockoutObservable<number>;
    static fighting: KnockoutObservable<boolean>;
    static map: DungeonMap;
    static chestsOpened: KnockoutObservable<number>;
    private static chestsOpenedPerFloor;
    static currentTileType: any;
    static encountersWon: KnockoutObservable<number>;
    static fightingBoss: KnockoutObservable<boolean>;
    static defeatedBoss: KnockoutObservable<string>;
    static dungeonFinished: KnockoutObservable<boolean>;
    static fightingLootEnemy: boolean;
    static initializeDungeon(dungeon: any): boolean;
    static tick(): void;
    /**
     * Handles the click event in the dungeon view
     */
    static handleClick(): void;
    static openChest(): void;
    static gainLoot(input: any, amount: any, weight: any): any;
    static lootNotification(input: any, amount: any, weight: any, image: any): void;
    static startBossFight(): void;
    static nextFloor(): void;
    static dungeonLeave(shouldConfirm?: any): Promise<void>;
    private static dungeonLost;
    static dungeonWon(): void;
    static timeLeftSeconds: KnockoutComputed<string>;
    static dungeonCompleted(dungeon: Dungeon, includeShiny: boolean): boolean;
    static isAchievementsComplete(dungeon: Dungeon): boolean;
    static isThereQuestAtLocation(dungeon: Dungeon): boolean;
    static hasEnoughTokens(): boolean;
    static dungeonLevel(): number;
    static getFlash(dungeonName: any): DungeonFlash | undefined;
}
