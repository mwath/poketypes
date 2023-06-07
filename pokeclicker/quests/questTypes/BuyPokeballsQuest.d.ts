/// <reference path="../Quest.d.ts" />
declare class BuyPokeballsQuest extends Quest implements QuestInterface {
    private pokeball;
    constructor(amount: number, reward: number, pokeball: GameConstants.Pokeball);
    get description(): string;
    toJSON(): Record<string, any>;
}
