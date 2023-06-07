/// <reference path="../../src/declarations/settings/BreedingFilters.d.ts" />
/// <reference path="../../src/declarations/GameHelper.d.ts" />
/// <reference path="../../src/declarations/DataStore/common/Feature.d.ts" />
/// <reference path="../../src/declarations/breeding/EggType.d.ts" />
/// <reference types="knockout" />
import Currency = GameConstants.Currency;
declare class Breeding implements Feature {
    private multiplier;
    name: string;
    saveKey: string;
    defaults: {
        eggList: KnockoutObservable<Egg>[];
        eggSlots: number;
        queueList: any[];
        queueSlots: number;
    };
    hatcheryHelpers: HatcheryHelpers;
    private _eggList;
    private _eggSlots;
    private _queueList;
    queueSlots: KnockoutObservable<number>;
    hatchList: {
        [name: number]: PokemonNameType[][];
    };
    constructor(multiplier: Multiplier);
    initialize(): void;
    update(delta: number): void;
    canAccess(): boolean;
    fromJSON(json: Record<string, any>): void;
    toJSON(): Record<string, any>;
    canBreedPokemon(): boolean;
    hasFreeEggSlot(isHelper?: boolean): boolean;
    hasFreeQueueSlot(): boolean;
    gainEgg(e: Egg, isHelper?: boolean): boolean;
    gainRandomEgg(): boolean;
    progressEggsBattle(route: number, region: GameConstants.Region): void;
    progressEggs(amount: number): void;
    private getStepMultiplier;
    addPokemonToHatchery(pokemon: PartyPokemon): boolean;
    addToQueue(pokemon: PartyPokemon): boolean;
    removeFromQueue(index: number): boolean;
    clearQueue(shouldConfirm?: boolean): void;
    gainPokemonEgg(pokemon: PartyPokemon | PokemonListData, isHelper?: boolean): boolean;
    hatchPokemonEgg(index: number, nextEgg?: boolean): void;
    private nextEggFromQueue;
    moveEggs(): void;
    createEgg(pokemonId: number, type?: EggType): Egg;
    createTypedEgg(type: EggType): Egg;
    createRandomEgg(): Egg;
    createFossilEgg(fossil: string): Egg;
    getSteps(eggCycles: number): number;
    calculateBaseForm(pokemonName: PokemonNameType): PokemonNameType;
    getEggSlotCost(slot: number): number;
    buyEggSlot(): void;
    nextEggSlotCost(): Amount;
    get eggSlots(): number;
    set eggSlots(value: number);
    get queueList(): KnockoutObservable<Array<number>>;
    gainEggSlot(): void;
    gainQueueSlot(amt?: number): void;
    queueSlotsGainedFromRegion(region: GameConstants.Region): number;
    get eggList(): Array<KnockoutObservable<Egg>>;
    set eggList(value: Array<KnockoutObservable<Egg>>);
    getAllCaughtStatus(): CaughtStatus;
    getTypeCaughtStatus(type: EggType): CaughtStatus;
    checkCloseModal(): void;
    usableQueueSlots: KnockoutComputed<number>;
    updateQueueSizeLimit(size: number): void;
    fireAllButtonTooltip(): string;
}
