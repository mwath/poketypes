/// <reference types="knockout" />
declare enum PartyPokemonSaveKeys {
    attackBonusPercent = 0,
    attackBonusAmount = 1,
    vitaminsUsed = 2,
    exp = 3,
    breeding = 4,
    shiny = 5,
    category = 6,
    levelEvolutionTriggered = 7,
    pokerus = 8,
    effortPoints = 9,
    heldItem = 10,
    defaultFemaleSprite = 11,
    hideShinyImage = 12,
    nickname = 13,
    shadow = 14,
    showShadowImage = 15
}
declare class PartyPokemon implements Saveable {
    id: number;
    name: PokemonNameType;
    evolutions: EvoData[];
    baseAttack: number;
    eggCycles: number;
    gender: any;
    saveKey: string;
    exp: number;
    evs: KnockoutComputed<number>;
    _attack: KnockoutComputed<number>;
    defaults: {
        attackBonusPercent: number;
        attackBonusAmount: number;
        vitaminsUsed: {};
        exp: number;
        breeding: boolean;
        shiny: boolean;
        category: number;
        levelEvolutionTriggered: boolean;
        pokerus: GameConstants.Pokerus;
        effortPoints: number;
        defaultFemaleSprite: boolean;
        hideShinyImage: boolean;
        nickname: string;
        shadow: GameConstants.ShadowStatus;
        showShadowImage: boolean;
    };
    _breeding: KnockoutObservable<boolean>;
    _shiny: KnockoutObservable<boolean>;
    _level: KnockoutObservable<number>;
    _attackBonusPercent: KnockoutObservable<number>;
    _attackBonusAmount: KnockoutObservable<number>;
    _category: KnockoutObservable<number>;
    _translatedName: KnockoutObservable<string>;
    _nickname: KnockoutObservable<string>;
    _displayName: KnockoutComputed<string>;
    _pokerus: KnockoutObservable<GameConstants.Pokerus>;
    vitaminsUsed: Record<GameConstants.VitaminType, KnockoutObservable<number>>;
    _effortPoints: KnockoutObservable<number>;
    heldItem: KnockoutObservable<HeldItem>;
    defaultFemaleSprite: KnockoutObservable<boolean>;
    hideShinyImage: KnockoutObservable<boolean>;
    _shadow: KnockoutObservable<GameConstants.ShadowStatus>;
    _showShadowImage: KnockoutObservable<boolean>;
    constructor(id: number, name: PokemonNameType, evolutions: EvoData[], baseAttack: number, eggCycles: number, shiny: boolean, gender: any, shadow: GameConstants.ShadowStatus);
    calculateAttack(ignoreLevel?: boolean): number;
    canCatchPokerus(): boolean;
    calculatePokerusTypes(): Set<number>;
    calculatePokerus(index: number): void;
    calculateLevelFromExp(): number;
    gainExp(exp: number): number;
    private getExpMultiplier;
    checkForLevelEvolution(): void;
    canUseStone(stoneType: GameConstants.StoneType): boolean;
    useStone(stoneType: GameConstants.StoneType): boolean;
    useVitamin(vitamin: GameConstants.VitaminType, amount: number): void;
    removeVitamin(vitamin: GameConstants.VitaminType, amount: number): void;
    totalVitaminsUsed: KnockoutComputed<number>;
    vitaminUsesRemaining: KnockoutComputed<number>;
    calculateEVAttackBonus: KnockoutComputed<number>;
    getEggSteps: KnockoutComputed<number>;
    getBreedingAttackBonus: KnockoutComputed<number>;
    breedingEfficiency: KnockoutComputed<number>;
    hideFromProteinList: KnockoutComputed<boolean>;
    giveHeldItem: (heldItem: HeldItem) => void;
    private addOrRemoveHeldItem;
    hideFromHeldItemList: KnockoutComputed<boolean>;
    fromJSON(json: Record<string, any>): void;
    toJSON(): {
        id: number;
        0: number;
        1: number;
        2: any;
        3: number;
        4: boolean;
        5: boolean;
        6: number;
        8: GameConstants.Pokerus;
        9: number;
        10: string;
        11: boolean;
        12: boolean;
        13: string;
        14: GameConstants.ShadowStatus;
        15: boolean;
    };
    get level(): number;
    set level(level: number);
    get attack(): number;
    get attackBonusAmount(): number;
    set attackBonusAmount(attackBonusAmount: number);
    get attackBonusPercent(): number;
    set attackBonusPercent(attackBonusPercent: number);
    get breeding(): boolean;
    set breeding(bool: boolean);
    get pokerus(): GameConstants.Pokerus;
    set pokerus(index: GameConstants.Pokerus);
    get effortPoints(): number;
    set effortPoints(amount: number);
    get shiny(): boolean;
    set shiny(bool: boolean);
    get category(): number;
    set category(index: number);
    get nickname(): string;
    set nickname(nickname: string);
    get displayName(): string;
    get shadow(): GameConstants.ShadowStatus;
    set shadow(value: GameConstants.ShadowStatus);
    get showShadowImage(): boolean;
    set showShadowImage(value: boolean);
}
