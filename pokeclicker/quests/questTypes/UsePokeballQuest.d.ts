/// <reference path="../Quest.d.ts" />
declare class UsePokeballQuest extends Quest implements QuestInterface {
    private pokeball;
    constructor(amount: number, reward: number, pokeball: GameConstants.Pokeball);
    static generateData(): any[];
    private static calcReward;
    get description(): string;
    toJSON(): Record<string, any>;
}
