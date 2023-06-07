/// <reference path="../GameConstants.d.ts"/>
/// <reference path="../pokemons/PokemonNameType.d.ts"/>
/// <reference path="./Requirement.d.ts"/>
declare class MegaEvolveRequirement extends Requirement {
    private name;
    private megaStone;
    private readonly baseAttackMultiplier;
    constructor(name: PokemonNameType, megaStone: MegaStoneType);
    getProgress(): number;
    hint(): string;
}
