
 declare enum SortOptions {
    id = 0,
    name = 1,
    attack = 2,
    level = 3,
    shiny = 4,
    baseAttack = 5,
    attackBonus = 6,
    breedingEfficiency = 7,
    eggCycles = 8,
    timesHatched = 9,
    category = 10,
    vitaminsUsed = 11,
    evs = 12
}
declare type SortOptionConfig = {
    text: string;
    getValue: (p: any) => any;
    invert?: boolean;
};
 declare const SortOptionConfigs: Record<SortOptions, SortOptionConfig>;
