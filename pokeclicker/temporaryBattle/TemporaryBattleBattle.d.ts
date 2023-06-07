/// <reference path="../Battle.d.ts" />
/// <reference types="knockout" />
declare class TemporaryBattleBattle extends Battle {
    static battle: TemporaryBattle;
    static index: KnockoutObservable<number>;
    static totalPokemons: KnockoutObservable<number>;
    static pokemonAttack(): void;
    static clickAttack(): void;
    static defeatPokemon(): void;
    private static endFight;
    /**
     * Reset the counter.
     */
    static generateNewEnemy(): void;
    static pokemonsDefeatedComputable: KnockoutComputed<number>;
    static pokemonsUndefeatedComputable: KnockoutComputed<number>;
}
