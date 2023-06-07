/// <reference path="../../src/declarations/enums/BerryType.d.ts" />
/// <reference path="../../src/declarations/enums/FlavorType.d.ts" />
/// <reference path="../../src/declarations/enums/BerryColor.d.ts" />
/// <reference path="../../src/declarations/enums/BerryFirmness.d.ts" />
/// <reference path="../../src/declarations/enums/SizeUnits.d.ts" />
interface BerryFlavor {
    type: FlavorType;
    value: number;
}
declare class Berry {
    type: BerryType;
    growthTime: number[];
    harvestAmount: number;
    replantRate: number;
    farmValue: number;
    exp: number;
    smoothness: number;
    color: BerryColor;
    size: number;
    firmness: BerryFirmness;
    description: string[];
    aura?: Aura;
    flavors: BerryFlavor[];
    wander: PokemonNameType[];
    static baseWander: PokemonNameType[];
    static colorWander: Record<BerryColor, PokemonNameType[]>;
    constructor(type: BerryType, growthTime: number[], harvestAmount: number, replantRate: number, farmValue: number, exp: number, flavors: number[], smoothness: number, color: BerryColor, size: number, firmness: BerryFirmness, description: string[], aura?: Aura, wander?: PokemonNameType[]);
    get descriptionHTML(): string;
}
