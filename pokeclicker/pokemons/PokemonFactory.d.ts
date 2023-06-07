/// <reference path="PokemonHelper.d.ts" />
/// <reference path="BattlePokemon.d.ts" />
declare class PokemonFactory {
    /**
     * Generate a wild pokemon based on route, region and the dataList.
     * @param route route that the player is on.
     * @param region region that the player is in.
     * @returns {any}
     */
    static generateWildPokemon(route: number, region: GameConstants.Region, subRegion: SubRegion): BattlePokemon;
    static routeLevel(route: number, region: GameConstants.Region): number;
    static routeHealth(route: number, region: GameConstants.Region): number;
    static routeMoney(route: number, region: GameConstants.Region, useRandomDeviation?: boolean): number;
    static routeDungeonTokens(route: number, region: GameConstants.Region): number;
    /**
     * Calculate if a shiny has spawned.
     * @param chance Base chance, should be from GameConstants.SHINY_CHANCE.*
     * @returns {boolean}
     */
    static generateShiny(chance: number, skipBonus?: boolean): boolean;
    static generatePartyPokemon(id: number, shiny?: boolean, gender?: GameConstants.BattlePokemonGender, shadow?: GameConstants.ShadowStatus): PartyPokemon;
    /**
     * Generate a Gym trainer pokemon based on gymName, index and the dataList.
     * @param gymName name of the gym that the player is fighting.
     * @param index index of the Pokémon that is being generated.
     * @returns {any}
     */
    static generateGymPokemon(gym: Gym, index: number): BattlePokemon;
    static generateDungeonPokemon(name: PokemonNameType, chestsOpened: number, baseHealth: number, level: number, mimic?: boolean): BattlePokemon;
    static generateDungeonTrainerPokemon(pokemon: GymPokemon, chestsOpened: number, baseHealth: number, level: number): BattlePokemon;
    static generateDungeonBoss(bossPokemon: DungeonBossPokemon, chestsOpened: number): BattlePokemon;
    static generateTemporaryBattlePokemon(battle: TemporaryBattle, index: number): BattlePokemon;
    private static generateRoamingEncounter;
    private static roamingEncounter;
    private static roamingChance;
    private static catchRateHelper;
    private static generateHeldItem;
    /**
     * generateGender but using Pokemon ID
     */
    static generateGenderById(id: any): number;
    /**
     * Calculate which gender has the pokemon.
     * @param chance Base chance, should be from GameConstants under Gender Ratio comment
     * @param genderType Gender type (Genderless, male only, etc.), should be from GameConstants under Gender Types comment
     * @returns GameConstants.BattlePokemonGender
     */
    static generateGender(chance: number, genderType: number): number;
}
