declare class RoamerNPC extends NPC {
    name: string;
    dialog: string[];
    region: GameConstants.Region;
    subRegionRoamerGroup: number;
    constructor(name: string, dialog: string[], region: GameConstants.Region, subRegionRoamerGroup: number, image?: string, requirement?: Requirement | MultiRequirement | OneFromManyRequirement);
    get dialogHTML(): string;
}
