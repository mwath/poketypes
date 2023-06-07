declare class GymPokemon {
    name: PokemonNameType;
    maxHealth: number;
    level: number;
    shiny: boolean;
    shadow: GameConstants.ShadowStatus;
    requirements: Requirement[];
    constructor(name: PokemonNameType, maxHealth: number, level: number, requirements?: Requirement | Requirement[], shiny?: boolean, shadow?: GameConstants.ShadowStatus);
}
