/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Feature.d.ts"/>
/// <reference path="../GameConstants.d.ts"/>
/// <reference path="./PokeballFilter.d.ts"/>
/// <reference path="./PokeballFilterOptions.d.ts"/>
/// <reference path="../enums/PokemonType.d.ts"/>
declare class PokeballFilters implements Feature {
    name: string;
    saveKey: string;
    defaults: {};
    presets: PokeballFilterParams[];
    list: ObservableArray<PokeballFilter>;
    displayList: import("knockout").PureComputed<PokeballFilter[]>;
    testSettings: {
        [k: string]: import("../settings/Setting").default<boolean> | import("../settings/Setting").default<Pokerus> | import("../settings/Setting").default<PokemonType>;
    };
    testSettingsData: import("knockout").PureComputed<any>;
    static hideFilter(filter: PokeballFilter): boolean;
    initialize(): void;
    canAccess(): boolean;
    update(): void;
    getFilterByName(name: string): PokeballFilter;
    findMatch(data: PokeballFilterMatchData): PokeballFilter | undefined;
    deleteFilter(filter: PokeballFilter): Promise<void>;
    createFilter(): void;
    addFilterOption(filter: PokeballFilter, option: keyof PokeballFilterOptions): void;
    removeFilterOption(filter: PokeballFilter, option: keyof PokeballFilterOptions): void;
    reset(): Promise<void>;
    toJSON(): {
        list: Required<PokeballFilterParams>[];
    };
    fromJSON(json: Record<string, any>): void;
}
