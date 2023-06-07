/// <reference path="../../src/declarations/items/Item.d.ts" />
/// <reference types="knockout" />
declare class HeldItem extends Item {
    canUse: (pokemon: PartyPokemon) => boolean;
    static heldItemSelected: KnockoutObservable<HeldItem>;
    regionUnlocked: GameConstants.Region;
    constructor(name: string, basePrice: number, currency: GameConstants.Currency, shopOptions: ShopOptions, displayName: string, description: string, regionUnlocked: GameConstants.Region, canUse: (pokemon: PartyPokemon) => boolean);
    static getSortedHeldItems(): Item[];
    isUnlocked(): boolean;
}
declare class AttackBonusHeldItem extends HeldItem {
    private _attackBonus;
    private applyBonus;
    constructor(name: string, basePrice: number, currency: GameConstants.Currency, shopOptions: ShopOptions, displayName: string, _attackBonus: number, regionUnlocked: GameConstants.Region, pokemonDescription?: string, canUse?: (pokemon: PartyPokemon) => boolean, applyBonus?: () => boolean, additionDescription?: string);
    get attackBonus(): number;
}
declare class TypeRestrictedAttackBonusHeldItem extends AttackBonusHeldItem {
    constructor(name: string, basePrice: number, currency: GameConstants.Currency, shopOptions: ShopOptions, displayName: string, _attackBonus: number, type: PokemonType, regionUnlocked: GameConstants.Region);
}
declare class EVsGainedBonusHeldItem extends HeldItem {
    gainedBonus: number;
    constructor(name: string, basePrice: number, currency: GameConstants.Currency, shopOptions: ShopOptions, displayName: string, gainedBonus: number, regionUnlocked: GameConstants.Region);
}
declare class ExpGainedBonusHeldItem extends HeldItem {
    gainedBonus: number;
    constructor(name: string, basePrice: number, currency: GameConstants.Currency, shopOptions: ShopOptions, displayName: string, gainedBonus: number, regionUnlocked: GameConstants.Region, pokemonDescription?: string, canUse?: (pokemon: PartyPokemon) => boolean);
}
