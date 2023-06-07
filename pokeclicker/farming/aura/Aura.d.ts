declare class Aura {
    auraType: AuraType;
    auraMultipliers: number[];
    constructor(auraType: AuraType, auraMultipliers: number[]);
    getAuraValue(stage: PlotStage): number;
}
