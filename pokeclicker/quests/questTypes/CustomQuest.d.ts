/// <reference types="knockout" />
type CustomQuestOptionalArgument = {
    clearedMessage?: string;
    npcDisplayName?: string;
    npcImageName?: string;
};
declare class CustomQuest extends Quest implements QuestInterface {
    optionalArgs: CustomQuestOptionalArgument;
    static questObservable: KnockoutObservable<CustomQuest>;
    initialValue?: number;
    customReward?: () => void;
    getClearedMessage(): string;
    getNpcDisplayName(): string;
    getNpcImageName(): string;
    getNpcImage(): string;
    constructor(amount: number, reward: (() => void) | number, description: string, focus: any, initialValue?: number, onLoad?: (() => void), optionalArgs?: CustomQuestOptionalArgument);
    begin(): void;
    claim(): boolean;
}
