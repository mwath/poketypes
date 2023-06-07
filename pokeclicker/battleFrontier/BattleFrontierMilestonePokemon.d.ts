declare class BattleFrontierMilestonePokemon extends BattleFrontierMilestone {
    private pokemonName;
    constructor(stage: number, pokemonName: string, requirement?: Requirement, image?: string);
    get displayName(): Computed<string>;
}
