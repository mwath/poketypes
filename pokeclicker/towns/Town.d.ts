/// <reference path="../../src/declarations/enums/Badges.d.ts" />
/// <reference path="NPC.d.ts" />
/// <reference path="KantoBerryMasterNPC.d.ts" />
/// <reference path="ProfNPC.d.ts" />
/// <reference path="RoamerNPC.d.ts" />
/// <reference path="TownContent.d.ts" />
type TownOptionalArgument = {
    requirements?: Requirement[];
    npcs?: NPC[];
    ignoreAreaStatus?: boolean;
};
declare class Town {
    name: string;
    region: GameConstants.Region;
    requirements: Requirement[];
    dungeon?: Dungeon;
    npcs?: NPC[];
    startingTown: boolean;
    content: TownContent[];
    subRegion: GameConstants.SubRegions;
    ignoreAreaStatus: boolean;
    constructor(name: string, region: GameConstants.Region, subRegion: GameConstants.SubRegions, content?: TownContent[], optional?: TownOptionalArgument);
    isUnlocked(): boolean;
}
declare class DungeonTown extends Town {
    dungeon: Dungeon;
    constructor(name: string, region: GameConstants.Region, subregion: GameConstants.SubRegions, requirements?: Requirement[], content?: TownContent[], optional?: TownOptionalArgument);
}
