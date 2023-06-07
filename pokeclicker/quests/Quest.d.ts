/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference types="knockout" />
declare abstract class Quest {
    index: number;
    amount: number;
    customDescription?: string;
    pointsReward: number;
    progress: KnockoutComputed<number>;
    progressText: KnockoutComputed<string>;
    inProgress: KnockoutComputed<boolean>;
    isCompleted: KnockoutComputed<boolean>;
    claimed: KnockoutObservable<boolean>;
    private _focus;
    initial: KnockoutObservable<any>;
    notified: boolean;
    autoComplete: boolean;
    autoCompleter: KnockoutSubscription;
    inQuestLine: boolean;
    _onLoad?: () => void;
    onLoadCalled: boolean;
    constructor(amount: number, pointsReward: number);
    static canComplete(): boolean;
    get description(): string;
    static generateData(): any[];
    static randomizeReward(pointsReward: number): number;
    get xpReward(): number;
    claim(): boolean;
    quit(shouldConfirm?: boolean): void;
    begin(): void;
    set focus(value: KnockoutObservable<any>);
    get focus(): KnockoutObservable<any>;
    protected createProgressObservables(): void;
    onLoad(): void;
    complete(): void;
    createAutoCompleter(): void;
    toJSON(): Record<string, any>;
    fromJSON(json: any): void;
}
