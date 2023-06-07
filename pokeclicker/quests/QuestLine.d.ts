/// <reference types="knockout" />
declare class QuestLine {
    name: string;
    description: string;
    requirement?: Requirement;
    bulletinBoard: GameConstants.BulletinBoards;
    state: KnockoutObservable<QuestLineState>;
    quests: KnockoutObservableArray<Quest>;
    curQuest: KnockoutComputed<number>;
    curQuestObject: KnockoutComputed<any>;
    curQuestInitial: KnockoutObservable<number>;
    totalQuests: number;
    autoBegin: KnockoutSubscription;
    constructor(name: string, description: string, requirement?: Requirement, bulletinBoard?: GameConstants.BulletinBoards);
    addQuest(quest: Quest): void;
    beginQuest(index?: number, initial?: number): void;
    resumeAt(index: number, initial: any): void;
    toJSON(): {
        state: QuestLineState;
        name: string;
        quest: number;
        initial: number;
    };
}
