type TemporaryBattleOptionalArgument = {
    rewardFunction?: () => void;
    firstTimeRewardFunction?: () => void;
    isTrainerBattle?: boolean;
    displayName?: string;
    returnTown?: string;
    imageName?: string;
    visibleRequirement?: Requirement;
    hideTrainer?: boolean;
    environment?: GameConstants.Environment;
};
declare class TemporaryBattle extends TownContent {
    name: string;
    private pokemons;
    defeatMessage: string;
    optionalArgs: TemporaryBattleOptionalArgument;
    completeRequirements: (Requirement | OneFromManyRequirement)[];
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    areaStatus(): areaStatus.locked | areaStatus.unlockedUnfinished | areaStatus.completed;
    getDisplayName(): string;
    getImageName(): string;
    getTown(): Town;
    getImage(): string;
    constructor(name: string, pokemons: GymPokemon[], defeatMessage: string, requirements?: Requirement[], completeRequirements?: Requirement[], optionalArgs?: TemporaryBattleOptionalArgument);
    getPokemonList(): GymPokemon[];
}
