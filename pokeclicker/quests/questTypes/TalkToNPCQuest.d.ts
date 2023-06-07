declare class TalkToNPCQuest extends Quest implements QuestInterface {
    initialValue?: number;
    customReward?: () => void;
    npc: NPC;
    constructor(npc: NPC, description: string, reward?: (() => void) | number, onLoad?: (() => void));
    begin(): void;
    claim(): boolean;
}
