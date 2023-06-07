/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Saveable.d.ts"/>
declare type PokemonCategory = {
    id: number;
    name: KnockoutObservable<string>;
    color: KnockoutObservable<string>;
    subscriber?: KnockoutSubscription;
};
 class PokemonCategories implements Saveable {
    static categories: KnockoutObservableArray<PokemonCategory>;
    saveKey: string;
    defaults: Record<string, any>;
    static initialize(): void;
    static reset(): void;
    static addCategory(name: string, color: string, id?: number): void;
    static removeCategory(id: number, force?: boolean): void;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
