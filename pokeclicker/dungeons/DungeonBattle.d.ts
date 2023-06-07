/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="../Battle.d.ts" />
/// <reference types="knockout" />
declare class DungeonBattle extends Battle {
    static trainer: KnockoutObservable<DungeonTrainer>;
    static trainerPokemonIndex: KnockoutObservable<number>;
    static remainingTrainerPokemon: KnockoutComputed<number>;
    static defeatedTrainerPokemon: KnockoutComputed<number>;
    /**
     * Award the player with money and exp, and throw a Pokéball if applicable
     */
    static defeatPokemon(): void;
    /**
     * Handles defeating a trainer Pokemon
     */
    private static defeatTrainerPokemon;
    private static nextTrainerPokemon;
    static generateNewEnemy(): void;
    static generateNewLootEnemy(pokemon: PokemonNameType): void;
    /**
     * Handles generating the enemy Trainer Pokemon
     */
    static generateTrainerPokemon(): void;
    static generateNewBoss(): void;
}
