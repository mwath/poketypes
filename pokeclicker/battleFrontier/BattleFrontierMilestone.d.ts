/// <reference types="knockout" />
declare class BattleFrontierMilestone {
    stage: number;
    rewardFunction: () => void;
    requirement?: Requirement;
    _image?: string;
    private _description?;
    obtained: KnockoutObservable<boolean>;
    constructor(stage: number, rewardFunction: () => void, requirement?: Requirement, _image?: string, _description?: string);
    isUnlocked(): boolean;
    gain(): void;
    get image(): string;
    get description(): string;
    get displayName(): string | KnockoutObservable<string>;
}
