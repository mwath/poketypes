declare class DefeatDungeonBossQuest extends Quest implements QuestInterface {
    dungeon: string;
    dungeonBoss: PokemonNameType | string;
    customReward?: () => void;
    constructor(dungeon: string, dungeonBoss: PokemonNameType | string, reward?: (() => void) | number, description?: string, onLoad?: (() => void));
    begin(): void;
    onLoad(): void;
    claim(): boolean;
}
